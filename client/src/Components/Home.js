import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Radio, Icon } from 'antd';
import { Row, Col } from 'antd';
import Submit from './Submit';
import {Route , Switch} from 'react-router';
import { Link } from 'react-router-dom';


class Home extends React.Component{


	render(){
		return(
					<div>
                             
                             <div style={{margin:"30px 0px 30px 0px"}}>
                             <h1 style={{color:"white"}}> Are you looking for ??</h1>
                             <Row>
                             	<Col xl={12} sm={12} md={12}>
                              	 <Link to = "/SubmitForm"><Button style={{ fontSize:"16px",width:'100%'}}><b>Tranning</b></Button> </Link>   
                                </Col>
                             	<Col xl={12} sm={12} md={12}>
                                 <Link to = "/SubmitForm"><Button style={{fontSize:"16px",width:'100%'}}><b>Job Support</b></Button> </Link>  
								</Col>
							 </Row>
                             </div>

                      </div>

			);
	}



}

export default Home;




