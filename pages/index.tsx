import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const IndexPage = () => (
  <Layout title="DH-VIDEOS">
    <h1 className={styles.title}>DH-VIDEOS</h1>
    <div className={styles.card}>
      <p className={styles.description}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
