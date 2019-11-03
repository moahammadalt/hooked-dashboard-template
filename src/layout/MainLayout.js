import React from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import { dashboardRoutes } from '../router';

const { Header, Content, Footer, Sider } = Layout;

function MainLayout() {
  console.log('MainLayout: ', MainLayout);
  return (
    <Layout className="main-layout">
      <Sider collapsible collapsed={false}>
        <div className="logo">
          <img  src={require('../assets/img/favicon.png')} />
          <span>Piccoloveliero</span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>

          {dashboardRoutes.map((route, index) => (
            <Menu.Item key={index}>
              <Link to={route.path}>
                <Icon type={route.icon} />
                <span className="nav-text">{route.name}</span>
              </Link>
            </Menu.Item>
          ))}

        </Menu>
      </Sider>
      <Layout>
        <Header>header data</Header>
        <Content>
          <Switch>
            {dashboardRoutes.map((route) => (
              <Route
                exact={true}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
            <Redirect to="/"/>
          </Switch>
        </Content>
        <Footer>picco bla bla ©2019</Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
