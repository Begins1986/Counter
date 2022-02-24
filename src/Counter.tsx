import React, {useState} from 'react';

export const Counter = () => {
    // let [counts, setCounts]=useState<string>('0')

    return (
        <div className="wrapper">
            <div className="countBlock">0</div>
            <div className="buttonBlock">
                <button className="inc">INC</button>
                <button className="reset">RESET</button>
            </div>
        </div>
    );
};

