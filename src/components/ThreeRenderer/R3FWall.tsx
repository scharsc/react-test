import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber'
import { WallProperties } from '../Shared/WallProperties'
import asThreeVector3d from '../../helper'

function Box(props: JSX.IntrinsicElements['mesh']) {

    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="black" />
        </mesh>
    )
}

function Wall( props: WallProperties ) {

    let midPoint = asThreeVector3d( props.wallLineSeg.midPoint() );
    let height = props.endWallHeight - props.startWallHeight;
    midPoint.z = props.startWallHeight;

    let length = props.wallLineSeg.lenght();
    let rotation = props.wallLineSeg.angleToX();
    return (
        <mesh position={midPoint} rotation={[0, 0, rotation]}>
            <boxGeometry args={[length, 0.3,  height]} />
            <meshStandardMaterial color="black" />
        </mesh>
    )
}

export {Box, Wall};