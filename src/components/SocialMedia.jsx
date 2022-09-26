import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a className='app__social' href="https://twitter.com/MChukwuneme" target='_blank'><BsTwitter /></a>
        </div>
        <div>
          <a className='app__social' href="https://facebook.com/martinchukwuneme" target='_blank'><FaFacebookF /></a>
        </div>
        <div>
          <a className='app__social' href="https://instagram.com/martinchukwuneme" target='_blank'><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia