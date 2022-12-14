import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';

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
  return (
    <article style={{ border: '1px solid gray' }}>
      <h2>Welcome</h2>
      Article Article Article Article Article Article v Article Article Article
      Article Article Article Article Article Article Article Article Article
      <br />
      <ButtonGroup>
        {' '}
        <Button variant='outlined'>Create</Button>
        <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <Button variant='outlined'>Delete</Button>
    </article>
  );
}
export default Home;
