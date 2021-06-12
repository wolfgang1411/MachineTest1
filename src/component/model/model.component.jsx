import React from 'react';

import "./model.css";

const Model = (data) => {
    return (
        
            <div className="task">
                <p className="task__text">{data}</p>
                <div className="icons"><button className='delete--btn'>Delete</button></div>
            </div>
        )
}

export default Model
