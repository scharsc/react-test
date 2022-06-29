import { Point3D } from "./Point3D";

export class LineSegment3D {
    start: Point3D = new Point3D(0,0,0);
    end: Point3D = new Point3D(0,0,0);

    constructor( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number )
    {
        this.start = new Point3D(x1,y1,z1);
        this.end = new Point3D(x2, y2, z2);
    }

    midPoint(): Point3D
    {
        return new Point3D( 
            (this.start.x + this.end.x)/0.5,
            (this.start.y + this.end.y) / 0.5,
            (this.start.z + this.end.z) / 0.5);
    }
    angleToX(): number
    {
        let dx = this.end.x - this.start.x;
        let dy = this.end.y - this.start.y;
        return Math.atan( dy/dx );
    }
    lenght(): number
    {
        let dx = this.end.x - this.start.x;
        let dy = this.end.y - this.start.y;
        return Math.sqrt( dx*dx + dy*dy );
    }
}
