import React from 'react';
import { useSelector } from 'react-redux';
//import { useStore } from 'react-redux';

const Software = (props) => {
    //Receive list of software prices from store
    //const priceStore = useStore();

    const price = useSelector((state) => state.price);

    return (
        <div>
            <h3> Show list of software services </h3>
            <hr />
            <ol>
                <li>Desarrollo : </li><br />
                <li>Implementacion :</li><br /> 
                <li>Venta : { price } </li><br />
                <li>Asesoria : { price } </li><br /> 

                { /*
                <li>Venta : { priceStore.getState() }</li><br />
                <li>Asesoria :{ priceStore.getState() }</li><br />
                */ }
            </ol>
        </div>
    );

};

export default Software;