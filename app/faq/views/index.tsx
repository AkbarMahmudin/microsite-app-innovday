import { Breadcrumbs } from '@/components/custom/breadcrumbs'
import React from 'react'
import { FAQList } from '../sections'

// copywrite
import { faqs } from "@/_mock/copywriting"

const FAQView = () => {
  return (
    <>
      <Breadcrumbs
        links={faqs.breadcrumbs}
        className='container pb-0'
      />
      <FAQList {...faqs} />
    </>
  )
}

export default FAQView