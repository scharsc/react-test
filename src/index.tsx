import React from "react";
import ReactDOM from 'react-dom/client'
import "./mystyle.css"
import DataDesignApp from "./components/DataDesignapp";

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<DataDesignApp/>);

