import { Color } from "../../state/RenderModel_LaW";

function areColorPropsEqual(prev: { color: Color }, next: { color: Color }) {
    return prev.color === next.color;
}


function arePointPropsEqual(prev: { point: Point3D }, next: { point: Point3D }) {
    return prev.point.x === next.point.x &&
        prev.point.y === next.point.y &&
        prev.point.z === next.point.z;
}


function areTextHeightPropsEqual(prev: { text: string, height: number }, next: { text: string, height: number }) {
    return prev.text === next.text &&
        prev.height === next.height;
}

function arePropsEqual(prev: { lineSeg: LineSegment3D }, next: { lineSeg: LineSegment3D }) {
    return prev.lineSeg.start.x === next.lineSeg.start.x &&
        prev.lineSeg.start.y === next.lineSeg.start.y &&
        prev.lineSeg.start.z === next.lineSeg.start.z &&
        prev.lineSeg.end.x === next.lineSeg.end.x &&
        prev.lineSeg.end.y === next.lineSeg.end.y &&
        prev.lineSeg.end.z === next.lineSeg.end.z;
}


export {arePropsEqual, arePointPropsEqual, areTextHeightPropsEqual, areColorPropsEqual}