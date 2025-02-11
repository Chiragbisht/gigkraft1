import React from 'react'
import FreelancerProfileCard from './profileCard/feelancerProfile'
import Portfolio from './portfolio/portfolio'
import Reviews from './reviews/reviews'
import Experience from './experience/experience'
import Education from './education/education'
import Verfication from './verification/verfication'
import Skills from './skills/skills'

const Profile = () => {
  return (
    <div className='max-w-7xl mx-auto w-full flex justify-center'>
      <div className='flex xl:flex-row flex-col gap-x-5 gap-y-5'>
        <div className='flex flex-col gap-y-6'>
          <FreelancerProfileCard />
          <Portfolio />
          <Reviews />
          <Experience />
          <Education />
        </div>
        <div className='lg:flex hidden flex-col gap-y-6'>
          <Verfication />
          <Skills/>
        </div>
      </div>
    </div>
  )
}

export default Profile
