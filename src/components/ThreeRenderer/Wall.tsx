import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber'
import { RenderModel_LaW } from '../../state/RenderModel_LaW';

function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    React.useEffect(() => {
        console.log("doing effect")
        return () => {
            console.log("undoing effect")
        }
    });

    return (
        <mesh
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)} >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "red" : "green"} />
        </mesh>
    )
}