import React from 'react';
import styles from '@/css/home/about.module.css';
import Card from '@/ui/Card';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";

const About = () => {

    const Cards = [
        {
            icon: <IoMdCheckmarkCircleOutline />,
            title: 'Verified Work space',
            detail: 'All candidates are thourghly vetted and Background Checked',
        },
        {
            icon: <MdPeopleAlt />,
            title: 'Quick Developement',
            detail: 'Fast Placement within 24-28 hours of requirement',
        },
        {
            icon: <FaSuitcase />,
            title: 'Professional Management',
            detail: 'Dedicated Account managers for seamless Coordination',
        },
    ];

    return (
        <section className={styles.about} id='about'>
            <div className={styles.head}>
                <h1 className={styles.heading}>
                    Why Choose Zakriya?
                </h1>
                <p className={styles.text}>We provide comprehensive manpower solutions to industries with a focus on quality, reliability and customer satisfaction.</p>
            </div>
            <div className={styles.cards}>
                {
                    Cards.map((ele, i)=>{
                        return (
                            <Card icon={ele.icon} title={ele.title} detail={ele.detail} key={i}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default About;