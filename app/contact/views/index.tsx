import React from 'react'
import { ContactForm, ContactInfo } from '../sections'
import { Breadcrumbs } from '@/components/custom/breadcrumbs'

const ContactView = () => {
  return (
    <>
      <Breadcrumbs 
        links={[
          {
            name: 'Home',
            url: '/'
          },
          {
            name: 'Contact',
            url: '/contact'
          }
        ]}
        className='px-2 pt-4 md:pb-0 md:container'
      />
      <div className='lg:mx-28 relative justify-end'>
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  )
}

export default ContactView