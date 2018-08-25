import React from 'react';
import { Card } from 'antd';
import {Row , Col } from 'antd';


class Testimonials extends React.Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <div style={{margin:'5px'}}>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={24}>
          <Col lg={8} md={12} sm={24}>
            <Card title=" - Mehak Nair" bordered={false}>
           <p>The staff was amazing they have been extremely professional and helpful through out my job. </p>
          <p> My organization hired me for Cyberark Technology. Due to budget issues they moved me to Beyond trust tool. </p>
          <p>When i explained the issue to 27 tech masters team. They changed the support person who are good in Cyberark and Beyond Trust.</p>
          <p>Replacement of trainers they have done in the right way. </p>
            </Card>
          </Col>
          <Col lg={8} md={12} sm={24}>
            <Card title="Harsitha" bordered={false}>
             <p>If a person is looking for job support on IDM tools, 1st point of contact will be 27 tech masters. </p>
          <p> These trainers trained me and my friend showing the real time environment and understand the project in a right way. </p>
          <p>This helps both of us and makes confident. </p>
            </Card>
          </Col>
          <Col lg={8} md={12} sm={24}>
            <Card title=" - Rahul & Vinay" bordered={false}>
              <p>
            Till now i worked on 2 technologies Sailpoint and CA Site Minder. </p>
           <p> I got good trainers for both the technologies. They are with core values and good business ethics. </p>
           <p> They will stand on their commitments. </p>
           <p> Friendly and efficient staff who are ready to help anytime on any technology. </p>
           <p> Would surely recommend this company. </p>
            </Card>
          </Col>
        </Row>
       </div>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={24}>
          <Col lg={8} md={12} sm={24}>
            <Card title="Reshma" bordered={false}>
            <p>The service you provide by helping us find the right source for help when needed is amazing. 
                  It helps us learn new technologies and provide the best at the client location.
                Please continue doing the same there are lot of people who need this including myself. Thank you</p>
            </Card>
          </Col>
          <Col lg={8} md={12} sm={24}>
            <Card title="Manasvita" bordered={false}>
            <p>The trainer assigned to me was very good. He understood my requirement really well and I had a great time 
            learning java. The support also was very cooperative and changed my trainer several times until I found a 
            trainer I was comfortable with. I am very thankful to him and he made my java learning experience less 
            overwhelming </p>

            </Card>
          </Col>
          <Col lg={8} md={12} sm={24}>
            <Card title="MahaLakshmi" bordered={false}>
              <p>Support which u give for finding the instructors is good .Follow up about the task completion 
              and guidance during it is impressive.  </p>.
            </Card>
          </Col>
        </Row>
       </div>




       <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={24}>
          <Col lg={8} md={12} sm={24}>
            <Card title="Raghu." bordered={false}>
            <p>You have assisted me regarding Job support. I feel that you did a great job for getting me job support 
            which fits my requirements.  Im happy with the one I have right now.</p>
            </Card>
          </Col>
          <Col lg={8} md={12} sm={24}>
            <Card title="Harsitha" bordered={false}>
            <p>Congratulations for starting a company !!
              I would say that it was a great experience overall training and support in the initial days.</p>

            </Card>
          </Col>
          <Col lg={8} md={12} sm={24}>
            <Card title="MahaLakshmi" bordered={false}>
              <p>Support which u give for finding the instructors is good .Follow up about the task completion 
              and guidance during it is impressive.  </p>.
            </Card>
          </Col>
        </Row>
       </div>

       

      </div>
    );
  }
}

export default Testimonials;