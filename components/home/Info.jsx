import React from 'react';
import Image from 'next/image';
import styles from '@/css/home/Info.module.css';
import infoImg from '@/assets/infoimg1.jpeg'

const Info = () => {
    return (
        <section className={styles.wrapper} id='info'>
            <div className={styles.grid}>

                <div className={styles.imageBox}>
                    <Image
                        src={infoImg}
                        alt="Zakriya workforce team"
                        className={styles.image}
                        width={900}
                        height={600}
                        priority
                    />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>Trusted Workforce Partners</h2>
                    <p className={styles.text}>
                        We provide reliable, trained, and safety-certified manpower
                        for industrial, construction, and project-based operations.
                        Our teams are selected through a rigorous screening and
                        skill-verification process to ensure performance on site.
                    </p>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            Safety-trained and industry-experienced workforce
                        </li>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            On-site discipline and operational readiness
                        </li>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            Flexible deployment based on project needs
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Info
