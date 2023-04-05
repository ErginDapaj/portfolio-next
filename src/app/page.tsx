"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Header from './components/header';
import ContentTemp from './components/temp';
import Content from './components/content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from './components/loader';
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = Cookies.get('hasVisited');

    if (hasVisited) {
      setIsLoading(false);
    } else {
      Cookies.set('hasVisited', 'true', { expires: 1 });
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <Loader progress={0} />
      ) : (
        <>
          <Header />
          {/* <ContentTemp /> */}
          <Content />
        </>
      )}
    </main>
  );
}
