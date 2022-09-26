import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper/'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1]}}
      transition={{ duration: 0.5 }}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='app__flex badge-cmp'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'> Hello I'm</p>
              <h1 className='head-text'>MARTONYX</h1>
            </div>
          </div>

          <div className='app__flex tag-cmp'>
          <p className='p-text'> blockchain engineer</p>
          <p className='p-text'> Pharmacist</p> 
          </div>
        </div>

      </motion.div>
      <motion.div 
      whileInView={{ opacity: [0, 1]}}
      transition={{ duration: 0.5, delayChildren: 0.5}}
      className='app__header-img'
      >
        <img src={images.profile2} alt="profile_png"/>
        <motion.img 
        whileInView={{scale: [0, 1]}}
        transition={{ duration: 1, ease: 'easeInOut'}}
        className='overlay_circle'
        src={images.circle} alt="profile_circle"
        />
      </motion.div>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circle'
      >
        {[images.nextjs, images.solidity, images.ethersjs].map((circle, index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')