import React, { useEffect, useRef,useState } from 'react'
import { spring, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Card = (props) => {

  const {ref, inView} = useInView(
    {threshold:0.2}
  )
  const animation = useAnimation()
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect (() => {
    if(inView) {
      animation.start({
        opacity:1, x:0,
        transition: {
          delay: 0.5, duration:2.4, type:'spring', bounce:0.5
        }
      })
    }
  },[animation, inView, animationTriggered])


  const cardContent = props.cardContent

  return(
    <motion.div ref={ref} className="sm:flex sm:justify-start"
      initial={{opacity:0, x:150}}
      animate={animation}
    >
      {cardContent.map((card, index) => (
        <div className="sm:mr-8 bg-gradient-to-b from-red to-blue  rounded-xl shadow-lg shadow-red py-0.5 sm:py-0 mb-6 sm:mb-0" >
          <div className="h-19/20 w-19/20 rounded-xl px-5 py-8 mx-auto mt-1 bg-gray-800" >
            <img className="min-w-xs max-h-10 mx-auto" src={card.url} />
            <h3 className="font-semibold mt-5 text-center">{card.name}</h3>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default Card