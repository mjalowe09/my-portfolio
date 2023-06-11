import React, { useEffect, useRef, useState } from 'react'
import { spring, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
//Component
import Card from './Card'


function Overview() {

  const {ref, inView} = useInView(
    {threshold:0.1}
  )
  const animation = useAnimation()
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect (() => {
    if(inView) {
      animation.start({
        opacity:1, x:0,
        transition: {
          duration:2.4, type:'spring', bounce:0.5
        }
      })
    }
    setAnimationTriggered(true)
  },[animation, inView, animationTriggered])
  
  const content = {
    intro: 'INTRODUCTION',
    overview: 'Overview',
    body: "My name is Matthew Macaranas, a fresh graduate of Bachelor of Science in Computer Science - Major in Core Computer Science in University of Santo Tomas. I'm a hardworking and highly"+ 
    " dedicated individual with a focus on computer science especially in web development. With a strong "+
    "academic foundation and a passion for technology, I'm equipped with the knowledge and skills to "+
    "develop and innovate software development."
  }

  const cardContent = [
    {name:'Web Development',url:'/src/assets/frontend.png'},
    {name:'React Development',url:'/src/assets/react.png'},
    {name:'Backend Development',url:'/src/assets/backend.png'}
  ]


  return (
    <div id='about' className='bg-black text-white pt-10 pb-5 md:pb-14 '>
      <div className=' w-full sm:w-10/12 md:w-9/12 mx-auto'>
        <motion.div ref={ref}  className='w-10/12 sm:w-full mx-auto '
          initial={{opacity:0, x:-150}}
          animate={animation}
        >
          <p className='text-xxs'>{content.intro}</p>
          <h3 className='text-3xl font-extrabold mb-3 '>{content.overview}</h3>
          <p className='text-sm leading-5'>{content.body}</p>
        </motion.div>
      </div>
      <div className=' w-10/12 md:w-9/12 mx-auto mt-10'>
        <Card cardContent={cardContent}/>
      </div>
    </div>
  )
}

export default Overview