import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Radio, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';


const  cstyle = {
  textAlign: 'center',
  height: '160px',
  lineHeight: '160px',
  overflow:' hidden'
  
}




class Why27k extends React.Component{


	render(){
		return(
					<div>
              <h1> Why 27 technologies??</h1>
              <Carousel autoplay >
   						 	 <div style={cstyle}><h3>Will give you real time training with own test machines</h3></div>
								 <div style={cstyle}><h3>Will give you knowledge, How the actual work is happening in IT world</h3></div>
								 <div style={cstyle}><h3> Every day task will give you by trainer</h3></div>
					   	</Carousel>

                             
          </div>

			);
	}



}

export default Why27k;