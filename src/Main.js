import React, { Component } from 'react';
import './Reg.css';

class Main extends Component {
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

  }
  render() {
    return (
      <nav>
        <a href='http://localhost:3000/#/Reg'>go to Reg</a>
        <a href='http://localhost:3000/#/Login'>go to Login</a>
      </nav>
    );
  }
}

export default Main;
