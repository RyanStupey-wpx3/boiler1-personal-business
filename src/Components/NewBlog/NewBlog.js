import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {changeBool} from "../../redux/reducer";
import Dropzone from 'react-dropzone';
import "./newBlog.css"
import request from 'superagent';
// import { connect } from 'net';

class NewBlog extends Component {
    constructor(props){
        super(props)
        this.state = {
            author: "",
            uploadedFile: {},
            uploadedFileCloudinaryUrl:'',
            // date: write function that uses date api
            imageurl:"",
            content:"",
            title:"",
        }
        this.handleChange = this.handleChange.bind(this)
        this.postToDb = this.postToDb.bind(this)
    }

    onImageDrop(files) {
        console.log('files', files)
        this.setState({
          uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
          console.log('response.body', response.body)
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }
    
    
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    
    postToDb(){
        axios.post('/api/new-post', {author: this.state.author, title: this.state.title, content: this.state.content, imageurl: this.state.uploadedFileCloudinaryUrl})
        .then((resp) => {
            this.setState({
                author: "",
                // date: write function that uses date api
                imageurl:"",
                content:"",
                title:"",
                uploadedFileCloudinaryUrl: '',
            })
            if(this.props.postBool === false){
                this.props.changeBool(true)
            } else {
                this.props.changeBool(false)/* change redux state back to false*/
            }
        })
        .catch((err) => {
            console.log('err', err)
        })
        
        
    }
    
    render() {
        console.log('this.state.uploadedFileCloudinaryUrl', this.state.uploadedFileCloudinaryUrl)
        return (
            <div>
            <div className="inputContainer">
            <form onSubmit={this.handleSubmit} className="postForm">
            <Dropzone className="dropZoneDiv"
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <div className="dragImage">upload an image</div>
                    <img className="uploadedImage" src={this.state.uploadedFileCloudinaryUrl} />
                    {this.state.uploadedFileCloudinaryUrl === '' ? null : <div> {/* <p>{this.state.uploadedFile.name}</p> */}</div>}
            </Dropzone>
                <input type="text" onChange={(e) => this.handleChange(e)} name="author" className="usernameInput input" value={this.state.author}placeholder="name" />
                {/* <input type="text" onChange={(e) => this.handleChange(e)} name="date" className="dateInput input" value={this.state.date}placeholder="date" /> */}
                <input type="text" onChange={(e) => this.handleChange(e)} name="title" className="titleInput input" value={this.state.title}placeholder="title" />
                <textarea type="text" onChange={(e) => this.handleChange(e)} name="content" className="newBlogContent input" value={this.state.content}placeholder="content" />
                <input type="submit" onClick={() => this.postToDb()} className="submitButton" value="post"/>
            </form>
            </div>
            </div>
        );
    }
}
const mapDispatchToProps = {
    changeBool: changeBool,
}

const mapStateToProps = (state) => {
    return {
        postBool: state.postBool,
        user: state.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewBlog)