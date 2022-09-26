import React,{ useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'


import './About.scss'

// const abouts = [
//   { title: " Blockchain development", description: "I'm a good BlockChain Engineer", imgUrl: images.about01 },
//   { title: " web development", description: "I'm a fullStack web developer", imgUrl: images.about02 },
//   { title: " pharmacist", description: "I'm a seasoned medical practicioner", imgUrl: images.about03 },
//   { title: " circular life", description: "I'm a big fan of footBall", imgUrl: images.about04 }
// ]


const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
    .then((data)=> setAbouts(data))
  }, [])
  


  return (
    <>
      <h2 className='head-text'>
        Let's
        <br />
        <span> Break Free</span>
        <br />
        with
        <br />
        <span> Blockchain</span>
      </h2>

      <div className='app__profiles'>
          {abouts.map((about, index)=>(
            <motion.div 
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.item + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title}/>
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

            </motion.div>
         ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);