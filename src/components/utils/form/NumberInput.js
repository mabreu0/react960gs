import React from 'react';

const NumberInput = (props) => {
    return (
        <>
            <label className="thelabel" htmlFor={ props.name }> { props.label } </label>

            <input type='number' id={ props.id } 
                name={ props.name } 
                min="100" 
                max="20000" 
                placeholder={ props.value } > 
            </input><br />
        </>
    );
};

export default NumberInput;