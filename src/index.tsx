import React from "react";
import ReactDOM from 'react-dom/client'
import "./mystyle.css"
import DataDesignApp from "./components/DataDesignapp";
import { renderModel_LaW_state1 } from "./state/LaW-State1";

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

let renderModel = renderModel_LaW_state1;

// Initial render
root.render(<DataDesignApp renderModel={renderModel_LaW_state1}/>);