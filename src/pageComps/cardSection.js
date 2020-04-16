import React from 'react';

function CardSection({data}) {
    return(
        <div>
            <h1>{data.title}</h1>
    <h5>{data.copyright}</h5>
            <h6>{data.date}</h6>
            <p>{data.explanation}</p>
            
        </div>
    );
}

export default CardSection;