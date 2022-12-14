import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <header>
        {' '}
        <h1>Welcom</h1>
      </header>
    </>
  );
};

function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
      </ol>
    </nav>
  );
}

export default Home;
