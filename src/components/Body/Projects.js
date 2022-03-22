import React,{useEffect} from 'react'
import './Projects.css'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

function Projects() {
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
      animation.start({x:'100vw'})
    }
  },[inView])
  return (
    <motion.div 
    ref={ref} 
      animate = {animation}
    className='main'>
        
        <div className='main1'>
            <h2 id="heading">MRDB WEB APP</h2>
            <p id='desc'>IMDB like web app based on TMDB API</p>
            <p id="desc2">Made in NEXT.JS and Tailwind CSS</p>
            <a href='https://mrdb.vercel.app/'>Click Here to Visit</a>
            
        </div>

        <div className='main1'>
            <h2 id="heading">Wallet for CryptoCurrency Transaction</h2>
            <p id='desc'>Wallet for transaction of fake ethers through MetaMask and a testing blockchain of GANACHE software</p>
            <a href='https://faucet-architsoni07.vercel.app/'>Click Here to Visit</a>
        </div>

        <div className='main1'>
            <h2 id="heading">Saakar Construction</h2>
            <p id='desc'>I worked on this website on react and added some animations while i was doing my internship</p>
            <a href='https://faucet-architsoni07.vercel.app/'>Click Here to Visit</a>
        </div>

        

    </motion.div>
  )
}

export default Projects