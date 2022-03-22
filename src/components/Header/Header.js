import React,{useState,useEffect} from 'react'
import './Header.css'
import {motion} from 'framer-motion'


function Header() {
    const arr1 = ['Do Web Development','Do App Development','Do Data Analytics','Want to make my own Crypto someday','make AI Models','MAKE ml MODELS','MAKE nlp MODELS'];
    const arrlen = arr1.length;
    const [val,setVal] = useState('lots of things like.....')
    const [count,setCount] = useState(0)
    const initialCount = 0;

    useEffect(()=>{
        setTimeout(()=>{
            setVal(arr1[count]);
            if(count == arrlen-1){
                setCount(initialCount);
            }else{
                setCount(count+1)
            }
        },1500)
    },[count])

  return (
    <div className='main'>
        <div className='Intro'>
        <motion.div animate={{ x: 0,y:0 }} transition={{ repeat:0,delay:1,type: "spring", stiffness: 100 }}>
        <h1>
            I am Archit Soni and I am a Computer Science and Information Technology Student.
        </h1>
        </motion.div>

        <h2>and I am a NERD</h2>
        <motion.div 
        // animate={{ x: 10,y:0 }} transition={{ repeat:99999,delay:3,type: "spring", stiffness: 100 }}
        >
        <h1 id='need'>
            Maybe just the Nerd you need
        </h1>
        </motion.div>
        <motion.div animate={{ x: 0,y:10 }} transition={{ repeat:0,delay:1,type: "spring", stiffness: 100 }}>
        <h1>I {val}</h1>
        </motion.div>
        </div>
    </div>
  )
}

export default Header