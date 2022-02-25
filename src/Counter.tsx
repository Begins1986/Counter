import React from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    counts: number
    onClickInc: () => void
    onClickReset: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className="wrapper">
            <div className="countBlock"><span className={props.counts === 5 ? 'error' : ''}>{props.counts}</span></div>
            <div className="buttonBlock">
                <Button name={"inc"}
                        callback={props.onClickInc}
                        disabled={props.counts === 5}
                />
                <Button name={"reset"}
                        callback={props.onClickReset}
                        disabled={props.counts === 0}
                />
                {/*<button className="inc" disabled={props.counts===5} onClick={props.onClickInc}>inc</button>*/}
                {/*<button className="reset" disabled={props.counts===0} onClick={props.onClickReset}>reset</button>*/}
            </div>
        </div>
    );
};

