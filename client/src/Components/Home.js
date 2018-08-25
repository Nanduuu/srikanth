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
                             <h1> Are you looking for ??</h1>
                             <div>
                             <Row>
                             	<Col span={12}>
                              	 <Link to = "/SubmitForm"><Button style={{width:'100%'}}>Traning</Button> </Link>   
                                </Col>
                             	<Col span={12}>
                                 <Link to = "/SubmitForm"><Button style={{width:'100%'}}>Job Support</Button> </Link>  
								</Col>
							 </Row>
                             </div>

                      </div>

			);
	}



}

export default Home;




