import React, { Component } from 'react';
import '../../App.css';
import TopSpan from "../../Components/TopSpan.js";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <TopSpan message="from my heart to yours" showImage={true}/>
                <h2> Contact </h2> 
            </div>
        );
    }
}