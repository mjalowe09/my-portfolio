//assets
import HTML from '../assets/html_logo.png'
import CSS from '../assets/css_logo.png'
import JS from '../assets/js_logo2.png'
import React from '../assets/react.png'
import Mongo from '../assets/backend.png'
import Node from '../assets/node_logo.png'
import Java from '../assets/java_logo.png'
import Python from '../assets/python_Logo.png'
import Figma from '../assets/figma_logo.png'
import Adobe from '../assets/adobe_logo.png'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, spring, useAnimation} from 'framer-motion'


const Skills = () => {
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
			  delay: 0, duration:2.4, type:'spring', bounce:0.5
			}
		  })
		}
	  },[animation, inView, animationTriggered])
	  
	return(
		<div className="bg-black text-white">
			<motion.div ref={ref} 
				initial={{opacity:0, x:100 }}
				animate={animation}
			>
				<div className='w-9/12 md:w-8/12 pb-14 mx-auto '>
					<div className='grid gap-y-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
						{/* HTML5 */}
						<div className='col-span-1 w-19 h-19 bg-white py-1.5 p-1 rounded-full  mx-auto shadow-md shadow-red'>
							<img src={ HTML }/>
						</div>
						{/* CSS */}
						<div className='col-span-1 w-18 h-fit bg-white py-1 px-3 rounded-full  mx-auto shadow-md shadow-blue'>
							<img src={ CSS }/>
						</div>
						{/* Javascript */}
						<div className='col-span-1 w-20 h-20  bg-white py-1 px-2 rounded-full  mx-auto shadow-md shadow-red'>
							<img src={ JS }/>
						</div>
						{/* React */}
						<div className='col-span-1 w-20 h-20 bg-white p-1 py-2 rounded-full  mx-auto shadow-md shadow-blue'>
							<img src={ React }/>
						</div>
						{/* MongoDB */}
						<div className='col-span-1 w-18 h-20 bg-white p-1 px-2 rounded-full  mx-auto shadow-md shadow-red'>
							<img src={ Mongo }/>
						</div>
						{/* Node */}
						<div className='col-span-1 w-18 h-fit bg-white p-2 rounded-full  mx-auto shadow-md shadow-blue'>
							<img src={ Node }/>
						</div>
						{/* Java */}
						<div className='col-span-1 w-20 h-fit bg-white p-2  rounded-full  mx-auto shadow-md shadow-red'>
							<img src={ Java }/>
						</div>
						{/* Python */}
						<div className='col-span-1 w-20 h-fit bg-white p-2  rounded-full  mx-auto shadow-md shadow-blue'>
							<img src={ Python }/>
						</div>
							{/* Figma */}
						<div className='col-span-1 w-20 h-20 bg-white p-2  rounded-full  mx-auto shadow-md shadow-red'>
							<img className='w-10 mx-auto' src={ Figma }/>
						</div>
						{/* Photoshop */}
						<div className='col-span-1 w-fit h-fit bg-white  rounded-full  mx-auto shadow-md shadow-blue'>
							<img className='w-20 h-20 my-auto' src={ Adobe }/>
						</div>
					</div>	
				</div>
			</motion.div>
		</div>
		
	)
}

export default Skills	