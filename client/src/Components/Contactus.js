import React from 'react';
import { Row, Col } from 'antd';
import {Icon} from 'antd';



class Contactus extends React.Component{


	render(){
		return(
					<div style={{ margin:"0px 0px 30px 0px"}}>	
							<div style={{height:'100px', margin:"20px 0px 0px 0px"}}>
                             <h1 style={{ color: 'white' }}>Contact Information</h1>
                            </div>
                             
                             <Row  >
                             <Col xl={12} >
                             	<h2 style={{ color: 'white' }}> We would love to help and work with you</h2>
                             	<p style={{ color: 'white',fontSize:"16px" }}> Please give us few details about your next project and we ll get back to you soon </p>

                             	<h2 style={{ color: 'white' }}>Your Privacy</h2>
                             <p style={{ color: 'white',fontSize:"16px" }}> Your information will not be shared with any 3rd parties under any circumstances.</p>

                             </Col>
                             <Col xl={12} >
                            
                              <h2 style={{ color: 'white' }}> What you get</h2>
                             	<div >
								<p style={{ color: 'white' ,fontSize:"16px"}}><Icon type="plus-circle" style={{ fontSize: 16, color: 'white' }}/> A cost estimate for your project.</p>
								<p style={{ color: 'white' ,fontSize:"16px" }}><Icon type="plus-circle" style={{ fontSize: 16, color: 'white' }}/> An in person meeting if needed.</p>
								<p style={{ color: 'white' ,fontSize:"16px"}}><Icon type="plus-circle" style={{ fontSize: 16, color: 'white' }}/> The meeting over  phone|Skype.</p>
								</div>
                             </Col>
                             </Row>
                             
                             

                      </div>

			);
	}



}

export default Contactus;