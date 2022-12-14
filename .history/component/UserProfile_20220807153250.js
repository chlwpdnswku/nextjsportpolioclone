import React, { useCallback } from 'react';
import { Avater, Button, Card } from 'antd';
function UserProfile({ setIsLoggendIn }) {
  const onLoggout = useCallback(() => {
    setIsLoggendIn(false);
  }, []);

  return (
    <>
      <Card>
        <Card.Meta />
        <Button>로그아웃</Button>
      </Card>
    </>
  );
}

export default UserProfile;
