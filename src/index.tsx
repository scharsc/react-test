import React from "react";
import ReactDOM from 'react-dom/client'
import "./mystyle.css"
import { renderModel_LaW_state1, renderModel_LaW_state2 } from "./state/LaW-State1";
import R3FApp from "./components/ThreeRenderer/R3FApp";
import TextRenderer from "./components/TextRenderer/TextRender";

const textContainer = document.getElementById('textroot')!;
const threeContainer = document.getElementById('threeroot')!;

const textRenderRoot = ReactDOM.createRoot(textContainer);
const threeRenderRoot = ReactDOM.createRoot(threeContainer);

// Initial render
textRenderRoot.render(<TextRenderer renderModel={renderModel_LaW_state1} />);
threeRenderRoot.render(<R3FApp renderModel={renderModel_LaW_state1} /> );

export const AllLengthUnits = ["mm", "cm", "m", "in", "ft", "yd", "in US", "ft US", "yd US"] as const;
export type LengthUnit = (typeof AllLengthUnits)[number];

const mapLengthUnitToScaleFactor: Map<LengthUnit, number> = new Map( [
    [ "mm", 0.001 ],
    ["m", 1.0],
    //[ "pc", 2.344] /* illigal */
    ]
 )

const mapLengthUnitToLocalizationKey: Map<LengthUnit, string> =new Map( [
    ["mm", "UNIT_MM"]
]);

const scaleToMeter = (sourceUnit: LengthUnit) => mapLengthUnitToScaleFactor.get( sourceUnit )!;
const LengthUnitTranslationKey = (sourceUnit: LengthUnit) => mapLengthUnitToLocalizationKey.get( sourceUnit )!;


var buttonState = true;
const button = document.getElementById('button')!;
button.addEventListener("click", 
() =>   
{
    buttonState = !buttonState;
    if( buttonState )
    {
        textRenderRoot.render(<TextRenderer renderModel={renderModel_LaW_state1} />);
        threeRenderRoot.render(<R3FApp renderModel={renderModel_LaW_state1} />);
    }
    else
    {
        textRenderRoot.render(<TextRenderer renderModel={renderModel_LaW_state2} />);
        threeRenderRoot.render(<R3FApp renderModel={renderModel_LaW_state2} />);
    }
}
);
