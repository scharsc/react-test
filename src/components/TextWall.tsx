import React, { useState } from 'react';

interface TextWallProperties { rmModel: RenderModel_LaW, id: number };

function TextWall( {rmModel, id}: TextWallProperties  ) {
    let wall = getWallForId(rmModel, id);
    let wallLineStart = wall.wallLine.start;
    let wallLineEnd = wall.wallLine.end;
    return (
        <>
        Wall with Id: {id}
        <ul>
            <li>startingHeight: { getStartingHeightOfWall(rmModel, id) }</li>
            <li><TextPoint3D point={wallLineStart}/> </li>
        </ul>
        </>
    );
}

function TextPoint3D( {point}: {point: Point3D} )
{
    return( <> x: {point.x}, y: {point.y}, z: {point.z} </>)
}

function getWallForId( rmModel: RenderModel_LaW, wallId: number )
{
    return rmModel.walls.get(wallId)!
}

function getStartingHeightOfWall(rmModel: RenderModel_LaW, wallId: number)
{
    let wall = rmModel.walls.get(wallId)!;
    let wallLevelId = wall.baseLevel;
    let wallLevel = rmModel.levels.get(wallLevelId)!;
    let levelHeight = wallLevel.height;
    let levelOffset = wall.baseOffset;
    return levelHeight + levelOffset;
}

export default TextWall