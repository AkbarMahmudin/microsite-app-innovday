import { HeadingSkeleton, ParagrafSkeleton, TaglineSkeleton } from '@/components/custom/skeleton'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <section className="container min-w-full flex flex-col gap-4">
      <TaglineSkeleton className="mb-7" />

      <HeadingSkeleton className="w-1/2" />
      <ParagrafSkeleton />

      <div className='w-full grid grid-cols-2 gap-4'>
        {Array(4).fill(1).map((_, i) => (
          <Skeleton key={i} className='w-full h-60 rounded-md' />
        ))}
      </div>
    </section>
  )
}

export default Loading