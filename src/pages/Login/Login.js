import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import store from 'store';
import { Form, Icon, Input, Button, Layout } from 'antd';
import '../../assets/scss/login.scss';

import { API } from '../../utils/API';
import { URL } from '../../constants';

function Login({ form }) {
  const [isAuthenticated, setIsAuth] = useState(!!store.get('authenticationToken'));
  console.log('isAuthenticated: ', isAuthenticated);
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const values = await validateFields();
      console.log('values: ', values);
      const response = await API.post(URL.login, values);
      store.set('authenticationToken', response.data.data.token)
      setIsAuth(true);
      
      console.log('response: ', response);
    }
    catch (err) {
      return;
    }
  };

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Layout className="login-layout">
      <img  src={require('../../assets/img/favicon.png')} />
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please enter your username!' }]
          })(
            <Input
              prefix={<Icon type="user" className="input-icon" />}
              placeholder="Username"
              size="large"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" className="input-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default Form.create({ name: 'loginForm' })(Login);
