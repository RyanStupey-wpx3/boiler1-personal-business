import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './views/About'
import Home from './views/Home'
import Blog from './views/Blog'
import Contact from './views/Contact'
import Rescources from './views/Rescources'

export default 
<Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/rescources" component={Rescources}/>
</Switch> 