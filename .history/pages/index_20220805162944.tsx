import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Domain } from 'domain';

const Home: NextPage = () => {
  return (
    <Container fixed>
      <Header></Header>
      {/* 자신의 컨탠츠 크기만큼 가지게 된다 Grid */}
      <Grid container>
        <Grid item xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
};
function Header() {
  return (
    <header>
      <h1>Welcom</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav style={{ border: '1px solid gray' }}>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <article style={{ border: '1px solid gray' }}>
      <h2>Welcome</h2>
      Article Article Article Article Article Article v Article Article Article
      Article Article Article Article Article Article Article Article Article
      <br />
      <ButtonGroup>
        <Button
          variant='outlined'
          onClick={() => {
            setClick(true);
          }}
        >
          Create
        </Button>
        <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <Button variant='outlined'>Delete</Button>
      {/* 컨텐츠영역만밝게 표시가된다 */}
      <Dialog open={click}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>Text</DialogContent>
        <DialogActions>
          <Button variant='outlined'>Create</Button>
          <Button variant='outlined'>CANCLE</Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}
export default Home;
