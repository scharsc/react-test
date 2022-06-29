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
threeRenderRoot.render(<R3FApp renderModel=renderModel_LaW_state1 /> );

var buttonState = true;
const button = document.getElementById('button')!;
button.addEventListener("click", 
() =>   
{
    buttonState = !buttonState;
    if( buttonState )
    {
        textRenderRoot.render(<TextRenderer renderModel={renderModel_LaW_state1} />);
    }
    else
    {
        textRenderRoot.render(<TextRenderer renderModel={renderModel_LaW_state2} />);
    }
}
);
