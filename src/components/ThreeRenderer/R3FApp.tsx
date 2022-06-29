import * as THREE from 'three'
import * as React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Camera, Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { RenderModel_LaW } from '../../state/RenderModel_LaW';
import {Box, Wall} from './R3FWall';
import extractWallProperties from '../Shared/WallPropsTools';
import { PerspectiveCamera } from 'three';

//const deg2rad = degrees => degrees * (Math.PI / 180);

export default function R3FApp({ renderModel }: { renderModel: RenderModel_LaW } ){

    let walls = Array.from(renderModel.walls).map(([id, wall]) => {
        let wallProps = extractWallProperties(renderModel, id);
        return (
                <Wall key={id} {...wallProps} />
             )

    });

    //const { camera } = useThree();
    //camera.position.z = -1.0;

    return (
        <Canvas camera={{
            position: new THREE.Vector3(12, 12, 12),
            up: new THREE.Vector3(0,0,1),
            near: 0.1,
            far: 1000,
            zoom: 1,
        }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10,-10,-10]} />
            {walls}
        </Canvas>
    )
}