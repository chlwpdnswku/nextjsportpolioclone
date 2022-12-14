import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Home: NextPage = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </>
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
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Article
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
