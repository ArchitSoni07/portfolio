import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { motion, useViewportScroll } from "framer-motion"
import Body from './components/Body/Body'
import React, {useState,useEffect,useRef} from 'react';
import video from './video.mp4'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import audio from './audio.mp3'

function App() {

  const [isLoading, setLoading] = useState(true);


  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {

    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);


  function goToTop(){
    window.scrollTo(0,0)
  }

  if (isLoading) {
    return null;
  }
  const Video = () => {
    return (
      <div className="container">
        <video autoPlay playsInline loop muted src={video} />
      </div>
    );
  };

  return (
    <div className="App">


      <div className="app-container">
        <Video />
      </div>

      <motion.div className='Header' animate={{ x: -100,y:200 }} transition={{ repeat:0,delay:0.3,type: "spring", stiffness: 100 }}>
      <Header />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='Body' >
      <Body />
      </motion.div>

      <div className='Footer'>
      {/* <Footer /> */}
      </div>

    </div>
  );
}

export default App;
