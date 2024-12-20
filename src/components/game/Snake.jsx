import React, {useEffect, useMemo, useState} from "react";
import isEqual from "lodash.isequal";

const colors = ["lightGreen", "lightBlue", "pink"];
export const Snake = (data) => {
    const [cachedSnakes, setCachedSnakes] = useState([]);

    const shouldUpdateMap = useMemo(() => {
        return !isEqual(cachedSnakes, data);
    }, [cachedSnakes, data]);

    useEffect(() => {
        if (shouldUpdateMap) {
            setCachedSnakes(data);
        }
    },[data, shouldUpdateMap]);

    return (
        <>
            {
                cachedSnakes.length > 0 && cachedSnakes.map((s, ind) =>
                    s.geometry.map((g) =>
                        <mesh key={`snake-${ind}-geom-${g[0]}-${g[1]}-${g[2]}`} position={g} rotation={[0, 0, 0]}>
                            <boxGeometry/>
                            <meshStandardMaterial color={colors[ind]} emissive={colors[ind]} transparent={true}/>
                        </mesh>
                    )
                )
            }
        </>
    )
}