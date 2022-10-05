import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sponsor from '../components/Sponsor'


function AboutView({isLabel, setIsLabel}) {

  return (
    <div>
   	<Navbar isLabel={isLabel} setIsLabel={setIsLabel} />
    <Sponsor />
    <h1>THIS IS THE ABOUT PAGE</h1>
    <Footer />

    </div>
  )
}

export default AboutView