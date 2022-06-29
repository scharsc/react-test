import React, { useState, memo } from 'react';
import { arePropsEqual } from '../Shared/PropertyComparer';

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

export default memo( TextLineSeg, arePropsEqual )