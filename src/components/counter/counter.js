import React from 'react';

function Counter( props ) {
    const { startingValue, secondValue } = props
    return (
        <div>
            This is the starting value: {startingValue}
            This is the 2nd value: {secondValue}
        </div>
    );
}

export default Counter;