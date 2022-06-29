import { Color, LevelOfDetail, RenderModel_LaW } from "./RenderModel_LaW"

export const renderModel_LaW_state1 : RenderModel_LaW = {
    levelOfDetail: LevelOfDetail.Coarse,
    levels: new Map([
        [1, {
                height: 1.0
            }
        ],
        [4, {height: 3.0}]
    ]),
    walls: new Map([
        [2, {
            color: Color.eRed,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 1, z: 0 } }
        }
        ],
        [3, {
            color: Color.eRed,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 1, z: 0 }, end: { x: 1, y: 1, z: 0 } }
        }
        ],
        [5, {
            color: Color.eRed,
            baseLevel: 4,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 1, y: 1, z: 0 }, end: { x: 1, y: 0, z: 0 } }
        }
        ]
    ])
}

export const renderModel_LaW_state2: RenderModel_LaW = {
    levelOfDetail: LevelOfDetail.Fine,
    levels: new Map([
        [1, {
            height: 1.0
        }
        ],
        [4, { height: 3.0 }]
    ]),
    walls: new Map([
        [2, {
            color: Color.eGreen,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 1, z: 0 } }
        }
        ],
        [3, {
            color: Color.eRed,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 1, z: 0 }, end: { x: 1, y: 1, z: 0 } }
        }
        ],
        [5, {
            color: Color.eRed,
            baseLevel: 4,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 1, y: 1, z: 0 }, end: { x: 1, y: 0, z: 0 } }
        }
        ]
    ])
}