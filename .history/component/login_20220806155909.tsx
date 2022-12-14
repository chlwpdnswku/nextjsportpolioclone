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
  Typography,
  Avatar,
  Box,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';

const Home: NextPage = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Typography는 text폰트를 지정할수 있도록 하는 것 h1 테그로 감싸지고 variant h5 는 mui에서 지정한 h5디자인 적용  */}
        {/* Avata를 통해 아이콘을 원형으로 하기 sx제거해도 자동으로 margin 1만큼  */}
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          {' '}
          <LockOutlinedIcon />
        </Avatar>

        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        {/* 필수입력 required */}
        <TextField
          margin='normal'
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
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          SIGN IN
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href='#'>forgot password</Link>
          </Grid>

          <Grid item>
            {' '}
            <Link href='#'>회원가입</Link>
          </Grid>
        </Grid>
        <Button>Kakao</Button>
        <Button>구글</Button>
      </Box>
    </Container>
  );
};

export default Home;
