import React, { useState } from 'react';
import TextWall from './TextWall';

function DataDesignApp( {renderModel}: {renderModel: RenderModel_LaW} )
{
    let blaArray = [1,2,3];
    renderModel.walls.get

    let walls = Array.from(renderModel.walls).map( ([id, wall]) =>
    <li key={id}>
        <TextWall rmModel={renderModel} id={id} />
    </li> );

    return (
    <>
    Render Model content:
        <ul>
            {walls}
        </ul>  
    </>
    )
}

export default DataDesignApp