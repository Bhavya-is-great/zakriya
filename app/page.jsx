import React from 'react';
import Navbar from '@/components/globals/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default page
