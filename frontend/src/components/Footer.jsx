import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex  justify-center  mt-6 pt-10 border-t-2 border-[#000000] items-center'>
    <div className='flex mx-2 md:w-[60%] flex-col gap-y-4 items-start  justify-start'>
        <div className='flex justify-start gap-2'>
          <div><BsFacebook/></div>
          <div><BsInstagram/></div>
          <div><BsTwitter/></div>
          <div><BsYoutube/></div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div>
            <div>Audio Description</div>
            <div>Investor Relations</div>
            <div>Legal Notices</div>
          </div>
          <div>
            <div>Help Centre</div>
            <div>Jobs</div>
            <div>Cookie Preferences</div>
          </div>
          <div>
            <div>Gift Cards</div>
            <div>Terms of Use</div>
            <div>Corporate Information</div>
          </div>
          <div>
            <div>Media Centre</div>
            <div>Privacy</div>
            <div>Contact Us</div>
        </div>
        </div>
        <div>
          &copy;1997-2025 Flixplore, inc
        </div>
</div>
  </div>
  )
}

export default Footer