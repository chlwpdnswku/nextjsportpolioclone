import React, { useCallback } from 'react';
import { Avater, Button, Card } from 'antd';
function UserProfile({ setIsLoggendIn }) {
  const onLoggout = useCallback(() => {
    setIsLoggendIn(false);
  }, []);

  return (
    <>
      <Card>
        <Card.Meta avatar={<Avatar>JH</Avatar>} title='LeeJaeHoon' />
        <Button onClick={onLoggout}>๋ก๊ทธ์์</Button>
      </Card>
    </>
  );
}

export default UserProfile;
