import React, { useState, memo } from 'react';
import { areTextHeightPropsEqual } from '../Shared/PropertyComparer';

function TextHeight({ text, height }: { text: string, height: number }) {
    return (
        <li> {text} absolute: {height} </li>
    )
}

export default memo(TextHeight, areTextHeightPropsEqual)