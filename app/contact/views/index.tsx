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
      {/* <div className='min-w-full md:container md:flex md:items-center'> */}
      <div className='md:mx-28 relative justify-end'>
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  )
}

export default ContactView