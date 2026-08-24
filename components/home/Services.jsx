"use client";
import React from 'react'
import styles from '@/css/home/Services.module.css'
import ServiceCard from '@/ui/ServiceCard'
import { FaBoxes, FaTh, FaTruckLoading, FaDatabase, FaGripHorizontal, FaTrash, FaCogs, FaTruck, FaUsers } from 'react-icons/fa'

const cards = [
  {
    id: 1,
    icon: <FaBoxes />,
    title: 'Jolly Service',
    description: 'Jolly Services in Bags Cargo'
  },
  {
    id: 2,
    icon: <FaTh />,
    title: 'Steel Net Service',
    description: 'Steel Net Service at Kandla Site (GI, SS, and MS Powder Coated Net Frames)'
  },
  {
    id: 3,
    icon: <FaTruckLoading />,
    title: 'Rack Loading & Unloading',
    description: 'Rack Loading & Unloading Liquid Cargo'
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: 'Storage Tank Cleaning',
    description: 'Storage Tank Clean Edible & Chemical'
  },
  {
    id: 5,
    icon: <FaGripHorizontal />,
    title: 'Steel Mesh Net Service',
    description: 'Steel Mesh Net Service'
  },
  {
    id: 6,
    icon: <FaTrash />,
    title: 'Heavy Sludge Removal',
    description: 'Heavy Sludge Removing'
  },
  {
    id: 7,
    icon: <FaCogs />,
    title: 'Crane Service',
    description: 'All Types of Crane Hiring & Lifting Solutions'
  },
  {
    id: 8,
    icon: <FaTruck />,
    title: 'Trailer Service',
    description: 'Trailer for Material, Equipment & Cargo Transportation'
  },
  {
    id: 9,
    icon: <FaUsers />,
    title: 'Manpower Services & Support',
    description: 'Complete Manpower Solutions for Your Business Needs'
  }
]

const Services = () => {
  const handleLearnMore = (title) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const event = new CustomEvent('prefill-service', { detail: { service: title } });
    window.dispatchEvent(event);
  };

  return (
    <section className={styles.wrapper} id='services'>
      <div className={styles.header}>
        <h4 className={styles.subtitle}>Complete Solutions | Reliable Partner</h4>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.text}>We provide specialized cargo, net, site, and manpower services tailored to your business needs.</p>
      </div>
      <div className={styles.grid}>
        {cards.map(item => (
          <ServiceCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onClick={() => handleLearnMore(item.title)}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
