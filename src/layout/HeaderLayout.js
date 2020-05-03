import React, { useState, useContext } from 'react';
import { Layout, Icon, Modal } from 'antd';
import store from 'store';
import { Redirect } from 'react-router-dom';

import { LayoutContext } from '../contexts';

const { Header } = Layout;

function HeaderLayout() {
  const { headerComponent } = useContext(LayoutContext);

  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isLogedOut, setLogedOut] = useState(false);

  const handleLogout = () => {
    store.set('authenticationToken', null);
    setLogedOut(true);
  }

  return (
    <Header>
      {isLogedOut && <Redirect to="/login" />}
      <div className="header-wrapper">
        <div className="page-header">{headerComponent}</div>
        <Icon type="logout" onClick={() => setLogoutModalOpen(true)} className="logout-icon" />  
      </div>
      <Modal
        title="Log out from dashboard"
        visible={isLogoutModalOpen}
        onOk={handleLogout}
        onCancel={() => setLogoutModalOpen(false)}
      >
        would you really like to log out?
      </Modal>
    </Header>
  );
}

export default HeaderLayout;
