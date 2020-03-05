import React, { useState } from 'react';
import Burgerstack from './BurgerStack';


function Burgerpane(props) {
    return(
        <div>
            <Burgerstack burgerpane={props.burgerpane} onClick={props.onClick} clearClick={props.clearClick}/>
        </div>
    )
}

export default Burgerpane;