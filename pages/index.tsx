import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import rocketImg from '../public/images/rocket.png';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mandl Pitch</title>
        <meta name="description" content="Created by antonwy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.mandlTitle}>MANDL</h1>

        <div className={styles.pitchRocketContainer}>
          <h1 className={styles.pitchTitle}>Pitch</h1>
          <div className={styles.rocketContainer}>
            <Image
              src={rocketImg}
              alt="Picture of a rocket"
              height={800}
              objectFit="contain"
            />
          </div>
        </div>

        <p className={styles.description}>
          Transforming <b>society</b> and shaping<br></br>
          <b>progress</b> through collaboration.<br></br>
          <b>Inspiring</b>, <b>fascinating</b>, <b>impactful</b>,<br></br>
          pitches meet challenging questions.<br></br>
          Pitch your idea.<br></br>
          <b>Pitch the future!🔮</b>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>
          📍 Mandlstr. 11 · 📆 17. July 2022 · ⌚️ 18 Uhr · 🍔🥂 provided by us
        </p>
      </footer>
    </div>
  );
};

export default Home;
