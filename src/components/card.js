import React from 'react';


const Card = ({ copyright, date, explanation, title, url }) =>{
    console.log(title)
    return (
        <div>
            <div>
                <h1>Title: {title}</h1>

                <p>{explanation}</p>
            </div>
            <div>
                <img src={url}/>
                <p>{copyright}</p>
                <p>Date: {date}</p>
            </div>
        </div>
    )
}
export default Card