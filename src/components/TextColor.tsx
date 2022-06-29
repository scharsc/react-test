
import { Color } from '../state/RenderModel_LaW';
import React, { useState, memo } from 'react';

function TextColor( {color}: {color: Color} )
{
    return(
        <li>color: {color}</li>
    )
}

function areColorPropsEqual(prev: { color: Color }, next: { color: Color }) {
    return prev.color === next.color;
}


function arePointPropsEqual(prev: { point: Point3D }, next: { point: Point3D }) {
    return prev.point.x === next.point.x &&
        prev.point.y === next.point.y &&
        prev.point.z === next.point.z;
}

export default memo(TextColor, areColorPropsEqual)