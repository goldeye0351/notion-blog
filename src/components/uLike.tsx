'use client'   
import { useState } from 'react'
import React from 'react'

const ULike = ({slug,ulike=1}:{slug:string,ulike:number}) => {

  const [sluglike,setSluglike]=useState(ulike);
  const [dianle, setDianle] = useState(false);
  const handleClick = () => {    setDianle(true);setSluglike( sluglike + 1)  };

  return (<div className=' flex flex-row space-x-3 mx-3 '>

  <button onClick={handleClick} data-umami-event={slug}     
    className={`${dianle 
      ? 
      "shadow-[0_0_30px_10px_rgba(255,0,0,0.5)] bg-gradient-radial  from-red-500 to-transparent " 
      : 
      " "
    }
       text-white   rounded-full   inline-block 
    `}    
    >❤️</button>
    <div className=' inline-block '>{sluglike}</div>
  </div>
  )
}
export default ULike
