
import { Color } from '../state/RenderModel_LaW';
import React, { useState, memo } from 'react';

function TextLineSeg( {lineSeg}: {lineSeg: LineSegment3D} )
{
    return(
        <ul>
            <li key={4}>start point: <TextPoint3D point={lineSeg.start}/> </li>
            <li key={5}>end point: <TextPoint3D point={lineSeg.end} /> </li>   
        </ul>
    )
}

function TextPoint3D({ point }: { point: Point3D }) {
    return (<> {point.x}, {point.y}, {point.z} </>)
}

function arePropsEqual(prev: { lineSeg: LineSegment3D }, next: { lineSeg: LineSegment3D } )
{
    return prev.lineSeg.start.x === next.lineSeg.start.x &&
        prev.lineSeg.start.y === next.lineSeg.start.y &&
        prev.lineSeg.start.z === next.lineSeg.start.z &&
        prev.lineSeg.end.x === next.lineSeg.end.x &&
        prev.lineSeg.end.y === next.lineSeg.end.y &&
        prev.lineSeg.end.z === next.lineSeg.end.z;
}

export default memo( TextLineSeg, arePropsEqual )