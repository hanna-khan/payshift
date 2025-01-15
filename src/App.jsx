import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CardSection from './Components/CardSection'

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <CardSection />
    </div>
  )
}

export default App
