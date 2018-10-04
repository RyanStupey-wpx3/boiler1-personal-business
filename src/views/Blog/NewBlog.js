import React, { Component } from 'react';
import axios from 'axios';

export default class NewBlog extends Component {
    constructor(props){
        super(props)
        this.state = {
            author: "",

            
            // date: write function that uses date api
            imageurl:"",
            content:"",
            title:"",
        }
        this.handleChange = this.handleChange.bind(this)
        this.postToDb = this.postToDb.bind(this)
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    postToDb(){
        axios.post('/api/new-post', {author: this.state.author, title: this.state.title, content: this.state.content, imageurl: this.state.imageurl})
        .then((resp) => {
            console.log('resp.data', resp.data)
            this.setState({
                author: "",
                // date: write function that uses date api
                imageurl:"",
                content:"",
                title:"",
            })
        })
        .catch((err) => {
             console.log('err', err)
        })

        
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.handleChange(e)} name="name" value={this.state.name}placeholder="name" />
                {/* <input type="text" onChange={(e) => this.handleChange(e)} name="date" value={this.state.date}placeholder="date" /> */}
                <input type="text" onChange={(e) => this.handleChange(e)} name="title" value={this.state.title}placeholder="title" />
                <textarea type="text" onChange={(e) => this.handleChange(e)} name="content" value={this.state.content}placeholder="content" />
                <input type="text" onChange={(e) => this.handleChange(e)} name="imageurl" value={this.state.imageurl}placeholder="imageurl" />
                <input type="submit" onClick={() => this.postToDb()} value="post"/>
            </div>
        );
    }
}