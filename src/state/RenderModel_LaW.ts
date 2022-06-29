
interface RMLevel 
{
    height: number;
}

export enum LevelOfDetail {
    Coarse, //shows no colors
    Fine    //shows colors
}

export enum Color {
    eBlack,
    eWhite,
    eRed,
    eBlue,
    eGreen
}

interface RMElement
{
    color: Color
}

interface RMWall extends RMElement
{
    wallLine: LineSegment3D;
    baseLevel: number; //curently only one Level. Later render model might contain 
    baseOffset: number;
    height: number;
}

type Id = number;

export interface RenderModel_LaW // a render model
{
    levelOfDetail: LevelOfDetail,
    levels: Map<Id, RMLevel>,
    walls: Map<Id, RMWall>
}