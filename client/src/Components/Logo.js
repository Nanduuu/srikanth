import React from 'react';
import {Row,Col} from 'antd';
var image =require('./logo.jpg');



class Logo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div style={{background:"#011456",width:"100%" }}>
				<Row>
					<Col xl={24} md={24} sm={24}>
						<img style={{align:"left" ,width:"20%",height:"5%"}} src={image}></img>
				<	/Col>
				</Row>
				</div>


			)
	}

}

export default Logo;