import PropTypes from 'prop-types';
import Link from 'next/link';
import { useState } from 'react';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

import React from 'react';

function layout({ children }) {
  const [isLoggedIn, setIsLoggendIn] = useState(false);
  return <div>layout</div>;
}

export default layout;
