
interface RMLevel 
{
    height: number;
}

interface RMWall
{
    wallLine: LineSegment3D;
    baseLevel: number; //curently only one Level. Later render model might contain 
    baseOffset: number;
    height: number;
}

type Id = number;

interface RenderModel_LaW // a render model
{
    levels: Map<Id, RMLevel>,
    walls: Map<Id, RMWall>
}