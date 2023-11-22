import React from 'react'

// copywrite
import { event } from '@/_mock/copywriting'
import { CardItem } from '@/components/custom/card'

const cp = event

const Events = () => cp.events.map((event, index) => (
  <CardItem
    key={index}
    {...event}
  />
))

const EventList = () => {
  return (
    <section className='container min-w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-start'>
      <Events />
    </section>
  )
}

export default EventList