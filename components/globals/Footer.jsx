"use client";
import React from 'react'
import styles from '@/css/globals/Footer.module.css'

const Footer = () => {

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };


    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>

                <div className={styles.grid}>

                    <div className={styles.brand}>
                        <h2 className={styles.logo}>Zakriya & Sons</h2>
                        <p className={styles.desc}>
                            Connecting businesses with skilled, reliable and industry-ready workforce across global sectors.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.heading}>Company</h3>
                        <ul className={styles.list}>
                            <li onClick={()=>{handleScroll('about')}}>About Us</li>
                            <li onClick={()=>{handleScroll('services')}}>Our Services</li>
                            <li onClick={()=>{handleScroll('info')}}>Info</li>
                            <li onClick={()=>{handleScroll('contact')}}>Contact</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.heading}>Get In Touch</h3>
                        <ul className={styles.list}>
                            <li>Kutch, Gujarat, India</li>
                            <li>+91-00000 00000</li>
                            <li>info@zakriya.com</li>
                        </ul>
                    </div>

                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Zakriya — All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
