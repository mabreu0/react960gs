import React from 'react';

const SubmitInput = (props) => {
    return (
        <>
            <input type="submit" value="actualizar" onClick={ props.onClick }/>
        </>
    );
};

export default SubmitInput;