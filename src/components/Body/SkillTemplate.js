import React from 'react'
import './SkillTemplate.css'
function SkillTemplate(props) {
  return (
    <div className='main'>

          <div className='firstWrap'>
            <h1 id='heading'>{props.heading}</h1>
            <h1 id='heading2'>{props.heading2}</h1>
            <div className='secondWrap'>
            <p id='desc'>{props.desc}</p>
            <p id='desc2'>{props.desc2}</p>
            <ul id='list'>
                <li>{props.listadditional}</li>
                <li>{props.listadditional1}</li>
                <li>{props.listadditional2}</li>
                <li>{props.listadditional3}</li>
                <li>{props.listadditional4}</li>
            </ul> 
            <p id='ending'>{props.ending}</p>
            </div>
          </div>


    </div>
  )
}

export default SkillTemplate