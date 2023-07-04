import React from 'react'

//assets
import QMark from '../assets/question-mark.png'

const Box = (props) => {
    const paths = props.paths

  return (
    <div className='text-white flex'>
      {paths.hasWorkContent ? (
      <div className='bg-gray-800 px-3 pt-2 pb-4 w-88  rounded-lg border-b-4 border-blue shadow-md shadow-red'>
        <p className='text-xxs text-semibold uppercase'>{paths.date}</p>
        <h3 className='font-extrabold'>{paths.head}</h3>
        <h4 className='font-semibold text-xs pb-3'>{paths.subhead}</h4>
        <ul className='list-disc'>
          {paths.body.map ((body,index) => (
            <li className='text-xs ml-4'>{paths.body[index]}</li>
          ))}
        </ul>
      </div>
      ) : (
      <div className='bg-gray-800 p-3 h-32 w-64 rounded-lg border-b-4 border-blue shadow-md shadow-red'>
        <h3 className='text-center text-lg font-extrabold'>{paths.head}</h3>
        <img className='w-12 h-12 mx-auto' src={ QMark } />
      </div>
      )}
    </div>
  )
}

export default Box