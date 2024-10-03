import React from 'react'
import Navbar from '../components/Home/Navbar'
import HeroSection from '../components/Home/HeroSection'
import WatchCollection from '../components/Home/WatchSection'

function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <WatchCollection />
    </div>
  )
}

export default Home
