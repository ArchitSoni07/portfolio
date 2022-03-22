import React,{useEffect} from 'react'
import './Skills.css'
import SkillTemplate from './SkillTemplate'
import {useInView} from 'react-intersection-observer'
import {motion,useAnimation} from 'framer-motion'

function Skills() {

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
    <motion.div 
      ref={ref} 
      animate = {animation}
      className='main'>

      <div className='ReactNext'>
        <SkillTemplate heading='React.js and NEXT.js' 
        desc="I have worked on both React and NEXT. I have good expreience in React with things like"
        listadditional="Redux"
        listadditional1="Material-UI"
        listadditional2="Tailwind CSS"
        listadditional3="Framer-Motion"
        listadditional4="Bootstrap"
        ending='Although I dont have much experience in NEXT but i can make it work'
        />
      </div>

      <div className='NEM'>
        <SkillTemplate heading="Node, Express and MongoDB"
        desc="I have good knowledge and some experience of Backend Development in Node, Express and MongoDB"
        />
      </div>

      <div
      className='MAD'>
        <SkillTemplate heading="Android Studio and React Native"
        desc="I have worked on Android Studio and React Native and I have a good experience on it"
        />
      </div>

      <div className='Web3BlockChain'>
        <SkillTemplate heading="Web3 and BlockChain"
        desc="I have coded BlockChains in Python and also used Ganache and Libraries like web3.js"
        desc2="This is a New Tech and there is still a lot to learn"
        />
      </div>

      <div className='EDA'>
        <SkillTemplate 
        heading="Exploratory Data Analysis"
        desc="I have performed EDA on many Data sets mostly from Kaggle"
        desc2="Refer to Projects Section for details"
        />
      </div>

      <div 
      className='MLAINLP'>
        <SkillTemplate 
        heading="ML, AI AND NLP MODELS"
        desc="I love making ML and AI models"
        desc2="I am still learning NLP...Its very trending right now"
        />
      </div>

      <div className='dockerAWS'>
        <SkillTemplate 
        heading='Docker and AWS'
        />
      </div>

    </motion.div>
  )
}

export default Skills