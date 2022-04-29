import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className='flex justify-center'>
      <div className={styles.container}>
        <Header />
        <Banner />
        {/* <Content /> */}
      </div>
    </div>

  )
}
