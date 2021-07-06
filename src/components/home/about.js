import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'Gives Best Outgoing output.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Finishing',
    content: 'gives out the nice finishing.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Workflow',
    content: 'Control in all kinds of situation.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Best Company in the world</p>
        </div>
        <div className="contentHolder">
          <p>Best Technologies found around the world.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;