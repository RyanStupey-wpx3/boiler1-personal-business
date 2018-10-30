import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './editBlog.css'

//used force Update in AdminBlogPost showTools
//need to update onChange methods
//need to update function post to Database and state 


export default class EditBlog extends Component {
    constructor(props){
        super(props)
console.log(props)
        this.state = {
            author: this.props.blogs.author,
            title: this.props.blogs.title,
            content: this.props.blogs.content,
            imageurl: this.props.blogs.imageurl,
        }
       
    }

    

    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
        console.log('upload', upload)
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              imageurl: response.body.secure_url,
              
            });
          }
        });
      }
      


    render() {
        console.log('cloudinaryurl', this.state.imageurl)
        console.log(this.state)
        return (
            <div className="editBlogParent">
                <Dropzone className="editDropZoneDiv"
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p className="editUploadTxt">Drop an image or click to select a file to upload.</p>
                    <img className="editUploadedImage" src={this.state.imageurl} />
                </Dropzone>
                <form onSubmit={this.handleSubmit} className="editPostForm">
                    <input type="text"onChange={(e) => this.setState({author: e.target.value})} value={this.state.author}  name="name"  className="editUsernameInput input" placeholder="username: bring in through redux"/>
                    <input type="text"onChange={(e) => this.setState({date: e.target.value})} value={this.state.date}  name="date" className="editDateInput input" placeholder="date of: "/>
                    <input type="text"onChange={(e) => this.setState({title: e.target.value})} value={this.state.title}  name="title" className="editTitleInput input" placeholder="title"/>
                    <textarea onChange={(e) => this.setState({content: e.target.value})} value={this.state.content}  name="mainContent" className="editContent input" placeholder="blog message" />
                    <input className="editSubmitButton" type="submit" onClick={() => this.props.editPost( this.props.blogs.id, this.state )} value="submit"/>
                </form>
                
            </div>
        );
    }
}