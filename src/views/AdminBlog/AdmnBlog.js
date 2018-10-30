import React, { Component } from 'react';
import Delete_button from '../../Components/Delete_button';
import axios from 'axios';
import Edit_button from '../../Components/Edit_button'
import EditBlog from '../../Components/EditBlog/EditBlog';
import NewBlog from '../../Components/NewBlog/NewBlog'
import {connect} from 'react-redux';
import {changeBool} from '../../redux/reducer';
import './admin.css'
 class AdminBlog extends Component {
    constructor(props){
        super(props)

        this.state = {
            userIsAdmin: true,
            adminBlogs: [],
            editStatus: false,
        }
        this.deletePost = this.deletePost.bind(this)
        this.editPost = this.editPost.bind(this)
    }
    toggleState(i){
        if(this.state.editStatus === false){
            this.setState({
                editStatus: true,
                newId: i
            })
        } else {
            this.setState({
                editStatus: false,
                newId: 0,
            })
        }
    }
    deletePost(id){
        console.log('id', id)
        axios.delete(`/api/post/${id}`)
        .then(() => {
            axios.get('/api/blogs')
            .then((resp) => {
                    console.log('resp.data', resp.data)
                    this.setState({adminBlogs: resp.data})
                    
                })
            .catch((err) => {
                 console.log('err', err)})
        }).catch((err) => {console.log('err', err)})
    }

    //need to apply new photo to edit
    editPost(i, body){
            // console.log('i & body', i, HTMLBodyElement)
            axios.put(`/api/posts/${i}`, {...body, id: i})
            .then(() => {
                console.log('hit put')
            }).catch((err) => {
                console.log('err', err)
            })
            axios.get('/api/blogs')
            .then((resp) => {

                this.setState({
                       adminBlogs: resp.data,
                   })
           })
    }
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
                adminBlogs:resp.data
            })
        })
        .catch((err) => {
            console.log('err', err)
        })
    }
    render() {
        const displayPosts = this.state.adminBlogs.map((elem) => {
            return (
                <div>
                 <h1 className="title">{elem.title}</h1>
                             <h4 className="postUser"> written by: {elem.author}</h4>
                             <div className="blogImageParent">
                                <img className="postedImage" src={elem.imageurl} />
                             </div>
                                 <div className="blogImageDiv"></div>{elem.content}
                    <Delete_button deletePost={this.deletePost} index={elem.id}/>
                    <Edit_button toggleState={() => this.toggleState(elem.id)} index={elem.id}/>
                    <div className="editBlogDiv">
                    {this.state.editStatus && this.state.newId == elem.id && <EditBlog editPost={this.editPost} index={elem.id} blogs={elem} />}
                    </div>
                    <hr/>
                </div>
                //need to make onclick of EDit_button a toggleStatethat sets editstatus to true for conditional rendering/ like under-grace
                //then pass this.editPost as prop to EditBlog for button onClick
            )
        })
        const {userIsAdmin} = this.state

        if(userIsAdmin === true){
            return (
                <div className="blogParent">
                    {displayPosts}
                </div>
            )
        } else {
            return (
                <div>
                    <h3>sorry, only admins can see this page</h3>
                 </div>
             );
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminBlog)