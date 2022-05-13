import React from 'react';
import { createStore } from 'redux';
import { Provider }  from 'react-redux';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

import createActionSetPrice from './stores/price/priceActions'; //defines what reducers can do.
import managerPrice from './stores/price/priceReducer'; //defines how they do it.
import reportWebVitals from './reportWebVitals';



const [ initialPriceAction, applyDiscountAction ] = createActionSetPrice();

const store = createStore(managerPrice); //apply new strategy
store.dispatch(initialPriceAction()); //enque price initial value

const mainContainer = document.getElementById('main')
const main = createRoot(mainContainer);
  main.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );

// test store / component reaction.
//setTimeout(() => store.dispatch(applyDiscountAction()), 15000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();