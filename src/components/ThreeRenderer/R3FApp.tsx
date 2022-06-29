import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber'
import { RenderModel_LaW } from '../../state/RenderModel_LaW';



export default function R3FApp({ renderModel }: { renderModel: RenderModel_LaW } ){
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10,-10,-10]} />
            <Box position={[-1.2,0,0]}/>
        </Canvas>
    )
}