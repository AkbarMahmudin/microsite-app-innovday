import React from 'react'
import { Description, EventList } from './sections'

const Events = () => {
  return (
    <main className="py-24 flex flex-col gap-5">
      <Description />
      <EventList />
    </main>
  )
}

export default Events