"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '@/css/globals/WhatsAppButton.module.css';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919586090092"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.float}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className={styles.icon} />
        </a>
    );
};

export default WhatsAppButton;
