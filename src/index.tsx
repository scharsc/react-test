import React from "react";
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom";
import Game from './components/Home';
import "./mystyle.css"
import App from './components/App'

// const App = () => (
//     <h1>My React and TypeScript App!</h1>
// );

//createRoot(document.getElementById('root')).render(<App />)


let button = document.getElementById('button');
let textDiv = document.getElementById('root'); 

function useState(initialValue: number): [ () => number, (newVal: number) => void ]
{
    var _val: number = initialValue;
    function setState(newVal: number) {
        _val = newVal;
    }
    function state() : number
    {
        return _val;
    }
    return [state, setState]
}

let [ numValue, setNumValue ] = useState( 0 );

console.log("1: " + numValue() );
setNumValue( numValue() +1 );
console.log("1: " + numValue());
let [numValue2, setNumValue2] = useState(0);
console.log("2: " + numValue2());
setNumValue(numValue() + 1);
console.log("1: " + numValue());

var MyReact = (function () {

    let val = 1;
    return {
        render( Component: any ) {
            const Comp = Component();
            Comp.render();
            return Comp;
        },
        useState( initalValue: number ): [number, (num: number) => void] {
            val = val || initalValue;
            function setState( newVal: any )
            {
                val = newVal;
            }
            return [val, setState]
        }
    }
})();

function Counter() 
{
    var [count, setCount] = MyReact.useState( 0 );
    console.log( "called" );
    return {
        click: () => setCount( count +1 ),
        render: () => console.log('render:'+ count  )
    }
}

let App2 = MyReact.render( Counter );
App2.click();
App2 = MyReact.render( Counter );


// ReactDOM.render(
//     <Game />,
//     document.getElementById("root")
// );