import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Radio, Icon } from 'antd';
import { Popover,Row, Col } from 'antd';
import {Route , Switch,Redirect} from 'react-router';
import { Link ,withRouter} from 'react-router-dom';
import Home from "./Home.js";
import Why27k from "./Why27k";
import Testimonials from "./Testimonials";
import Contactus from "./Contactus";
import SubmitForm from'./SubmitForm';
import Optcpt from "./Optcpt";
import DailySenarios from "./DailySenarios";
import {connect} from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components';
import Media from "react-media";

const bodyStyle = {
    backgroundColor : '#0066ff'
}
const { Header, Content, Footer , Sider} = Layout;

const fontStyle ={

  fontfamily : "Helvetica Neue",
  color: "black",
  
};

const mapStateToProps = (state) => {
  return {login : state.login};
};

class Frame extends React.Component{
	constructor(props){
		super(props);
    this.state = {
    collapsed: false,
    visible: false,
    Optcpt:"primary",
    DailySenarios:"primary",
    redirect:false
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

  OptcptButton=()=>{
    this.setState({Optcpt:"danger",DailySenarios:"primary"})
  }
  DailySenarios=()=>{
    this.setState({Optcpt:"primary",DailySenarios:"danger"})
  }
  componentWillMount(){

    if(this.props.login == "loggedin"){
      this.setState({redirect:false})
    }
    console.log(this.props.match);
  }
  LoginRedirect = ()=>{
    if (this.state.redirect) {
      return <Redirect to='/Login' />
    }
  }
  setRedirect=()=>{
    if(this.props.login == "notloggedin"){
    this.setState({redirect:true})
  }
  }
	render(){
			return(
				<div style={fontStyle}>
      
     
          <Row>
					<Layout style={{background :"#8080ff"}}>
          <Row>
            <Col style={{boxShadow:"2px 0px 2px black"}} lg={24} sm={24} md={24}>
  					    				   
   				   
              <Row>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ background:"white", lineHeight: '50px' ,color : "block" }}
              >
              <Menu.Item key="1" style={{ fontSize:"20px",width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>
                  <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span><Icon type="home" theme="outlined" />Home</span>
                      ) : (
                      <Icon type="home" theme="outlined" />
                      )
                    }
                    </Media>

                <Link to = {"/"} ></Link>
                </Menu.Item>
                     
              <Menu.Item key="2" style={{ fontSize:"20px",width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}} >
                  <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span><Icon type="question" theme="outlined" />Why 27Tek</span>
                      ) : (
                      <Icon type="question" theme="outlined" />
                      )
                    }
                    </Media>

              <Link to ={'/Why27k'}> </Link>
              </Menu.Item>
              
              
              <Menu.Item key="3" style={{ fontSize:"20px",width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>

                <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span><Icon type="database" theme="outlined" />Testimonials</span>
                      ) : (
                      <Icon type="database" theme="outlined" />
                      )
                    }
                    </Media>
                <Link to = {"/Testimonials"} ></Link>
                </Menu.Item>

              <Menu.Item key="4" style={{ fontSize:"20px",width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>
                    <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span><Icon type="team" theme="outlined" />Contact us</span>
                      ) : (
                      <Icon type="team" theme="outlined" />
                      )
                    }
                    </Media>

                <Link to = {"/Contactus"}>
                </Link> </Menu.Item>
              </Menu>
        			</Row>
      				
    				
            </Col>
            </Row>
    				
      			
              <div style={{borderWidth:"0px 0px 2px 0px" , borderStyle:"solid"}}>
              <Row style={{marginTop:"10px"}}>
              <Col md={24} lg={24} sm={24} >
              
              <Row >
                <Col xl={12} lg={12} sm={12} xs={12}>
                  <Link to = {"/Optcpt"}>  <Button  type="primary" size='large' style={{ background:"#011456", width :"100%",margin: "0px"}}> CPT/OPT  FAQ </Button></Link>
                  </Col>
                  <Col xl={12} lg={12} sm={12} xs={12}>
                  <Link to ={"/DailySenarios"}><Button type="primary" size='large' style={{ background:"#011456", width :"100%",margin: "0px"}}>Daily Senarios</Button></Link>                  </Col>
              </Row>

              <Row>
                  
              </Row>
              

              </Col>
              </Row>
              </div>
               
             <Row >
              <Content>
              <Col md={24} lg={24} sm={24} >
                  
      
                      <Route exact path= "/" component={Home}/>                                                           
                      <Route path='/Why27k' component={Why27k}/>
                      <Route path={'/Testimonials'} component={Testimonials}/>
                      <Route path={'/Contactus'} component={Contactus}/>
                      <Route path={'/SubmitForm'} component={SubmitForm}/ >
                      <Route path={'/Optcpt'} component={Optcpt}/ >
                      <Route path={'/DailySenarios' } component={DailySenarios}/ >
                  
              </Col>
              </Content>
              </Row>
            
              

    				
    				<Footer theme="light" style={{background:"#011456",textAlign: 'center' ,width:'100%' ,boxShadow:"2px 2px 10px black ", bottom:'0px'}}>
      						  <Col span={24}>
                    <Popover
                        content={<a onClick={this.hide}>Close</a>}
                        title="Need your role and responsibilities to help you !! Please do Whatsapp for Quick response - +91 8977888954"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                      >
                        <Button class = "primary"><b>Click me ! for my contact </b> <Icon type="tablet" ></Icon></Button>
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