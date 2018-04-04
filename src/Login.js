import React, { Component } from 'react';
import './Reg.css';
import fetch from 'isomorphic-fetch'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:""
    }
  }
  stateChange(e){
    const target = e.target;
    this.setState({
      [target.name]:target.value
    });
  }
  saveUser(){
    const {
      username,
      password
    }=this.state;

    if(!username) return alert('用户名不能为空');
    if(!password) return alert('密码不能为空');

    fetch("",{
      method: "GET",
      mode: "cors",
      header: {
        "Content-Type" : "appliction/json"
      },
      body:{
        username,password
      }
    })
    .then(res => res.json())
    .then(res => {alert("注册成功");});
  }
  render() {
    return (
      <div onChange={(e)=>this.stateChange(e)}>
        <input name="username" value={this.state.username} plaveholder="请输入用户名"></input>
        <input name="password" value={this.state.password} plaveholder="请输入密码"></input>
        <button onClick={()=>this.saveUser}></button>
      </div>
    );
  }
}

export default Login;
