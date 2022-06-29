import React from "react";
import ReactDOM from 'react-dom/client'
import "./mystyle.css"
import DataDesignApp from "./components/DataDesignapp";
import { renderModel_LaW_state1, renderModel_LaW_state2 } from "./state/LaW-State1";

const textContainer = document.getElementById('root')!;

const textRenderRoot = ReactDOM.createRoot(textContainer);
// Initial render
textRenderRoot.render(<DataDesignApp renderModel={renderModel_LaW_state1} />);


var buttonState = true;
const button = document.getElementById('button')!;
button.addEventListener("click", 
() =>   
{
    buttonState = !buttonState;
    if( buttonState )
        textRenderRoot.render(<DataDesignApp renderModel={renderModel_LaW_state1} />);
    else
        textRenderRoot.render(<DataDesignApp renderModel={renderModel_LaW_state2} />);
}
);
