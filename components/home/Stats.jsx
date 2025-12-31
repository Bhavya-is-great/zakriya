"use client";
import React, { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'
import styles from '@/css/home/Stats.module.css'

const stats = [
    { id: 1, value: 500, suffix: '+', label: 'Active Clients' },
    { id: 2, value: 5000, suffix: '+', label: 'Professionals Placed' },
    { id: 3, value: 10, suffix: '+', label: 'Industry Sectors' },
    { id: 4, value: 98, suffix: '%', label: 'Client Satisfaction' }
]

const Stats = () => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) observer.observe(ref.current)
    }, [])

    return (
        <section ref={ref} className={styles.wrapper} id='stats'>
            <div className={styles.grid}>
                {stats.map(item => (
                    <div key={item.id} className={styles.card}>
                        <h3 className={styles.value}>
                            {inView && (
                                <CountUp end={item.value} duration={2} />
                            )}
                            {item.suffix}
                        </h3>
                        <p className={styles.label}>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
