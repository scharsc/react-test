import { Color, LevelOfDetail, RenderModel_LaW } from '../../state/RenderModel_LaW';
import { WallProperties } from './WallProperties';

export default function extractWallProperties(rmModel: RenderModel_LaW, id: number): WallProperties {
    let wall = getWallForId(rmModel, id);
    let wallHeight = wall.height;
    let startHeight = getStartingHeightOfWall(rmModel, id);
    let endHeight = startHeight + wallHeight;
    let levelOfDetail = rmModel.levelOfDetail;
    return {
        color: rmModel.levelOfDetail === LevelOfDetail.Coarse ? Color.eBlack : wall.color,
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
