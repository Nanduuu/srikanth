import React from 'react';
import {Row, Col, Button, Input,Submit} from 'antd';
import { Link } from 'react-router-dom';
import { Redirect} from 'react-router';
import {connect} from 'react-redux';
import formurlencoded from 'form-urlencoded';



const mapStateToProps = (state) => {
  return { items: state.login};
};
/*
const mapDispatchToProps = (dispatch) =>(
			{ dispatch : {type :"doLogin" , payload :"success"}}
		)

*/
class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			uname : "",
			password:"",
			success : false,
			redirect:false
		}
	}
	unameChange = (event)=>{
		this.setState({uname:event.target.value})
	}
	pwordChange = (event)=>{
		this.setState({password:event.target.value})
	}

	

	Login= ()=>{
			
			var data = {uname : this.state.uname,
						password : this.state.password 
						}

			var packet={method : 'POST',
						body:formurlencoded(data),
						headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }};
			this.callApi(packet).then((res) => { if (res.msg === "Success" ){

				this.props.dispatch({type :"doLogin" , payload :"success"})
				this.setState({redirect:true})
			} else{
				alert(res.msg);
			}})
      			  .catch(err => console.log(err));

	}

	callApi = async ( packet ) => {
    const response = await fetch('/login/',packet);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
	
	redirect = ()=>{
		if(this.state.redirect){
			return <Redirect to='/'/>
		}
	}

	render(){

		return(

				<div>
					{this.redirect()}
					
					<Row style ={{paddingTop:'10%'}}>
					<Col md={2} lg={6} sm={2} xs={2}/>
					<Col md={20} lg={12} sm={20} xs={20} style={{textAlign:"left",border:"3px solid #1890ff", borderRadius:"5px 20px "}} >
						<h2 style={{margin:'2%'}}>Login</h2>
						
						<Input type="primary" name="uname" style={{margin:"2%",width:"75%",align:"center"}} onChange = {this.unameChange} placeholder="Enter UserName"/>
						<Input type="password" name="password" onChange={this.pwordChange} style={{margin:"2%",width:"75%"}} placeholder="Please enter your password"/>
						<Row style={{margin:'1%'}} >
						<Button type="primary" onClick={this.Login} style={{margin:'1%'}}>Login</Button>
						<Link to="/"><Button type="primary" style={{margin:'1%'}}>Back</Button></Link>
						
						</Row>
					</Col>
					<Col md={2} lg={6} sm={2} xs={2}/>
					</Row>
				</div>




			);
	}


}

//export default connect(mapStateToProps)(Login);
export default Login;