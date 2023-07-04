import Line from '../assets/line.svg'
import InnerCircle from '../assets/innerCircle.png'
import OuterCircle from '../assets/outerCircle2.png'

const PathTree = () => {
    return(
        <>
          <img className='absolute -top-1 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-0 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-16 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-32 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-48 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-64 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-72 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-94 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-102 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-114 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <img className='absolute top-122 right-100 md-2: md-2:right-0 fill-white w-24' src = {Line}/>
          <div className='relative border border-transparent w-9 mx-auto mt-9'>
            <img className='absolute w-8 top-0 -left-99.5 md-2:left-0.5' src={OuterCircle} />
            <img className='absolute w-7 top-0.5 -left-99 md-2:left-1' src={InnerCircle} />
          </div>
          <div className='relative w-9 mx-auto mt-48'>
            <img className='absolute w-8 top-0 -left-99.5 md-2:left-0.5' src={OuterCircle} />
            <img className='absolute w-7 top-0.5 -left-99 md-2:left-1' src={InnerCircle} />
          </div>
          <div className='relative w-9 mx-auto mt-96'>
            <img className='absolute w-8 top-0 -left-99.5 md-2:left-0.5' src={OuterCircle} />
            <img className='absolute w-7 top-0.5 -left-99 md-2:left-1' src={InnerCircle} />
          </div>
          <div className='relative w-9 mx-auto mt-122'>
            <img className='absolute w-8 top-0 -left-99.5 md-2:left-0.5' src={OuterCircle} />
            <img className='absolute w-7 top-0.5 -left-99 md-2:left-1' src={InnerCircle} />
          </div>
        </>
    )
}

export default PathTree