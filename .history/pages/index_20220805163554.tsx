import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <TextField label='Email Address' />
      <TextField label='password' type='password' />
      <Checkbox />
  );
};

export default Home;
