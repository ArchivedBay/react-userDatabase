import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.toggleContent}>Toggle Content</button>
    );
}

export default Button;