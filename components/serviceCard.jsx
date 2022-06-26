import React from 'react'
import { AiFillCrown } from "react-icons/ai";


const ServiceCard = (prop) => {
  return (
    <div className='service-card-in-wrapper'>
      <div className='service-card-in-wrapper-container'>
          <h1>{prop.title}.</h1>
         <ul>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>It was popularised in the 1960s with the release of Letraset sheets</li>
          <li>publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
          <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
         </ul>
      </div>
    </div>
  )
}

export default ServiceCard