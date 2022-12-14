// 회원가입 페이지 구성  form 과 input이 필요한데 input 에는 ip,nickname,password,passwordCheck를 만들고
// password와 passworkdCheck가 다를경우 오류를 보이게 만듬 .
// 또한 약관동의 + 약관동의 안할경우 오류메세지 보이게 함
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import { useCallback, useState } from 'react';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
`;

const signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 </title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor='user-id'>아이디</label>
            <br />
            <input name='user-id' value={id} required onChange={onChangeId} />
          </div>

          <div>
            <label htmlFor='user-id'>닉네임</label>
            <br />
            <Input
              name='user-id'
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          {/* password */}
          <div>
            <label htmlFor='user-id'>비밀번호</label>
            <br />
            <Input
              name='user-id'
              type='password'
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          {/* password check */}
          <div>
            <label></label>
            <br />
            <Input />
          </div>
        </Form>
      </AppLayout>
    </>
  );
};
