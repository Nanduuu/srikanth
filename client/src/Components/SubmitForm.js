import React from 'react';
import formurlencoded from 'form-urlencoded';
import {Route , Switch , Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Drawer, Form, Button, Col, Row, Input, Select, Mention,DatePicker } from 'antd';
const { Option } = Select;

const style={
	
	textAlign:"right",
	paddingRight:'10px',
	margin:"auto"
}

class SubmitForm extends React.Component{

constructor(props){
	super(props);
	this.state = { 
						Name:"",
						StartDate:"",
						Technology:"",
						Time:"CST",
						EmailId:"",
						Breif:"",
						redirect:false
				};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.nameChange = this.nameChange.bind(this);
	this.emailChange = this.emailChange.bind(this);
	this.technologyChange = this.technologyChange.bind(this);
	this.dateChange = this.dateChange.bind(this);
	this.timeChange = this.timeChange.bind(this);
	this.breifChange = this.breifChange.bind(this);


}

		nameChange = (e)=>{
			
			this.setState ({Name :e.target.value});

		}
		emailChange = (e)=>{
			
			this.setState ({EmailId :e.target.value});

		}
		technologyChange = (e)=>{
			
			this.setState ({Technology :e.target.value});

		}
		dateChange = (dates: moment, moment, dateStrings: string, string)=>{
			
			this.setState ({StartDate:moment})


		}
		timeChange = (e)=>{
			
			e.preventDefault();
			this.setState ({Time :e.target.value})

		}
		breifChange = (e)=>{
			
			this.setState ({Breif :e.target.value})

		}

		
		handleSubmit =(event)=>{
			event.preventDefault();

			var data = {
				name : this.state.Name,
				email : this.state.EmailId,
				tech:this.state.Technology,
				date:this.state.StartDate,
				time:this.state.Time,
				breif:this.state.Breif,

			}

			
			
			var packet={method : 'POST',
						body:formurlencoded(data),
						headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }};

			this.callApi( packet ).then((res) => {alert(res.msg);this.setState({redirect:true});})
      			  .catch(err => console.log(err));

      			 

      			  
   			
		};

	
  	callApi = async ( packet ) => {
    const response = await fetch('/email/',packet);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  redirect = ()=>{
  	if (this.state.redirect) {
      return <Redirect to='/' />
    }

  }
  disabledDate = (current)=>{
			return current && current < moment().endOf('day');
		}

render(){


	return(
			<div style={{margin:"5px", fontSize:"20px", color:"white"}}>
			{this.redirect()}
			<h2 style={{color:"white"}}>Please enter the details</h2>
			<form onSubmit = {this.handleSubmit}>
					<Row >
					<Col span={6} style={style}><lable > Name </lable></Col>
					<Col span={12}><Input onChange={this.nameChange} name="Name" required/></Col>
					</Row>

					<Row >
					<Col span={6} style={style}><lable> Technology </lable></Col>
					<Col span={12}><Input  onChange={this.technologyChange} required/></Col>
					</Row>

					<Row >
					<Col span={6} style={style}><lable> Email </lable></Col>
					<Col span={12}><Input type="email" onChange={this.emailChange} required/></Col>
					</Row>

					<Row>
					<Col span={6}  style={style}><lable> Breif about requirement </lable></Col>
					<Col span={12}><textarea style={{width:'100%',height:'50%',color:"black"}} onChange={this.breifChange} required/></Col>
					</Row>

					<Row >
					<Col span={6} style={style} ><lable> Date on required </lable></Col>
					<Col span={12}><DatePicker disabledDate={this.disabledDate} onChange={this.dateChange} style={{width:"100%"}} required/></Col>
					</Row>

					<Row >
					<Col span={6}style={style}><lable> Time Zone </lable></Col>
					<Col span={12} style={{background:"white"}}>
						<lable style={{color:"black"}}><Input type="radio" onChange={this.timeChange} name="timezone" value="CST" checked/>CST</lable>
						<lable style={{color:"black"}}><Input type="radio" onChange={this.timeChange} name="timezone" value="IST"/>IST</lable>
						<lable style={{color:"black"}}><Input type="radio" onChange={this.timeChange} name="timezone" value="PST"/>PST</lable>
					</Col>

					</Row>


					<Row>
						<Col span={6}>
						
						</Col>

						<Col span={12}>
						<Col span={12}>
						<Input type="submit"/> 
						</Col>
						<Col span={12}>
						<Link to='/'><Button type="danger" style={{width:'100%'}}>Cancel</Button></Link>
						</Col>
						
						
						</Col>
					</Row>

		
			</form>
			

			</div>
		)

}




}

export default SubmitForm;