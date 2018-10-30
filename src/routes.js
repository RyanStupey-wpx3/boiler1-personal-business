import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './views/About/About'
import Home from './views/Home/Home'
import Blog from './views/Blog/Blog'
import Contact from './views/Contact/Contact'
import Rescources from './views/Rescources/Rescources'
import AdminBlog from './views/AdminBlog/AdmnBlog'


export default 
<Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/rescources" component={Rescources}/>
    <Route path="/admin" component={AdminBlog}/>
</Switch> 