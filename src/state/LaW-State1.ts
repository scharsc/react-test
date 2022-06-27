
export const renderModel_LaW_state1 : RenderModel_LaW = {
    levels: new Map([
        [1, {
                height: 1.0
            }
        ],
        [4, {height: 3.0}]
    ]),
    walls: new Map([
        [2, {
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 1, z: 0 } }
        }
        ],
        [3, {
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 1, z: 0 }, end: { x: 1, y: 1, z: 0 } }
        }
        ],
        [5, {
            baseLevel: 4,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 1, y: 1, z: 0 }, end: { x: 1, y: 0, z: 0 } }
        }
        ]
    ])
}

export const renderModel_LaW_state2: RenderModel_LaW = {
    levels: new Map([
        [1, {
            height: 2.4
        }
        ],
        [4, { height: 3.0 }]
    ]),
    walls: new Map([
        [2, {
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 1, z: 0 } }
        }
        ],
        [3, {
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 0, y: 1, z: 0 }, end: { x: 1, y: 1, z: 0 } }
        }
        ],
        [5, {
            baseLevel: 4,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: { start: { x: 1, y: 1, z: 0 }, end: { x: 1, y: 0, z: 0 } }
        }
        ]
    ])
}