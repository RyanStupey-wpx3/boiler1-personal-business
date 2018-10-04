import React, { Component } from 'react';
import axios from 'axios'
import NewBlog from './NewBlog';
import TopSpan from "../../Components/TopSpan.js"

export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {
            blogs:[],
        }
        
    }

    //put in slideshow of top 5 recent blog post pictures
    
    //
    componentDidMount(){
        axios.get('/api/blogs')
        .then((resp) =>{
            this.setState({
                blogs:resp.data
            })
        })
        .catch((err) => {
            console.log('err', err)
        })
    }

    // newBlog(){
    //     axios.post('api/newPost', {})
    // }
    
    render() {
        const displayBlogs = this.state.blogs.map((elem, ind) => {
            return (
                <div>
                    <div>{elem.author}</div>
                    <div>{elem.title}</div>
                    <div>{elem.content}</div>
                    <div>{elem.Imageurl}</div>
                </div>
            )
        })
        return (
            <div>
                <TopSpan message="from my heart to yours" showImage={true}/>
                <NewBlog/>
                <h2> Blog </h2>
               <div> blogs: {displayBlogs} </div>   
            </div>
        );
    }
}