/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
`;

const LoginForm = ({ setIsLoggendIn }) => {
  const [id, setId] = useState('');
  const [password, setPassWord] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggendIn(true);
  }, [id, password]);

  return (
    <>
      {/* onFisish = onsubmit과 같은 거지만 e.preventDefault() 가 자동으로들어옴 */}
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor='user-id'>아이디</label>
          <br />
          <Input name='user-id' value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor='user-password'>비밀번호</label>
          <br />
          <Input
            name='user-password'
            type='password'
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button type='primary' htmlType='submit' loading={false}>
            로그인
          </Button>
          <Link href='../Auth/signup'>
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
