import PropTypes from 'prop-types';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

import React from 'react';

function layout({ children }) {
  const [isLoggedIn, setIsLoggendIn] = useState<boolean>(false);

  return (
    <div>
      ..Menu
      {/* gap과같음 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={12}>
          제운표 참고
        </Col>
      </Row>
    </div>
  );
}

export default layout;
