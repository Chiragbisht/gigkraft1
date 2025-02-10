import React from 'react'
import FreelancerProfileCard from './profileCard/feelancerProfile'
import Portfolio from './portfolio/portfolio'
import Reviews from './reviews/reviews'
import Experience from './experience/experience'
import Education from './education/education'
import Verfication from './verification/verfication'

const Profile = () => {
  return (
    <div className=' max-w-7xl flex flex-row gap-x-5 '>
        <div className='flex flex-col gap-y-6'>
            <FreelancerProfileCard/>
            <Portfolio/>
            <Reviews/>
            <Experience/>
            <Education/>
        </div>
        <div className=' flex flex-col gap-y-6'>
            <Verfication/>
        </div>
        
    </div> 
  )
}

export default Profile