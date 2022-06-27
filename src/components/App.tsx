import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh'])
{
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame( (state,delta) => (ref.current.rotation.x += 0.01) )
    React.useEffect( () => 
        { 
            console.log("doing effect")
            return () =>
            {
                console.log( "undoing effect" )
            }
        } );

    return (
        <mesh 
            ref={ref} 
            scale={clicked?1.5:1}
            onClick={(event)=> click(!clicked)}
            onPointerOver = {(event) => hover(true)}
            onPointerOut = {(event) => hover(false)} >
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={hovered ? "red" : "green"}/>
        </mesh>
    )
}

export default function App(){
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10,-10,-10]} />
            <Box position={[-1.2,0,0]}/>
        </Canvas>
    )
}