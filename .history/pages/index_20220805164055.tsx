import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const Home: NextPage = () => {
  return (
    <>
      {/* 필수입력 required */}
      <TextField label='Email Address' required fullWidth name='email' />
      <TextField
        label='password'
        type='password'
        required
        fullWidth
        name='password'
        autoComplete='email'
      />
      <Checkbox value='remember' color='primary' />
      {/* 서버로 보내는 서브밋 타이틀을 만들어줌. */}
      <Button type='submit'>SIGN IN</Button>
    </>
  );
};

export default Home;
