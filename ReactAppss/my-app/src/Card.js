import React from 'react';
import 'tachyons';
function Card(props) {
    return(
        <div className='tc grow br3 bg-violet-500 ma2 dib pa3 shadow-5'>
            <strike><h3 className=''>{props.greeting}</h3></strike>
            <img src='./img/logo192.png' alt='pic'/>
            <div>
                
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    )
}

export default Card;