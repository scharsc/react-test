import React, { useState } from 'react';

export interface TextWallProperties 
{ 
    startWallHeight: number, 
    endWallHeight: number,
    wallLineSeg: LineSegment3D,
};

function TextWall({ startWallHeight, endWallHeight, wallLineSeg}: TextWallProperties  ) {

    return (
        <>
        <ul>
                <li key={1}>start height absolute: {startWallHeight }</li>
                <li key={2}>end Height absolute: {endWallHeight} </li>
                <li key={3}>start point: <TextPoint3D point={wallLineSeg.start}/> </li>
                <li key={4}>end point: <TextPoint3D point={wallLineSeg.start} /> </li>            
        </ul>
        </>
    );
}

function TextPoint3D( {point}: {point: Point3D} )
{
    return( <> {point.x}, {point.y}, {point.z} </>)
}


export default TextWall