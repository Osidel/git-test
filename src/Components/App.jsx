import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
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
//import Route from "./Routes/Route"
//import Public from "./Routes/Public"

const App = () => (
  <Router>
    <Header title="Mahu blog"  />
    {/* <Navegation/> */}
    <Switch>
    {/* <Route  path="/" exact component={Home} /> */}
    <Route  path="/" exact component={Blog} />
    <Route  path="/moda" exact component={Blog} />
    <Route  path="/moda/asian" exact component={Asian} />
    <Route  path="/belleza" exact component={Design} />
{/* 
    <Route path="/login" exact component={Login}/>
    <Route path="/register" exact component={Register}/> */}
    </Switch>
  </Router>
)

export default App;
