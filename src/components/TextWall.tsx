import React, { useState, memo } from 'react';
import { Color } from '../state/RenderModel_LaW';
import TextColor from './TextColor';
import TextHeight from './TextHeight';
import TextLineSeg from './TextLineSeg';


export interface TextWallProperties 
{ 
    color: Color,
    startWallHeight: number, 
    endWallHeight: number,
    wallLineSeg: LineSegment3D,
};

function TextWall({ color, startWallHeight, endWallHeight, wallLineSeg }: TextWallProperties  ) {

    return (
        <>
        <ul>
            <TextColor color={color} />
            <TextHeight text="start height" height={startWallHeight }/>
            <TextHeight text="end height" height={endWallHeight} />
            <TextLineSeg lineSeg={wallLineSeg} />
        </ul>
        </>
    );
}


function arePropsEqual(prevProps: TextWallProperties, nextProps: TextWallProperties) {
    return  prevProps.color == nextProps.color &&
            prevProps.startWallHeight === nextProps.startWallHeight &&
            prevProps.endWallHeight === nextProps.endWallHeight ;
}

//export default TextWall;

export default memo( TextWall, arePropsEqual )