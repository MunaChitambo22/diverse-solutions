import { FEATURED_PROPERTIES } from '@/constants'
import React from 'react'

const FeaturedProperties = () => {
  return (
    <div className='flex flex-wrap'>
        {FEATURED_PROPERTIES.map((property, index) => (
            <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'></div>
        ))}
    </div>
  )
}

export default FeaturedProperties