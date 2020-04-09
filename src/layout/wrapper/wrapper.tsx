import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
import { facade } from '../../services';
import './wrapper.less';
import logo from '../../logo.svg';

const { Header, Content, Footer } = Layout;

facade.event.on('facade.socket.connected', () => {
  console.log('websocket 连接成功');
});
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMDA0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Iui1teW5s-W5syIsImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjEiLCJzdWIiOiIxMDAwNCIsImp0aSI6ImViN2NmNzUxLWY4NTktNDJiYi04NWQ2LWI2ZWU5MGJlNzQzZiIsImlhdCI6MTU4NjMzOTkzNiwibmJmIjoxNTg2MzM5OTM2LCJleHAiOjE2MTc4NzU5MzYsImlzcyI6IlBpbXMiLCJhdWQiOiJQaW1zIn0.xvKX1y1dprkx87oGQpl3nZF86-pALzGEGLsgejHSNIo';
const qs = 'enc_auth_token=' + encodeURIComponent(token);
facade.socket.connect(facade.config.SOCKET_BASE_URL, qs).then(() => {
  // 接受websocket 消息
  facade.socket.receiveMessage('DemoReceived', (name, message) => {
    console.log(name);
    console.log(message);
  });
  // 发送websocket 消息
  facade.socket.sendMessage('Demo', 'jjj').then(res => {
    console.log(res);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wrapper: React.FC = (props: any) => {
  return (
    <Layout className="appLayout">
      <BackTop visibilityHeight={100} />
      <Layout className="contentLayout">
        <Header className="header">
          <div className="logo">
            <Link to="/home">
              <img className="img" src={logo} alt=""></img>
            </Link>
            <span className="compay">
              <span>React</span>
            </span>
          </div>
        </Header>
        <Content className="content">
          <div className="child">{props.children}</div>
        </Content>
        <Footer className="footer">@React</Footer>
      </Layout>
    </Layout>
  );
};

export default withRouter(Wrapper);
