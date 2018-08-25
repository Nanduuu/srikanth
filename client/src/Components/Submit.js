import React from 'react';
import formurlencoded from 'form-urlencoded';

import { Drawer, Form, Button, Col, Row, Input, Select, Mention,DatePicker } from 'antd';
const { Option } = Select;

class Submit extends React.Component{

	constructor(props){
		super(props);
		this.state = { visible: false ,
						Name:"",
						StartDate:"",
						Technology:"",
						Time:"",
						EmailId:"",
						Breif:""
						};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.nameChange = this.nameChange.bind(this);
		this.emailChange = this.emailChange.bind(this);
		this.technologyChange = this.technologyChange.bind(this);
		this.dateChange = this.dateChange.bind(this);
		this.timeChange = this.timeChange.bind(this);
		this.breifChange = this.breifChange.bind(this);
		
		}

		showDrawer = () => {
			    this.setState({
			      visible: true,
			    });
		};
		onClose = () => {
			    this.setState({
			      visible: false,
			    });
		};

		nameChange = (e)=>{
			
			this.setState ({Name :e.target.value});

		}
		emailChange = (e)=>{
			
			this.setState ({EmailId :e.target.value});

		}
		technologyChange = (e)=>{
			
		//	this.setState ({Technology :e.target.value});

		}
		dateChange = (date, dateString)=>{
			
			this.setState ({StartDate :dateString})

		}
		timeChange = (e)=>{
			
			this.setState ({Time :e.target.value})

		}
		breifChange = (contentState)=>{
			
			this.setState ({Breif :contentState.contentState})

		}


		handleSubmit =(event)=>{
			event.preventDefault();

			var data = {
				name : this.state.Name,
				email : this.state.EmailId,
				tech:this.state.Technology,
				date:this.state.StartDate,
				time:this.state.Time,
				breif:this.state.Breif
			}

			

			var packet={method : 'POST',
						body:formurlencoded(data),
						headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }};

			this.callApi( packet ).then(res => alert(res.msg))
      			  .catch(err => console.log(err));
   			
		};

	
  	callApi = async ( packet ) => {
    const response = await fetch('/email/',packet);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

	render(){
		// const { getFieldDecorator } = this.props.form;
			return(
					<div>
			        <Button style={{width:'80%'}} onClick={this.showDrawer}>
			          {this.props.title}
			        </Button>
			        <Drawer
			          title={this.props.title}
			          width={720}
			          placement="right"
			          onClose={this.onClose}
			          maskClosable={false}
			          visible={this.state.visible}
			          style={{
			            height: 'calc(100% - 55px)',
			            overflow: 'auto',
			            paddingBottom: 53,
			          }}
			        >


			        <Form layout="vertical" hideRequiredMark onSubmit={this.handleSubmit}>
			        		<Row gutter={16}>
              					<Col span={12}>
              						  <Form.Item label="Name">
               								   <Input onChange = {this.nameChange} name = "Name" placeholder="please enter user name"  />
                						</Form.Item>
             					 </Col>
             					 
                				<Col span={12}>
						    			<Form.Item label="Start Date">
               								<DatePicker  onChange = {this.dateChange} name = "StartDate" placeholder="Select Date"/>
                						</Form.Item>
                					</Col>
             				</Row>
             				<Row gutter={16}>
             					<Col span={12}>
             					 		 <Form.Item label="Technology">
               								   <Input onChange = {this.technologyChange} name = "Technology" placeholder="please enter Technology" />
                						</Form.Item>
								                
                				</Col>
             					 <Col span={12}>
             					 		 <Form.Item label="Availability Time">
               								<label style={{width:'30%'}}> CST <Input Name = "Time" type = "radio" ></Input> </label>
               								<label style={{width:'30%'}}> EST <Input Name = "Time" type = "radio" /> </label>
               								<label style={{width:'30%'}}> PST <Input Name = "Time" type = "radio" /> </label>
                						</Form.Item>
						                
                				</Col>
                				
						    </Row>
						    <Row gutter={16}>
						    		<Col span={12}>
             					 		 <Form.Item label="Email">
               								   <Input type="email" name = "EmailId" onChange = {this.emailChange} placeholder="please enter Email id" />
                						</Form.Item>
						     	</Col>
						     	<Col span={12}>
             					 		 <Form.Item label="Breif about your requirement" >
               								   <Mention onChange = {this.technologyChange} name ="Breif"/>
                						</Form.Item>
						     	</Col>

             					 
						    </Row>
						    <div>
						    <Button type="submit" style={{margin:"10px"}} onClick = {this.handleSubmit} type="primary">Submit </Button>
						    
						    </div>
			        </Form>
			                 
			        </Drawer>
			      </div>

			);
		}



}

export default Submit;