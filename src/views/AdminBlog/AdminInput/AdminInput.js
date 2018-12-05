import React, { Component } from 'react';
import {connect} from "react-redux";
import {log_in, changeBool} from "../../../redux/reducer";
import AdminBlog from '../AdmnBlog';
import axios from 'axios';

 class AdminInput extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: "DanaBennie",
            password: "elmo",
            middlename: "tragic",
            adminVerified: false,
            adminNotVerified: false,
            notAnAdmin: "",
        }
        this.getAdminInfo = this.getAdminInfo.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getUserInfo = this.getUserInfo.bind(this)
    }

    getUserInfo(){
        axios.get('/api/user-data')
            .then((resp) => {
                this.props.log_in(resp.data.user)
                this.setState({
                    adminVerified: true,
                })
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    componentDidMount(){
        axios.get('/api/user-data')
        .then((resp) => {
            this.props.log_in(resp.data.user)
        })
        .catch((err) => {
            console.log('err', err)
        })
    }
    handleSubmit(event) {
        
        event.preventDefault();
    }
    getAdminInfo(obj){
        const{username, password, middlename} = this.state
        if(username === "" || password === "" || middlename === ""){
            this.setState({
                notAnAdmin: "invalid submission",
            })
            return null;
        }
        axios.get(`/api/usercheck?admin_name=${obj.username}&admin_password=${obj.password}&middlename=${obj.middlename}`)
        .then((resp) => {
            console.log(resp)
            if(resp.data === {}){
                this.setState({
                    notAnAdmin: "invalid input please make sure you entered in the correct information"
                })
                return null
            }
            const {admin_name, admin_password, middlename} = resp.data
            
    if(admin_name == process.env.REACT_APP_ADMIN_NAME && middlename == process.env.REACT_APP_MIDDLENAME && admin_password == process.env.REACT_APP_PASSWORD){
        //sign in succesful
        this.setState({
            adminVerified: true,
            notAnAdmin: `thank you for signing in ${admin_name}`
        })
        this.props.log_in(admin_name, admin_password, middlename)
        if(this.props.postBool === false){
            this.props.changeBool(true)
        } else if(this.props.postBool === true) {
            this.props.changeBool(false)/* change redux state back to false*/
        }
    } else {
        //sign in not succesful
        this.setState({
            adminVerified: false,
            notAnAdmin: "Im sorry but you must input the correct information, please try again"
        })
    }
        })
    }
    render() {
        console.log('process.env.REACT_APP_AdminNAME', process.env.REACT_APP_PASSWORD)
        const{username, password, middlename} = this.state
        console.log('user', this.props.user)
        if(this.props.user){
            console.log('user is in Session')
        } else {
            this.getUserInfo
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                     <div>{this.state.notAnAdmin}</div>
                    <input className="input" placeholder="username" value={username} onChange={(e) => this.setState({username: e.target.value})}/>
                    <input className="input" placeholder="password"  value={password}onChange={(e) => this.setState({password: e.target.value})}/>
                    <input className="input" placeholder="middlename" value={middlename} onChange={(e) => this.setState({middlename: e.target.value})}/>
                    <input type="submit" onClick={() => this.getAdminInfo({username, password, middlename})}/>
                </form>
                 {this.props.user ? <div><AdminBlog/></div>: <p>please sign in</p>}
            </div>
        );
        } 
    }


const mapDispatchToProps = {
    log_in: log_in,
    changeBool: changeBool
}


const mapStateToProps = (state) => {
    return {
        postBool: state.postBool,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminInput)
