import { LineSegment3D } from "../../state/LineSegment3D";
import { Color } from "../../state/RenderModel_LaW";

export interface WallProperties {
    color: Color,
    startWallHeight: number,
    endWallHeight: number,
    wallLineSeg: LineSegment3D,
};

