import React from "react";
import { Container } from "react-bootstrap";

export class Register extends React.Component{
constructor(props){
    super(props);
}
render(){
return <div className="base-container">
    <div className="header">Register</div>
<div className="content">
<div className="image">
        <img src="/images/imglogo.png" width={"700px"} height={"700px"}  />
    </div>
    <div className="form">
    <div className="form-group">
        <label htmlFor="username">Username</label>
      <input type='text' name="username" placeholder="username" />
    </div>
    <div className="form-group">
        <label htmlFor="password"> Email </label>
      <input type='text' name="email" placeholder="email" />
    </div>
    </div>
    </div>
    <div className="footer">
        <button type="button" className="btn">Register Here</button>
    </div>
    </div>


}
}