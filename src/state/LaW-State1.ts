
let level1: RMLevel = {
    keyInDB: 1,
    height: 2.1 
};

let levels: RMLevel[] = [{
    keyInDB: 1,
    height: 2.1
}, 
{
    keyInDB: 1,
    height: 2.1
}
]

export const levelAndWalls_State1 : RenderModel_LaW = {
    levels: [
        {
            keyInDB: 1,
            height: 2.1
        }
    ],
    walls: [
        {
            keyInDB: 2,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: {x:0,y:0,z:0}, end: {x:0,y:1,z:0} }
        },
        {
            keyInDB: 3,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 1, z: 0 }, end: { x: 1, y: 1, z: 0 } }
        }
    ]
}