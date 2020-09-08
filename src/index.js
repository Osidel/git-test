import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss'
//import './index.css';
import App from './Components/App';
import {Provider} from 'react-redux'
import store from './Redux/store'
import {        
        listBrand
  
  } from './Redux/actionCreators';

store.dispatch(
      
        listBrand()
      )

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
