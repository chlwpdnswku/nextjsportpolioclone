import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  Button,
  FormControl,
  FormControlLabel,
  Link,
  TextField,
  Grid,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const Home: NextPage = () => {
  return (
    <>
      {/* 필수입력 required */}
      <TextField
        label='Email Address'
        required
        fullWidth
        name='email'
        autoComplete='email'
        autoFocus
      />
      <TextField
        label='password'
        type='password'
        required
        fullWidth
        name='password'
        autoComplete='current-password'
      />
      {/* 체크박스를 누를때 옆에 텍스트를 클릭했을때에도 체크박스가 체크가 된다 !*/}
      <FormControlLabel
        control={<Checkbox value='remember' color='primary'></Checkbox>}
        label='remember me'
      ></FormControlLabel>

      {/* 서버로 보내는 서브밋 타이틀을 만들어줌.  sx props 디자인을 간단히 고치고싶을때 css 효과*/}
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        SIGN IN
      </Button>
      <Grid>
        <Link href='#'>forgot password</Link>
        <Link href='#'>회원가입</Link>
      </Grid>
    </>
  );
};

export default Home;
