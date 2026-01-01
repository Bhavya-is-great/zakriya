"use client";
import React, { useState } from 'react';
import styles from '@/css/globals/Navbar.module.css';
import Image from 'next/image';
import iconBlack from '@/assets/iconBlack.png';
import { MdSunny } from "react-icons/md";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setOpen(false);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={iconBlack} className={styles.logoImg} alt='Zakriya Logo'></Image>
                <p className={styles.logoText}>
                    <span>Zakriya &</span>
                    <span>Sons</span>
                </p>
            </div>
            <div className={`${styles.items} ${open ? styles.open : ''}`}>
                <div className={styles.item} onClick={() => handleScroll("home")}>Home</div>
                <div className={styles.item} onClick={() => handleScroll("about")}>About</div>
                <div className={styles.item} onClick={() => handleScroll("services")}>Services</div>
                <div className={styles.item} onClick={() => handleScroll("info")}>Info</div>
                <div className={styles.item} onClick={() => handleScroll("stats")}>Stats</div>
                <div className={styles.item} onClick={() => handleScroll("contact")}>Contact</div>
            </div>

            <div className={`${styles.hamburger} ${open ? styles.close : ''}`} onClick={() => { setOpen(!open) }}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </nav>
    )
}

export default Navbar
