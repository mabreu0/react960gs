import React from 'react';
import './Form.css';

const Form = ({ children }) => {

    return (
        <div className="formdiv row">
                <form> 
                    { children } 
                </form>
        </div>
    );
};

export default Form;