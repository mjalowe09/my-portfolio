import React, { useEffect, useState } from 'react'
import PathTree  from'../components/PathTree'
import { spring, useAnimation, motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer' 

//component
import Box from './Box'
function Path() {

  const {ref, inView} = useInView(
  {threshold:0.4}, {once:true}
  )
  const animation = useAnimation()
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect (() => {
    if(inView) {
      animation.start({
        opacity:1, y:0,once:true,
        transition: {
          delay: 0, duration:1.8, type:'spring', bounce:0.5
        }
      })
      setAnimationTriggered(true)
    }
  },[animation, inView, animationTriggered])
  
  const content ={
    intro: "WHAT HAVE I DONE SO FAR",
    head: "My Path",
  }
  const paths = [
    {
      head: "Internship",
      subhead: "Toyota North Edsa - Servce Center",
      body:[
        "Maintains the integrity of all computers","Maintains the cleanliness of all computers",
        "Daily checkup on all hardwares",
      ],
      hasWorkContent:true,
      date:"February 6, 2023 - April 30, 2023"
    },
    {
      head:"College",
      subhead: "University of Santo Tomas",
      body:[
        "Bachelor of Science in Computer Science",
        "Dean's Lister (2nd Year 2nd Sem, 4th Year 1st Sem, 4th Year 2nd Sem)",
        "CodeSprint 2021 Champion"
      ],
      hasWorkContent:true,
      date:"August 19, 2019 - June 30, 2023"
    },
    {
      head:"Senior High School",
      subhead: "University of Santo Tomas",
      body:[
        "Science, Technology, Engineering and Math Strand (STEM)",

      ],
      hasWorkContent:true,
      date:"August 2017 - June 2019"
    }
  ]

  return (
    <div ref={ref} className=' text-white bg-black w-full'>
      <motion.div initial={{ opacity:0, y:-80,}} animate={animation}>
        <div className='w-full sm:w-10/12 md:w-9/12 mx-auto'>
          <div className='w-10/12 sm:w-full mx-auto'>
            <p className='text-xxs font-semibold pt-10'>{content.intro}</p>
            <h3 className='text-3xl font-extrabold '>{content.head}</h3>
          </div>
        </div>
        <div className='relative  h-600 w-900  mx-auto'>
          <div className='relative h-20 w-24 mx-auto'>
            <PathTree />
          </div>
          {/* Box1 */}
          <div className='absolute top-0 left-22 md-2:left-32'>
            <Box  paths={paths[0]}/>
          </div>
          {/* Box2 */}
          <div className='absolute top-49 right-133 md-2:right-32'>
            <Box  paths={paths[1]}/>
          </div>
          {/* Box3 */}
          <div className='absolute top-97 left-22 md-2:left-32'>
            <Box  paths={paths[2]}/>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Path