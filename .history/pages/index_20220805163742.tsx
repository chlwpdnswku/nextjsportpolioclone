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
      <TextField label='Email Address' />
      <TextField label='password' type='password' />
      <Checkbox value='remember' color='primary' />
      <Button type='submit' />
    </>
  );
};

export default Home;
