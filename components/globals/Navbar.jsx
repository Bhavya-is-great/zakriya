"use client";
import React, { useState } from 'react';
import styles from '@/css/globals/Navbar.module.css';
import Image from 'next/image';
import iconBlack from '@/assets/iconBlack.png';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={iconBlack} className={styles.logoImg} alt='Zakriya Logo'></Image>
            </div>
            <div className={`${styles.items} ${open ? styles.open : ''}`}>
                <div className={styles.item}>Home</div>
                <div className={styles.item}>About</div>
                <div className={styles.item}>Services</div>
                <div className={styles.item}>Testimonials</div>
                <div className={styles.item}>Contact</div>
            </div>
            <div className={`${styles.hamburger} ${open ? styles.close : ''}`} onClick={()=>{setOpen(!open)}}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </nav>
    )
}

export default Navbar
