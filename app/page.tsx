import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      你好，江夏！
      <Link href="/posts">posts</Link>
    </main>
  )
}
