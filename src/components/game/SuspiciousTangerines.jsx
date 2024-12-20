import React, {useEffect, useMemo, useState} from "react";
import isEqual from "lodash.isequal";

const Sus = ({position}) => {
    return (
        <mesh position={position} rotation={[0, 0, 0]}>
            <sphereGeometry/>
            <meshStandardMaterial color="purple" transparent={true}/>
        </mesh>
    )
}

export const SuspiciousTangerines = ({sus}) => {
    const [cache, setCache] = useState([]);

    const shouldUpdateMap = useMemo(() => {
        return !isEqual(cache, sus);
    }, [cache, sus]);

    useEffect(() => {
        if (shouldUpdateMap) {
            setCache(sus);
        }
    },[shouldUpdateMap, sus]);

    return(
        cache?.map(s => <Sus key={`sus-tangerine-${s[0]}-${s[1]}-${s[2]}`} position={s}/>)
    )
}