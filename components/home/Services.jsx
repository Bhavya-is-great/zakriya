import React from 'react'
import styles from '@/css/home/Services.module.css'
import ServiceCard from '@/ui/ServiceCard'
import { FaHardHat, FaIndustry, FaHotel, FaLaptopCode, FaUserMd, FaTruck } from 'react-icons/fa'

const cards = [
  {
    id: 1,
    icon: <FaHardHat />,
    title: 'Construction & Civil Works',
    description: 'Skilled laborers, engineers, and supervisors for construction projects'
  },
  {
    id: 2,
    icon: <FaIndustry />,
    title: 'Industrial & Manufacturing',
    description: 'Trained workforce for factories, plants, and manufacturing units'
  },
  {
    id: 3,
    icon: <FaHotel />,
    title: 'Hospitality & Services',
    description: 'Professional staff for hotels, restaurants, and service industries'
  },
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: 'IT & Technical Support',
    description: 'Qualified IT professionals and technical support specialists'
  },
  {
    id: 5,
    icon: <FaUserMd />,
    title: 'Healthcare & Medical',
    description: 'Medical professionals and healthcare support staff'
  },
  {
    id: 6,
    icon: <FaTruck />,
    title: 'Logistics & Transportation',
    description: 'Experienced drivers and logistics professionals'
  }
]

const Services = () => {
  return (
    <section className={styles.wrapper} id='services'>
      <div className={styles.header}>
        <h4 className={styles.subtitle}>Our Services</h4>
        <h2 className={styles.title}>Industry-Specific Solutions</h2>
        <p className={styles.text}>We specialize in providing skilled workforce across diverse sectors</p>
      </div>
      <div className={styles.grid}>
        {cards.map(item => (
          <ServiceCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
