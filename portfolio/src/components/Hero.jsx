import React from 'react'
import { motion, useCycle } from 'framer-motion'
//assets
import Boy from '../assets/boy.png'
import Line from '../assets/line-segment.png'

function Hero() {

  const content = {
    header: "Hi, I'm ",
    name: "Matthew",
    subHeader: "An aspiring Software Engineer & Frontend Developer ",
    subHeader2 : "that is a highly dedicated, passionate and hardworking individual."
  }

  return (
    <div id='hero' className='bg-hero-bg bg-cover text-white py-4 pb-44 lg:pb-20' >
      <motion.div className='pt-2 relative mx-auto w-8/12 md:w-6/12'
        initial={{opacity:0, y: '-20vh'}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.2, type:'spring',bounce:0.3}}
      >
        <h3 className='text-4xl font-extrabold md:leading-relaxed'>
          {content.header}<span className='text-blue'>{content.name}</span>
        </h3>
        <p className='text-base font-semibold pt-3 md:pt-0'>{content.subHeader}{content.subHeader2}</p>
        <div className='absolute top-10 -left-24'>
          <img className='-rotate-45 h-40 gradient-to-b' src={ Line } />
        </div>
      </motion.div>
      <motion.div className='relative w-fit mx-auto mt-14 lg:mt-10 lg:mb-5 z-10'
        initial={{x:300, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{delay:0.3, duration:1.2, type:'spring', bounce:0.3}}       
      >
        <img className='w-72 sm:w-88 md:w-96 lg:w-110 mx-auto' src= { Boy } />
        <div className='absolute top-2 left-0 bg-white w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 lg:w-110 lg:h-110 -z-1 rounded-full'></div>
      </motion.div>
    </div>
  )
}

export default Hero