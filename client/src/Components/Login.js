import React from 'react';
import {Row, Col, Button, Input,Submit} from 'antd';
import { Link } from 'react-router-dom';
import { Redirect} from 'react-router';
import {connect} from 'react-redux';
import formurlencoded from 'form-urlencoded';
import axios from 'axios';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			uname : "",
			pword:"",
			file:null
		}
		this.Login = this.Login.bind(this);
		this.setfile = this.setfile.bind(this);
	}
	unameChange = (event)=>{
		this.setState({uname:event.target.value})
	}
	pwordChange = (event)=>{
		this.setState({pword:event.target.value})
	}
	setfile = (event) =>{
		this.setState({file:event.target.files[0]});
	}
	Login= (event)=>{
			event.preventDefault();
			console.log(this.state.file);
			const data = new FormData();
			data.append ('uname',this.state.uname);
			data.append('pword',this.state.pword);
			data.append('resume',this.state.file);

			axios.post('/fileLoad' ,data ).then (res=>{
				alert(res.data.msg);
			})
	}
	render(){
		return(
				<div>
					<form onSubmit={this.Login}>
					<Row style ={{paddingTop:'10%'}}>
					<Col md={2} lg={6} sm={2} xs={2}/>
					<Col md={20} lg={12} sm={20} xs={20} style={{textAlign:"left",border:"3px solid white", borderRadius:"5px 20px "}} >
						<h2 style={{margin:'2%',color:"white"}}>Login and fileload</h2>
						<Input type="primary" name="uname" style={{margin:"2%",width:"75%",align:"center"}} onChange = {this.unameChange} placeholder="Enter UserName"/>
						<Input type="password" name="pword" onChange={this.pwordChange} style={{margin:"2%",width:"75%"}} placeholder="Please enter your password"/>
						<Input type="file" style={{ margin:'2%',width:"75%"}} onChange={this.setfile}/>
						<Row style={{margin:'1%'}} >
						<Col md={12} lg={12} sm={12} xs={12}>
						<Input type="submit" value="Load" style={{margin:'1%'}}/>
						</Col>
						<Col md={12} lg={12} sm={12} xs={12}>
						<Link to="/"><Button type="primary" style={{ width:'100%',margin:'1%'}}>Back</Button></Link>
						</Col>
						</Row>
					</Col>
					<Col md={2} lg={6} sm={2} xs={2}/>
					</Row>
					</form>
				</div>
			);
	}
}
export default Login;