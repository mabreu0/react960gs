import React from 'react';
import { connect } from 'react-redux';

import Form from '../../components/utils/form/Form';
import NumberInput from '../../components/utils/form/NumberInput';
import SelectInput from '../../components/utils/form/SelectInput';
import SubmitInput from '../../components/utils/form/SubmitInput';

const Admin = (props) => {
    const service_fields = ["Auditoria", "Desarrollo", "Migracion", "Operaciones"];

    const handleDispatch = (event) => {
        event.preventDefault();
        props.updatePrice(document.getElementById("precioProyectoBase").value);
    }

    return (
        <div id="preciosdiv">
            <Form>
                <NumberInput id="precioProyectoBase" 
                    name="precio" label="Proyecto" value={ props.price } />

                <SelectInput id="servicio" name="servicio" label="Servicios" 
                    options={ service_fields } values={ service_fields } />

                <SubmitInput onClick={ handleDispatch } />
            </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        //new state
        price : state.price,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePrice: (newPrice) => {
            const action_object = { type: 'SET_PRICE', payload: newPrice, };
            dispatch(action_object);
        }
    }
};

//export default connect(mapStateToProps, mapDispatchToProps)(Admin);
export default connect(mapStateToProps, mapDispatchToProps)(Admin);