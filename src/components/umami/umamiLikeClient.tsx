'use client'   
import { useEffect,useState } from 'react'
import BLOG from '@/blog.config'
import React from 'react'
const umiId = BLOG.analytics.umamiConfig.websiteId;
const umiTime = Date.parse(new Date().toString());

const UmamiLikeClient = ({slug }:{slug:string}) => {
  
  const [sluglike,setSluglike]=useState(1);
  const [dianle, setDianle] = useState(false);
  const handleClick = () => {    setDianle(true);setSluglike( sluglike + 1)  };

    useEffect(() => {
    function umiTongji() {
      var umiToken = BLOG.analytics.umamiConfig.token
      const umiUrl2 = `https://umami.51xmi.com/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=event`;



      fetch(umiUrl2, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + umiToken,
          'Content-Type': 'application/json'
        }
      })      
      .then(res => res.json())
      .then(resdata => {
        const defumami = resdata.filter((x: { x: string; y: number }) => x.x === slug);
          setSluglike(defumami[0]?.y)
      });

    }
    umiTongji();
  }, [slug]);
  return (<div className=' mx-3 flex justify-center items-center '>

  <button onClick={handleClick} data-umami-event={slug}     
    className={`${dianle 
      ? 
      "shadow-[0_0_30px_10px_rgba(255,0,0,0.5)] bg-gradient-radial  from-red-500 to-transparent " 
      : 
      " "
    }
       text-white   rounded-full   inline-block 
    `}    
    >❤️
    </button>
    <div className=' inline-block' >    {sluglike}</div>
  </div>
  )
}
export default UmamiLikeClient
