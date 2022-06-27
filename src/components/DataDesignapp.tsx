import React, { useState } from 'react';
import TextWall, { TextWallProperties } from './TextWall';

function DataDesignApp( {renderModel}: {renderModel: RenderModel_LaW} )
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

function extractWallProperties(rmModel: RenderModel_LaW, id: number): TextWallProperties
{
    let wall = getWallForId(rmModel, id);
    let wallHeight = wall.height;
    let startHeight = getStartingHeightOfWall(rmModel, id);
    let endHeight = startHeight + wallHeight;
    return {
        startWallHeight: startHeight,
        endWallHeight: endHeight,
        wallLineSeg: wall.wallLine
    }
}

function getWallForId(rmModel: RenderModel_LaW, wallId: number) {
    return rmModel.walls.get(wallId)!
}

function getStartingHeightOfWall(rmModel: RenderModel_LaW, wallId: number) {
    let wall = rmModel.walls.get(wallId)!;
    let wallLevelId = wall.baseLevel;
    let wallLevel = rmModel.levels.get(wallLevelId)!;
    let levelHeight = wallLevel.height;
    let levelOffset = wall.baseOffset;
    return levelHeight + levelOffset;
}


export default DataDesignApp