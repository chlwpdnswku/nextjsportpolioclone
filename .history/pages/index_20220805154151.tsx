import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Header>
      <Nav></Nav>
      <Article></Article>
    </Header>
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
      Helol Web
    </article>
  );
}
export default Home;
