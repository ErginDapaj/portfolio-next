import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/header';
import Content from './components/content'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <main className={styles.main}>
      <Header />
      <Content />
    </main>
  )
}
