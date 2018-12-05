import React, { Component } from 'react';
import '../../App.css';
import TopSpan from "../../Components/TopSpan.js";
import axios from 'axios'
import './contact.css'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            fromEmail: "",
            subject: "",
            message: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
    }
    sendEmail(){
        const {name, fromEmail, subject, message} = this.state
        axios.post('/api/send-email',{name, fromEmail, subject, message})
        .then((resp) => {
            this.setState({
                confirmation: "sent"
            })
        })
        .catch((err) => {
            console.log('err', err)
        })
         
    }
    render() {
        return (
            <div className="contactParent">
                <TopSpan message="from my heart to yours" showImage={true}/>
                <div className="mainContent">
                <h2 className="contactVerbage">Please, feel free to visit my Social Media. I would love to hear from you as well; fill out the form below and I will get right back to you. </h2>
                <div className="contactInfo">
                    <div className="contactInfoInnerDiv">
                        <div className="socialLinks">
                        <h1>Social Links</h1>
                        <h2 className="facebook icon"><a  href={'https://www.facebook.com/williamsdanal'}><i alt="Danas Facebook" class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a></h2>
                        <h2 className="blogspot icon"><a href={'https://sheddingtitlesforatestimony.blogspot.com/?fbclid=IwAR0WeBPyt0kgv91QSA2K4z4eSlglkDIYer9slhhXwL2QAqx3FKxspO0SEW4'}><i class="fa fa-rss fa-3x" aria-hidden="true"></i></a></h2>
                        <h2 className="prayers icon"><a href={'https://sites.google.com/site/momsunitedinprayer/?fbclid=IwAR2-6nzKCOMbTsF34P07MwxDv_NQX_D9HSp9IpHWiVvzP4gamLNTWs1mOPw'}><i class="fa fa-heart-o fa-3x" aria-hidden="true"></i></a></h2>
                        {/* <h2 className="instagram icon"><a href={''}><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a></h2> */}
                        </div>
                        <div className="name " ><h1>Email:</h1> <h3> danabennie.com@gmail.com</h3></div>
                    </div>
                </div>
                <div className="formParent">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h2> Contact </h2>
                        <input className="textinput" type="text" placeholder="name" onChange={(e) => {this.setState({name: e.target.value})}}/>
                        <input className="textinput" type="text" placeholder="email" onChange={(e) => {this.setState({fromEmail: e.target.value})}}/>
                        <input className="textinput" type="text" placeholder="subject" onChange={(e) => {this.setState({subject: e.target.value})}}/>
                        <textarea className="messageArea" placeholder="message" onChange={(e) => {this.setState({message: e.target.value})}}/>
                        <input className="sendButton" type="submit" value="send" onClick={this.sendEmail}/>
                    </form>
                </div>
                </div>
                <footer></footer>
            </div>
        );
    }
}