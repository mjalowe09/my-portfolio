//assets
import Facebook from '../assets/facebook.png'
import Github from '../assets/github.png'
import Discord from '../assets/discord.png'
import LinkedIn from '../assets/linkedin.png'
import Pinterest from '../assets/pinterest.png'
import { useCycle } from 'framer-motion'
import { motion } from 'framer-motion'

const Contact = () => {

    const [ animationState, cycleAnimation ] = useCycle("up","down")

    return(
        <>
        <div id='contacts' className="text-white bg-black pb-28">
            <div className="md:w-750 mx-auto md:flex ">
                <motion.form className="bg-black py-5 px-3 border-b-4 border-blue rounded-lg w-80 sm:w-fit shadow-lg shadow-red mx-auto lg:mx-0"
                    initial="down"
                    animate={animationState}
                    variants={{
                        up: { y: -5 },
                        down: { y: 5 },
                    }}
                    transition={{ 
                    duration: 0.5,
                    }}
                    onAnimationComplete={cycleAnimation}
                >
                    <p className="text-xxs font-semibold">GET IN TOUCH</p>
                    <h3 className="text-3xl font-extrabold pb-6">Contact me</h3>
                    <label className="text-xs font-bold">Your Name</label><br/>
                    <input className="w-full sm:w-72 rounded-sm pl-4 py-1.5 text-sm text-gray-800 mb-3" type="text" /><br/>
                    <label className="text-xs font-bold pb-1">Your Email</label><br/>
                    <input className="w-full sm:w-72 rounded-sm pl-4 py-1.5 text-sm text-gray-800 mb-3" type="text"/><br/>
                    <label className="text-xs font-bold">Your Message</label><br/>
                    <input className="w-full sm:w-72 h-32 pl-4 mb-4 rounded-sm text-sm text-gray-800" type='text'/><br />
                    <button className="text-xs font-bold p-1 rounded-md shadow-md shadow-red active:shadow-sm active:shadow-red ">
                        Submit</button>
                </motion.form>
                <div className="pt-3 md:pt-0 w-80 mx-auto my-auto">
                    <div className='py-5 px-3 rounded-lg'>
                        <p className="text-xxs  text-center md:text-left font-semibold">YOU CAN ALSO KEEP IN TOUCH WITH ME HERE</p>
                        <h3 className="text-3xl text-center md:text-left font-extrabold pb-6">Social Media</h3>
                        <ul className="flex justify-between my-auto">
                            <li>
                                <a href='https://www.discord.com'><img className='w-12' src={Discord} /></a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/matthewjalowe.macaranas/'><img className='w-12' src={Facebook} /></a>
                            </li>
                            <li>
                                <a href='https://github.com/mjalowe09'><img className='w-12' src={Github} /></a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/matthew-macaranas-a249a3276/'><img className='w-12' src={LinkedIn} /></a>
                            </li>
                            <li>
                                <a href='https://www.Pinterest.com'><img className='w-12' src={Pinterest} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}
export default Contact