import { useEffect, useCallback, useRef } from 'react'
import BLOG from '@/blog.config'
import { EyeIcon, StatusOnlineIcon, HeartIcon } from '@heroicons/react/outline'
import React from 'react'

var umiId = BLOG.analytics.umamiConfig.websiteId

const UmamiData = () => {
  useEffect(() => {
    function umiTongji() {
      var umiToken = BLOG.analytics.umamiConfig.token
      var umiTime = Date.parse(new Date());
      var umiUrl = "https://umami.mynotion.life/api/websites/"+umiId+"/stats?startAt=1672848000000&endAt="+umiTime;
      var umiUrl2 = "https://umami.mynotion.life/api/websites/"+umiId+"/active";

      fetch(umiUrl, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + umiToken,
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(resdata => {
        document.querySelector('#pvstatic').innerHTML = resdata.pageviews.value;
      });

      fetch(umiUrl2, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + umiToken,
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(resdata => {
        document.querySelector('#online').innerHTML = resdata[0].x;
      });

    }

    umiTongji();
  }, []);
  return (<div className='  flex space-x-1  h-12 justify-center flex-row content-center items-center '>
    <HeartIcon className=' h-8  duration-500  hover:animate-ping hover:h-10 hover:text-red-500' />       
    <div className="   flex justify-center text-center flex-row content-center items-center  ">
      <StatusOnlineIcon className=' h-8 inline-block text-green-400   ' />
      <span id="online" className='inline-block text-green-400 '></span>
    </div>
    <EyeIcon className=' h-8  ' />
    <span id="pvstatic">2024</span>
</div>
  )
}
export default UmamiData
