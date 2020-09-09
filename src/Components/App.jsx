import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Switch, Router, Route } from 'react-router-dom'
import logo from '../../src/logo.svg';
//import './App.css';
//import Login from "./Pages/Login"
//import Register from "./Pages/Register"

import Home from '../Components/Pages/Home';
import Navegation from '../Components/Molecules/Navegation';
import Blog from './Pages/Blog';
import Design from './Pages/Design';
import Header from './Organims/Header';
import Asian from './Organims/Asian';
import Page404 from './Pages/Page404'
//import Route from "./Routes/Route"
//import Public from "./Routes/Public"

const App = () => (
  <BrowserRouter>
    <Switch>
    <Route  path="/" exact component={Blog} />
    <Route  path="/moda" exact component={Blog} />
    <Route  path="/moda/asian" exact component={Asian} />
    <Route  path="/belleza" exact component={Design} /> 
    <Route component={Page404} />
    </Switch>
  </BrowserRouter>
)

export default App;


{/* 
    <Route path="/login" exact component={Login}/>
    <Route path="/register" exact component={Register}/> */}

    // <Route component={() => (
    //   <div className="ed-grid">
    //     <h1>Error 404</h1>
    //     <span>Página no encontrada</span>  
    //   </div>
    // )} />  