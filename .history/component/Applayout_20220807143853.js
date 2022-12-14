import PropTypes from 'prop-types';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

import React from 'react';

const SeachInput = styled(Input.Search)`
  //antd 커스텀 하는법
  vertical-align: middle;
`;

function Applayout({ children }) {
  // useState로 false일때는 Login true일때 UserProfile
  const [isLoggedIn, setIsLoggendIn] = useState(false);

  return (
    <div>
      ..Menu
      {/* gap과같음 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggendIn={setIsLoggendIn} />
          ) : (
            <LoginForm setIsLoggendIn={setIsLoggendIn} />
          )}
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

Applayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Applayout;
