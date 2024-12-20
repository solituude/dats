import React, {useEffect, useMemo, useState} from "react";
import isEqual from "lodash.isequal";

const Enemy = ({position}) => {
    return (
        <>
            {
                position.map(p =>
                    <mesh key={`enemy-snake-${p[0]}-${p[1]}-${p[2]}`} position={p} rotation={[0, 0, 0]}>
                        <boxGeometry/>
                        <meshStandardMaterial color={"red"} transparent={true}/>
                    </mesh>)
            }
        </>)
}

export const Enemies = ({enemies}) => {
    const [cache, setCache] = useState([]);

    const shouldUpdateMap = useMemo(() => {
        return !isEqual(cache, enemies);
    }, [cache, enemies]);

    useEffect(() => {
        if (shouldUpdateMap) {
            setCache(enemies);
        }
    },[shouldUpdateMap, enemies]);
    return(
        cache?.map(e => <Enemy key={`enemy-${e.geometry[0]}-${e.geometry[1]}-${e.geometry[2]}`}
                               position={e.geometry}/>)
    )
}