import React from 'react'
import NewsLetterBox from '../components/NewsLetterBox'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Title from '../components/Title'
const Contact = () => {
  return (
    <div>
      <Title heading1='CONTACT' heading2='US'/>
      <ContactUs/>
      <NewsLetterBox/>
   
    </div>
  )
}

export default Contact