import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Nav></Nav>
      <Article></Article>
    </>
  );
};
function Header() {
  return (
    <nav>
      <ol>
        <li></li>
        <li>css</li>
      </ol>
    </nav>
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
