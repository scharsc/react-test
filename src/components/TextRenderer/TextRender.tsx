import React, { useState } from 'react';
import { Color, LevelOfDetail, RenderModel_LaW } from '../../state/RenderModel_LaW';
import extractWallProperties from '../Shared/WallPropsTools';
import TextWall from './TextWall';

function TextRenderer( {renderModel}: {renderModel: RenderModel_LaW} )
{
    let walls = Array.from(renderModel.walls).map( ([id, wall]) =>
    {
        let wallProps = extractWallProperties(renderModel, id);
        return (
            <li key={id}>
                    Wall with Id: {id}
                    <TextWall {...wallProps}  />
            </li> ) 
            
    });

    return (
    <>
    Render Model content:
        <ul>
            {walls}
        </ul>  
    </>
    )
}

export default TextRenderer
