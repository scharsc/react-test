import { LineSegment3D } from "./LineSegment3D"
import { Point3D } from "./Point3D"
import { Color, LevelOfDetail, RenderModel_LaW } from "./RenderModel_LaW"

export const renderModel_LaW_state1 : RenderModel_LaW = {
    levelOfDetail: LevelOfDetail.Coarse,
    levels: new Map([
        [1, {
                height: 1.0
            }
        ],
        [4, {height: 4.0}]
    ]),
    walls: new Map([
        [2, {
            color: Color.eRed,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: new LineSegment3D(     0, 0, 0,  
                                             2.5, 0, 0  )
        }
        ],
        [3, {
            color: Color.eRed,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: new LineSegment3D(2.5, 0, 0,
                2.5, 2.5, 0)
        }
        ],
        [5, {
            color: Color.eRed,
            baseLevel: 4,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: new LineSegment3D(2.5, 2.5,0,
                0, 2.5, 0 )
        }
        ]
    ])
}

export const renderModel_LaW_state2: RenderModel_LaW = {
    levelOfDetail: LevelOfDetail.Coarse,
    levels: new Map([
        [1, {
            height: 2.0
        }
        ],
        [4, { height: 4.0 }]
    ]),
    walls: new Map([
        [2, {
            color: Color.eGreen,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: new LineSegment3D(    0, 0, 0,
                                            2.5, 0, 0)
        }
        ],
        [3, {
            color: Color.eRed,
            baseLevel: 1,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: new LineSegment3D(    2.5, 0, 0,
                                            2.5, 2.5, 0)
        }
        ],
        [5, {
            color: Color.eRed,
            baseLevel: 4,
            baseOffset: 0.1,
            height: 2.2,
            wallLine: new LineSegment3D(    2.5, 2.5,0,
                                            0, 2.5, 0)
        }
        ]
    ])
}