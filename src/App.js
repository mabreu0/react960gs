import React, { Component } from 'react';
import './components/960web/css/min/960_12_col.css';
import Container96012 from './components/Container';


function App() {
	return (
     	<div className="AppContainer" data-testid="app" >
    		<Container96012 expandValue="container_12"/>
	</div> 
  );
};

export default App;
