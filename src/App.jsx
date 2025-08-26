import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/Hero/HeroSection"
import MarqueeSection from "./components/MarqueeSection/MarqueeSection"
import About from "./components/About/About"
import RecentWorks from "./components/RecentWorks/RecentWorks"
import Services from "./components/Services/Services"
import PricingSection from "./components/Pricing/PricingSection"
import Footer from "./components/Footer/Footer"
import "./App.css"
import React from "react"
import Background from "./Background/Background"



const App = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <About />
      <RecentWorks />
      <Services />
      <PricingSection />
      
      <Footer />
      

      
      

    </div>
  )
}

export default App
