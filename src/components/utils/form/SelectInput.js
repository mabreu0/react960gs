import React from 'react';

const SelectInput = (props) => {
    const { options } = props; 
    const { values } = props;

    return (
        <>  
            <label htmlFor={ props.name }> { props.label } </label> 

            <select name={ props.name } >
                {
                    values.map((value, index) => {
                        // watch out for object id instead
                        return <option key={ index } value={ value }>{ value }</option>
                    })
                }
            </select>
        </>
    );
};

export default SelectInput;