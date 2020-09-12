import React, { Component } from 'react';
import './css/UpperNav.css'
import userlogo from './../static/icons/user.png'
import Button from 'react-bootstrap/Button'
class UpperNav extends Component{
  render(){
    return(
      <div className='topbar'>
        <a className="login-signup" href="#">LOGIN</a>
        <a className="login-signup signup" href="#">SIGNUP</a>
        <img src={userlogo} id='user-logo' alt="broken"></img>
      </div>
    )
  }
}
export default UpperNav;
