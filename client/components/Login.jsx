import React from 'react'
import {connect} from 'react-redux'
import {logIn} from '../actions/'
import {apiCheckLogin} from '../api/'

let name
let id

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            password:'',
            isLoggedIn: true,
        }
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        apiCheckLogin(this.state,(err,res) => {
            if(err) return console.log(err)
            console.log(res)
            name=res.name
            id=res.userId
            console.log(id,name,"this one")
            this.props.logIn(name,id)
        })
    }

    render(){
        let wordDisplay="You are currently not logged in";
        if(this.state.isLoggedIn){
            wordDispay="You are currently logged in as";
        }
        return(
            <div>
               <h1>{wordDisplay} </h1> 
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"placeholder="username" name="userName" onChange={this.handleChange.bind(this)}/>
                    <input type="password" placeholder="password" name="password" onChange={this.handleChange.bind(this)} />
                    <button> Login </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        logIn:(name, id) => {
            dispatch(logIn(id,name))}
    }
}

export default connect(null,mapDispatchToProps)(Login)