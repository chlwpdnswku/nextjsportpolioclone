// 회원가입 페이지 구성  form 과 input이 필요한데 input 에는 ip,nickname,password,passwordCheck를 만들고
// password와 passworkdCheck가 다를경우 오류를 보이게 만듬 .
// 또한 약관동의 + 약관동의 안할경우 오류메세지 보이게 함
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import { useCallback, useState } from 'react';
import useInput from '../hook/useInput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  // 커스텀 훅을 사용한 코드 줄이기 방법
  const [id, onChangeId] = useInput('');
  //nickname input
  const [nickname, onChangeNickname] = useInput('');
  //password input
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  // passwordError 초기값은 false
  const [passwordError, setPasswordError] = useState(false);
  // passowrd와 passwordCheck의 value가 다르면 passwordError를 true로
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
            <label htmlFor='user-id'>비밀번호 체크</label>
            <br />
            <Input
              name='user-id'
              type='password'
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </div>
          <div>
            <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
              user-term 동의
            </Checkbox>
            {termError && (
              <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type='primary' htmlType='submit'>
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
