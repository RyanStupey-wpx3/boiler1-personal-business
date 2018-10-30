// has prop called message that displays the message on the hero image

import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



export default class TopSpan extends Component {
    constructor(props){
        super(props)
        this.state ={
            welcomeAnimationText: this.props.message,
            showImage: this.props.showImage,
            topSpanImageClass: "",
        }
        // this.compLoadAnimation = this.compLoadAnimation.bind(this)
    }
    // compLoadAnimation(){
    //    let animationText = Document.getElementsByClassName('animationText')
    //    animationText.className = 'animationText:active'
    // }
    componentDidMount(){
        // let animationText = document.getElementById('animationText')
        // if (animationText.classList.includes('animationText:active') === false){
        //     animationText.classList.add('animationText:active')
        // } else {
        //     return({})
        // }
        if (this.state.showImage === true){
            this.setState({
                topSpanImageClass: "topLevelSpan",
            })
        } else {
            this.setState({
                topSpanImageClass: "noImage",
                welcomeAnimationText: "",
            })
        }
      
    }
    render() {
        
       
        return (
            <span className={this.state.topSpanImageClass}>
                <div className="spanDiv topNavDiv">
                    
                    <div className="danasName"> <h3>Dana Bennie</h3></div>
                    <ul className="navUl">
                        <Link to='/'><li>Home</li></Link> 
                        <Link to='/about'><li>About</li></Link> 
                        <Link to='/blog'><li>Blog</li></Link> 
                        <Link to='/contact'><li>Contact</li></Link> 
                        <Link to='/rescources'><li>Rescources</li></Link> 
                    </ul>
                </div>
                {/* <div className="animationTextParent">
                    <h2 className="animationText"> {this.state.welcomeAnimationText}</h2>
                </div> */}
                
                {/* <div className="spanDiv"><button>get a quote</button></div> */}
            </span>
        );
    }
}