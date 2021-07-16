import React from 'react';

function Person({personData}) {
    return (
        <div>
            Name: {personData.name}, Anime: {personData.anime}
        </div>
    )
}

export default Person