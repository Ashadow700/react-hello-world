import React from 'react';
import './StyledText.css'

export function StyledTextOne() {
    return (
        <div>
            <h1 className={"tag1"}> Styled Text h1 =)</h1>
            <div className={"tag2 tag3"}>This is an h2 tag!</div>
            <h1>This however.... is also an h1 tag!</h1>
        </div>
    );
}


export function StyledTextTwo() {
    return (
        <div>Second Styled text</div>
    );
}


// export default StyledText;
