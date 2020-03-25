/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
import './wrapper.less';
import logo from '../../logo.svg';

const { Header, Content, Footer } = Layout;

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
