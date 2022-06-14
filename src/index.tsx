import React from "react";
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom";
import Game from './components/Home';
import "./mystyle.css"
import App from './components/App'

// const App = () => (
//     <h1>My React and TypeScript App!</h1>
// );

createRoot(document.getElementById('root')).render(<App />)

// ReactDOM.render(
//     <Game />,
//     document.getElementById("root")
// );