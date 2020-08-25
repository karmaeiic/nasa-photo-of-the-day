import React from 'react';

function Card(props) {
    console.log(props.data)
    return (
        <div>
            <div>
                <h1>{props.data.title}</h1>

                <p>{props.data.explanation}</p>
            </div>
            <div>
                <img src={props.data.url}/>
                <p>{props.data.copyright}</p>
                <p>{props.data.date}</p>
            </div>
        </div>
    )
}
export default Card