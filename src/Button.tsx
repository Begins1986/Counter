import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={props.name} disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    );
};
