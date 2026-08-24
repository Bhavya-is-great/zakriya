import React from 'react';
import Image from 'next/image';
import styles from '@/css/home/Info.module.css';
import manpowerImg from '@/assets/Manpower.jpg.jpeg'

const Info = () => {
    return (
        <section className={styles.wrapper} id='info'>
            <div className={styles.grid}>

                <div className={styles.imageBox}>
                    <Image
                        src={manpowerImg}
                        alt="Zakriya manpower services team"
                        className={styles.image}
                        width={900}
                        height={600}
                        priority
                    />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>Manpower Services & Support</h2>
                    <p className={styles.text}>
                        Complete Manpower Solutions for Your Business Needs. We supply qualified, disciplined, and safety-trained personnel to keep your industrial and site operations running smoothly.
                    </p>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            Skilled, Semi-Skilled & Unskilled Manpower
                        </li>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            Housekeeping & Cleaning Services
                        </li>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            Maintenance Services
                        </li>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            Support Staff Supply
                        </li>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            General Support Services
                        </li>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            Safety Compliant & Trained Staff
                        </li>
                        <li className={styles.item}>
                            <span className={styles.bullet}></span>
                            24/7 Support & On-Time Deployment
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Info
