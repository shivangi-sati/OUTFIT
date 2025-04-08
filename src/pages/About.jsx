import React from 'react'
import NewsLetterBox from '../components/NewsLetterBox'
import Footer from '../components/Footer'
import Title from '../components/Title'
import AboutUs from '../components/AboutUs'
const About = () => {
  return (
    <div>
      <Title heading1='ABOUT' heading2='US'/>
      <AboutUs/>
      
      <NewsLetterBox/>
      
      
      </div>
  )
}

export default About