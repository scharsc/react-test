import { Point3D } from "./state/Point3D";
import * as THREE from 'three'

export default function asThreeVector3d(point3d: Point3D): THREE.Vector3
{
    return new THREE.Vector3( point3d.x, point3d.y, point3d.z );
}

