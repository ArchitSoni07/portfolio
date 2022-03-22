import React,{useEffect} from 'react'
import Skills from './Skills'
import './Body.css'
import Projects from './Projects'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Experience from './Experience'

function Body() {


  const {ref,inView} = useInView()
  const animation = useAnimation()

  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:'spring',
          duration:1.5,
          bounce:0.2
        }
      })
    }
    if(!inView){
      animation.start({x:'-100vw'})
    }
  },[inView])
  return (
    <div className='main'>

      <div className='Heading'>
      <h1>Technical Skills in my possession</h1>
      </div>

      <motion.div ref={ref} 
      animate = {animation}
      className='Skills'>
      <Skills />
      </motion.div>

    <div className='headingProjects'>
    <h1>Projects that I made ( no cap )</h1>
    </div>
    
      <div
      className='Projects'>
        <Projects />
      </div>

    <div className='expHeading'>
      <h1 id='expHeading'>Experiences</h1>
    </div>
      <div className='Experience'>
        <Experience />
      </div>

    </div>
  )
}

export default Body