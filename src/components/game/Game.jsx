import React from "react";
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';
import {Snake} from "./Snake";
import {Fences} from "./Fences";
import {Tangerines} from "./Tangerines";
import {GoldTangerines} from "./GoldTangerines";
import {SuspiciousTangerines} from "./SuspiciousTangerines";
import {Enemies} from "./Enemies";

export function Game({gameData}) {
    return (
        <div className="App">
            <Canvas style={{height: "100vh", background: "black"}}>
                <OrbitControls/>
                <directionalLight position={[1, 2, 3]}/>
                <ambientLight intensity={0.5}/>
                <Fences fences={gameData.fences}/>
                <Tangerines food={gameData.food}/>
                <GoldTangerines golden={gameData.specialFood.golden}/>
                <SuspiciousTangerines sus={gameData.specialFood.suspicious}/>
                <Snake data={gameData.snakes}/>
                <Enemies enemies={gameData.enemies}/>
            </Canvas>
        </div>
    );
}
