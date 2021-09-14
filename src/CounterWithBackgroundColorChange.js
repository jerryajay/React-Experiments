import { useState } from "react";
import './App.css'

function CounterWithBackgroundColorChange() {

    const [count, setCount] = useState(4);
    const [theme, setTheme] = useState('blue');

    function incCount() {
        setCount(count + 1)
    }

    function decCount() {
        setCount(count - 1)
    }

    function incTheme() {
        setTheme('red');
    }

    function decTheme() {
        setTheme('blue');
    }

    return (
        <div className="App">
            <style>{'body {background-color:' +theme+';}'}</style>
            <button onClick={() => {
                incCount();
                incTheme();
            } }>+</button>
            {count}{theme}
            
            <button onClick={() => {decCount(); decTheme();}}>-</button>
        </div>
    );
}

export default CounterWithBackgroundColorChange;