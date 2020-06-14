import React from 'react';

const appComponent = (props) => {
    return (
    <div className = "appComponent">
        <input type = "text" onChange = {props.changed} value = {props.text}/>
        <p> Text entered is {props.text} </p>
    </div>
    );
}

export default appComponent;