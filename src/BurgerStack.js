import React, { useState } from 'react';


function Burgerstack(props) {
    return(
        <div>
            <ul>
                {props.burgerpane.map((ingredient,i) => (

                <li key={i}>{ingredient.name}</li>
                ))}
                <button onClick={() => {
                        props.clearClick()
                    }}>Clear</button>
            </ul>
        </div>
    )
}

export default Burgerstack;