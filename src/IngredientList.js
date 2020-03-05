import React, { useState } from 'react';
import Ingredients from './Ingredients';

function IngredientList(props) {
    return (
        <div>
            <Ingredients ingredients={props.ingredients} onClick={props.onClick} />
        </div>
    )

}

export default IngredientList;