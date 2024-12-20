import React, {useEffect, useMemo, useState} from "react";
import isEqual from "lodash.isequal";

const GoldTangerine = ({position}) => {
    return (
        <mesh position={position} rotation={[0, 0, 0]}>
            <sphereGeometry/>
            <meshStandardMaterial color="gold"
                                  emissive="gold"
                                  transparent={true}
            />
        </mesh>
    )
}
export const GoldTangerines = ({golden}) => {

    const [cache, setCache] = useState([]);

    const shouldUpdateMap = useMemo(() => {
        return !isEqual(cache, golden);
    }, [cache, golden]);

    useEffect(() => {
        if (shouldUpdateMap) {
            setCache(golden);
        }
    },[shouldUpdateMap, golden]);

    return(
        cache?.map(s => <GoldTangerine position={s} key={`golden-tangerine-${s[0]}-${s[1]}-${s[2]}`}/>)
    )
}