import React, {useEffect, useMemo, useState} from "react";
import isEqual from "lodash.isequal";
const Tangerine = ({position}) => {
    return (
        <mesh position={position} rotation={[0, 0, 0]}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange" transparent={true}/>
        </mesh>
    )
}

export const Tangerines = ({food}) => {

    const [cache, setCache] = useState([]);

    const shouldUpdateMap = useMemo(() => {
        return !isEqual(cache, food);
    }, [cache, food]);

    useEffect(() => {
        if (shouldUpdateMap) {
            setCache(food);
        }
    },[shouldUpdateMap, food]);

    return(
        cache.map(f => <Tangerine key={`tangerine-${f.c[0]}-${f.c[1]}-${f.c[2]}`} position={f.c}/>)
    )
}