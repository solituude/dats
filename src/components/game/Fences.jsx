import React, {useEffect, useMemo, useState} from "react";
import isEqual from "lodash.isequal";

const Box = ({position}) => {
    return (
        <mesh position={position} rotation={[0, 0, 0]}>
            <boxGeometry/>
            <meshStandardMaterial color="grey" transparent={true}/>
        </mesh>
    )
}
export const Fences = ({fences}) => {
    const [cache, setCache] = useState([]);

    const shouldUpdateMap = useMemo(() => {
        return !isEqual(cache, fences);
    }, [cache, fences]);

    useEffect(() => {
        if (shouldUpdateMap) {
            setCache(fences);
        }
    },[shouldUpdateMap, fences]);

    return(
        <>
            {cache.map(f => <Box key={`fence-${f[0]}-${f[1]}-${f[2]}`} position={f}/>)}
        </>
    )
}