import React from 'react';

function FunctionClick() {

    function handleClick() {
        console.log("ButtonClick!! =)")
    }

    return (
        <div>
            <button onClick={ handleClick }>I haz button!!</button>
        </div>
    )
}

export default FunctionClick