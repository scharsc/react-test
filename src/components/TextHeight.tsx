
import { Color } from '../state/RenderModel_LaW';
import React, { useState, memo } from 'react';

function TextHeight({ text, height }: { text: string, height: number }) {
    return (
        <li> {text} absolute: {height} </li>
    )
}

function areTextHeightPropsEqual(prev: { text: string, height: number }, next: { text: string, height: number } )
{
    return  prev.text === next.text &&
            prev.height === next.height;
}

export default memo(TextHeight, areTextHeightPropsEqual)