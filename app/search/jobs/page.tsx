
import SearchJobs from '@/components/searchPage/searchPage'
import React from 'react'

const SearchPage = () => {
  return (
    <div className=' w-full h-full py-10'>
    <div className=' max-w-7xl mx-auto h-full'>
      <SearchJobs/>
    </div>
    <div className=' flex flex-row gap-x-5'></div>
</div>
  )
}

export default SearchPage