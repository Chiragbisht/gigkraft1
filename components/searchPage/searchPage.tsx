import React from 'react'
import SearchBar from './searchBar/searchBar'
import { FiltersSidebar } from './filters/filters'
import SearchedJobs from './searchedResults/searchedJobs'

const SearchJobs = () => {
  return (
    <div className=' flex flex-col gap-y-5 lg:px-0 px-3'>
        <SearchBar />
        <div className=' flex flex-row gap-x-5 w-full mx-auto'>
            <FiltersSidebar />
            <SearchedJobs/>
        </div>
    </div>
  )
}

export default SearchJobs