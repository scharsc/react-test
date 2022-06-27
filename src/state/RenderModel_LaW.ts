
interface DbElement
{
    keyInDB: number;
}

interface RMLevel extends DbElement
{
    height: number;
}

interface RMWall extends DbElement
{
    wallLine: LineSegment3D;
    baseLevel: number; //curently only one Level. Later render model might contain 
    baseOffset: number;
    height: number;
}

interface RenderModel_LaW // a render model
{
    levels: RMLevel[],
    walls: RMWall[]
}