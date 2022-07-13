import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import rocketImg from '../public/images/rocket.png';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const Home: NextPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const closeVideoHandler = () => {
    setShowVideo(false);
  };

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
          <div className={styles.rocketHoverContainer}>
            <div className={styles.rocketHoverTarget}></div>
          </div>
          <div className={styles.rocketContainer}>
            <Image
              src={rocketImg}
              alt="Picture of a rocket"
              height={800}
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Transforming <b>society</b> and shaping<br></br>
            <b>progress</b> through collaboration.<br></br>
            <b>Inspiring</b>, <b>fascinating</b>, <b>impactful</b>,<br></br>
            pitches meet challenging questions.<br></br>
            Pitch your idea.<br></br>
            <b>Pitch the future!🔮</b>
          </p>
        </div>
        <Button
          css={{
            backgroundColor: '#d35b61',
          }}
          onClick={() => setShowVideo(true)}
        >
          Watch video
        </Button>

        <Modal
          // closeButton
          noPadding
          open={showVideo}
          onClose={closeVideoHandler}
        >
          <Modal.Body className={styles.videoContainer}>
            <video
              className={styles.video}
              controls
              autoPlay
              src="https://it.antonwy.tech/wp-content/uploads/2022/07/welcome.mp4"
            ></video>
          </Modal.Body>
        </Modal>

        <Spacer />
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
