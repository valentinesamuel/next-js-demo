import { Inter } from 'next/font/google'
import Friends from './friends/page'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hi there</p>
      <Link href="friends">Meet friends here</Link>
    </main>
  )
}
