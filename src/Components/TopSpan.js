import React, { Component } from 'react';
import '../App.css';


export default class TopSpan extends Component {
    constructor(props){
        super(props)
        this.state ={
            welcomeAnimationText: "",

        }
        // this.compLoadAnimation = this.compLoadAnimation.bind(this)
    }
    // compLoadAnimation(){
    //    let animationText = Document.getElementsByClassName('animationText')
    //    animationText.className = 'animationText:active'
    // }
    // componentDidMount(){
    //     let animationText = document.getElementById('animationText')
    //     if (animationText.classList.includes('animationText:active') === false){
    //         animationText.classList.add('animationText:active')
    //     } else {
    //         return({})
    //     }
    // }
    render() {
      
       
        return (
            <span className="topLevelSpan">
                <div className="spanDiv topNavDiv">
                    {/* <img className="logo" src={require('#')}/> */}
                    <ul className="navUl">
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Rescources</li>
                    </ul>
                </div>
                <h2 id="animationText"> Welcome to this Website</h2>
                <div className="spanDiv"><button>get a quote</button></div>
            </span>
        );
    }
}