import React from 'react';
import styles from '@/css/home/Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.videoCont}>
                <video
                    src='/assets/heroVideo.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={styles.video}
                ></video>
            </div>
            <h1 className={styles.heading}>
                Powering Industries with Skilled Manpower
            </h1>
            <p className={styles.detail}>
                Zakriya connects businesses with skilled, verified professionals across multiple industries. We deliver reliable manpower solutions tailored to your specific needs.
            </p>
            <div className={styles.buttons}>
                <button className={styles.cta}>Let&apos;s Talk</button>
            </div>
        </div>
    )
}

export default Hero
