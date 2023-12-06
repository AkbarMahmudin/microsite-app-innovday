import React from 'react'

// copywrite
import * as copywrite from '@/_mock/copywriting'
import { EventCodeForm } from '../sections';
import { Breadcrumbs } from '@/components/custom/breadcrumbs';

const InternalView = () => {
  const cp: any = copywrite.internalEvent;

  return (
    <>
      <Breadcrumbs links={cp.breadcrumbs} className='container min-w-full bg-transparent' />
      <EventCodeForm {...cp} />
    </>
  )
}

export default InternalView