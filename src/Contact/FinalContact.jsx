import React from 'react'
import TopBanner from './Topbanner'
import ContactForm from './ContactForm'
import Expect from './eXPECT.JSX'
import FAQ from "../Services/Faqs"

const FinalContact = () => {
  return (
    <div>
        <TopBanner/>
        <ContactForm/>
        <Expect/>
        <FAQ/>
    </div>
  )
}

export default FinalContact