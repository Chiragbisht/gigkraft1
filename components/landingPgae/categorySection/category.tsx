import { montserrat } from '@/app/fonts/font'
import React from 'react'
import ServiceCards from './serviceCategories'



const Category = () => {
  return (
    <div className=' h-full py-12 flex flex-col max-w-7xl mx-auto items-center justify-start gap-y-6'>
        <h1 className={` text-[#2A1E17] ${montserrat.className} text-[32px] font-bold`}>Top skills categories</h1>
        <ServiceCards/>
    </div>
  )
}

export default Category