import React, { useCallback } from 'react';
import { Avater, Button, Card } from 'antd';
function UserProfile({ setIsLoggedIn }) {
  const onLoggout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return <div>UserProfile</div>;
}

export default UserProfile;
