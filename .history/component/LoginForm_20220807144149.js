import {Button,Form,Input} from 'antd';
import {useCallback,useStates} from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
`;

const LoginForm({setIs})