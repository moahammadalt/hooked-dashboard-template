import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
import pathToRegexp from 'path-to-regexp';

import { dashboardRoutes } from '../router';
import { LayoutContext } from '../contexts';

const { Sider } = Layout;

function SideBarLayout(props) {
  const {
    location: { pathname }
  } = props;

  const isPathMatchRequestedUrl = path => !!pathToRegexp(path).exec(pathname);
  const {
    sideBarCollapsed,
    setCollapsed,
    theme,
  } = useContext(LayoutContext);

  return (
    <Sider
      collapsible
      collapsed={sideBarCollapsed}
      onCollapse={() => setCollapsed(!sideBarCollapsed)}
    >
      <div className="logo">
        <img src={require('../assets/img/favicon.png')} alt="" />
        {!sideBarCollapsed && <span>Admin Logo</span>}
      </div>
      <Menu
        theme={theme}
        mode="inline"
        activeKey={pathname}
        selectedKeys={[pathname]}
      >
        {dashboardRoutes.map(({ path, showAlways, icon, name }) => (
          <Menu.Item key={isPathMatchRequestedUrl(path) ? pathname : path}>
            {(showAlways || isPathMatchRequestedUrl(path)) && (
              <Link to={path}>
                <Icon type={icon} />
                <span className="nav-text">{name}</span>
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default withRouter(SideBarLayout);
