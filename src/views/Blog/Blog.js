import React, { Component } from 'react';
import axios from 'axios'
import NewBlog from './NewBlog';
import TopSpan from "../../Components/TopSpan.js";
import {connect} from 'react-redux';
import {changeBool} from '../../redux/reducer';
// import { connect } from 'net';

class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {
            blogs:[],
        }
        this.fetchPosts = this.fetchPosts.bind(this)
        this.delete_post = this.delete_post.bind(this)
    }

    fetchPosts(){
        axios.get('/api/')
        .then((resp) =>{
            this.setState({
                blogs:resp.data
            })
        })
        .catch((err) => {
            console.log('err', err)
        })
    }
    //put in slideshow of top 5 recent blog post pictures
    // test auto update then work on blog stylizing

    //

    componentWillUpdate(oldProps){
        if (this.props.postBool !== oldProps.postBool) {
            // this.changeRedux()
            this.fetchPosts()
        } else {
            return null;
        }
        
    }
    componentDidMount(){
        axios.get('/api/blogs')
        .then((resp) =>{
            console.log('resp.data', resp.data)
            this.setState({
                blogs:resp.data
            })
        })
        .catch((err) => {
            console.log('err', err)
        })
    }

    delete_post(id){
        console.log('id', id)
        axios.delete(`/api/post/${id}`)
        .then(() => {
            axios.get('/api/blogs')
            .then((resp) => {
                    const blogs = resp.data
                    console.log('resp.data', resp.data)
                    this.setState({blogs: blogs})
                    
                })
            .catch((err) => {
                 console.log('err', err)})
        }).catch((err) => {console.log('err', err)})
    }

    // newBlog(){
    //     axios.post('api/newPost', {})
    // }
    
    render() {
        const displayBlogs = this.state.blogs.map((elem, ind) => {
            return (
                <div>
                    <div>{elem.author}</div>
                    <div className="blogTitle">{elem.title}</div>
                    <div className="blogContent">{elem.content}</div>
                    <div>{elem.Imageurl}</div>
                    <button onClick={() => {  this.delete_post(elem.id); console.log('elem.id', elem.id)}}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                <TopSpan message="from my heart to yours" showImage={true}/>
            <div className="blogParent">
                <NewBlog/>
                <h2> Blog </h2>
               <div> blogs: {displayBlogs} </div>   
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog)