import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Switch, Router, Route } from 'react-router-dom'
import logo from '../../src/logo.svg';
//import './App.css';
import Login from "./Pages/Login"
import Register from "./Pages/Register"

import Home from '../Components/Pages/Home';
import Blog from './Pages/Blog';
import Design from './Pages/Design';
import Header from './Organims/Header';
import Asian from './Organims/Asian';
import Page404 from './Pages/Page404'
import Protected from "./Routes/Protected"
import Public from "./Routes/Public"

// function useLocation() { 
//   if (process.env.NODE_ENV !== "production") {
//     !(typeof useContext === "function") ? process.env.NODE_ENV !== "production" ? invariant(false, "You must use React >= 16.8 in order to use useLocation()") : invariant(false) : void 0;
//   }

//   return useContext(context).location; // Error here.
// }

const App = () => (
  <BrowserRouter>
    <Switch>        
    <Protected  path="/" exact component={Blog} />
    <Protected  path="/moda" exact component={Blog} />
    <Protected  path="/moda/asian" exact component={Asian} />
    <Protected  path="/belleza" exact component={Design} />   

    <Protected component={Page404} />

    <Public path="/login" exact component={Login}/>
    <Public path="/register" exact component={Register}/>
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