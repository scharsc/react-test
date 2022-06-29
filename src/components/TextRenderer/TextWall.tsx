import React, { useState, memo } from 'react';
import { WallProperties } from '../Shared/WallProperties';
import TextColor from './TextColor';
import TextHeight from './TextHeight';
import TextLineSeg from './TextLineSeg';

function TextWall({ color, startWallHeight, endWallHeight, wallLineSeg }: WallProperties  ) {

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


function arePropsEqual(prevProps: WallProperties, nextProps: WallProperties) {
    return  prevProps.color == nextProps.color &&
            prevProps.startWallHeight === nextProps.startWallHeight &&
            prevProps.endWallHeight === nextProps.endWallHeight ;
}

//export default TextWall;

export default memo( TextWall, arePropsEqual )