import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {

    let [counts, setCounts] = useState<number>(0)

    let onClickInc = () => {
        if (counts >= 5) {
            return
        }
        setCounts(counts + 1)
    }
    let onClickReset = () => {
        setCounts(0)
    }
    return (
        <div className="App">
            <Counter counts={counts}
                     onClickInc={onClickInc}
                     onClickReset={onClickReset}
            />
        </div>
    );
}

export default App;
