import React from 'react';
import Navbar from '@/components/globals/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Info from '@/components/home/Info';
import Stats from '@/components/home/Stats';
import GetInTouch from '@/components/home/GetInTouch';
import Footer from '@/components/globals/Footer';

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Info />
      <Stats />
      <GetInTouch />
      <Footer />
    </main>
  )
}

export default page
