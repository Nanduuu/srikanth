import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Radio, Icon } from 'antd';
import { Popover,Row, Col } from 'antd';
import {Route , Switch} from 'react-router';
import { Link } from 'react-router-dom';
import Home from "./Home.js";
import Why27k from "./Why27k";
import Testimonials from "./Testimonials";
import Contactus from "./Contactus";
import SubmitForm from'./SubmitForm';


const { Header, Content, Footer , Sider} = Layout;

const fontStyle ={

  fontfamily : "Helvetica Neue",
  color: "black",
  
}

class Frame extends React.Component{
	constructor(props){
		super(props);
    this.state = {
    collapsed: false,
    visible: false,
    };
	}

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });}
	render(){
			return(
				<div style={fontStyle}>
          <Row>
					<Layout>
          <Row>
            <Col style={{boxShadow:"2px 0px 2px black"}}>
  					    				   
   				   
              <Row>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '50px' }}
              >
              <Menu.Item key="1" style={{width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>Home <Link to = {"/"}></Link></Menu.Item>
                     
              <Menu.Item key="2" style={{width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}} >Why 27Tech <Link to = {"/Why27k"}></Link></Menu.Item>
              
              
              <Menu.Item key="3" style={{width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>Testimonials<Link to = {"/Testimonials"}></Link></Menu.Item>
        
              
              <Menu.Item key="4" style={{width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>Contact us<Link to = {"/Contactus"}></Link> </Menu.Item>
              </Menu>
        			</Row>
      				
    				
            </Col>
            </Row>
    				<Content style={{ padding: '0 50px', marginTop: 1  }}>
      			
              <div>
             <Row >
              
              <Col md={20} lg={20} sm={24} >

                  <Switch>
      
                      <Route exact path='/' component={Home}/>                                                           
                      <Route path='/Why27k' component={Why27k}/>
                      <Route path='/Testimonials' component={Testimonials}/>
                      <Route path='/Contactus' component={Contactus}/>
                      <Route path='/SubmitForm' component={SubmitForm}/ >
                    
                  </Switch>
              </Col>
              <Col md={4} lg={4} sm={24} class="ant-menu-dark" style={{padding : "5px"}}>
              
              <Row >
                    <Button type="primary" size='large' style={{ width :"80%",margin: "5px"}}> CPT/OPT   </Button>
              </Row>

              <Row>
                    <Button type="primary" size='large' style={{ width: "80%", margin : "5px",overflow:"hidden" ,textOverflow: 'ellipsis'}}>Daily Senarios</Button>
              </Row>
              <Row>
                  <Button type="primary" size='large' style={{ borderRadius:"50%", width : "80%", margin : "5px"}}>FAQ</Button>
              </Row>

              </Col>
              </Row>
              </div>

    				</Content>
    				<Footer theme="dark" style={{ textAlign: 'center' ,width:'100%' ,boxShadow:"2px 2px 10px black ", bottom:'0px'}}>
      						  <Col span={20}>
                    <Popover
                        content={<a onClick={this.hide}>Close</a>}
                        title="Need your role and responsibilities to help you !! Please do Whatsapp for Quick response - +91 8977888954"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                      >
                        <Button class = "primary">Whatsapp me !! For quick respond <Icon type="tablet" ></Icon></Button>
                      </Popover>
                      </Col>
    				</Footer>
  					</Layout>
          </Row>

				</div>



				);



	}


}

export default Frame;