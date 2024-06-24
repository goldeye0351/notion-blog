'use client'   
import { useEffect,useState } from 'react'
import BLOG from '@/blog.config'
import React from 'react'
const umiId = BLOG.analytics.umamiConfig.websiteId;
const umiTime = Date.parse(new Date().toString());

const UmamiViewClient = ({slug,showview = true }:{slug:string,showview:boolean}) => {
    const [slugview,setSlugview] =useState(1);
    useEffect(() => {
    function umiTongji() {
      var umiToken = BLOG.analytics.umamiConfig.token
      const umiUrl = `https://umami.51xmi.com/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=url`;

      fetch(umiUrl, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + umiToken,
          'Content-Type': 'application/json'
        }
      })      
      .then(res => res.json())
      .then(resdata => {
        const defumami = resdata.filter((x: { x: string; y: number }) => x.x.substring(1) === slug);
          setSlugview(defumami[0]?.y)
      });
    }
    umiTongji();
  }, [slug]);
  return (<div className=' mx-3 flex items-center justify-center flex-nowrap'>
 {showview ? 
 <>
  <div id="slugview" className=' inline-block '>  👁️  </div> 
  <div id="slugview1" className=' inline-block '>  {slugview}   </div>
</>
  : null}
  </div>
  )
}
export default UmamiViewClient
