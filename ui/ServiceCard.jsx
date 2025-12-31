import React from 'react'
import styles from '@/css/ui/ServiceCard.module.css'
import { FiArrowRight } from 'react-icons/fi'

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.name}>{title}</h3>
            <p className={styles.desc}>{description}</p>
            <div className={styles.link}>
                <span>Learn More</span>
                <FiArrowRight />
            </div>
        </div>
    )
}

export default ServiceCard
