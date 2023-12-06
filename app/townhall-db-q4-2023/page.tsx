import React from 'react'
import DetailEventView from '@/app/events/[slug]/views'

// Mock
import EVENTS from '@/_mock/_townhall-db-q4'

const DetailEvent = ({ params }: any) => {
  const { slug } = params

  const event = EVENTS
  
  return (
    <DetailEventView event={event} />
  )
}

export default DetailEvent