import React from 'react';
import 'tachyons';

function Card(props) {
    return(
        <div className='tc br1 grow bg-violet-600 ma2 dib pa2 shadow-2'>
            <img src='./img/logo192.png' alt='pic'/>
            <div>
                
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    )
}

export default Card;
