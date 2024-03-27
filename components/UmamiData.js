import { useEffect,useState } from 'react'
import BLOG from '@/blog.config'
import { EyeIcon, WifiIcon } from '@/Icon/Icon'
import React from 'react'

var umiId = BLOG.analytics.umamiConfig.websiteId

const UmamiData = () => {
  const [number, setNumber] = useState(1);
  const [pv, setPv] = useState(9999999999);
  
    useEffect(() => {
    function umiTongji() {
      const apiU=BLOG.analytics.umamiConfig.apiUrl
      var umiToken = BLOG.analytics.umamiConfig.token
      var umiTime = Date.parse(new Date());
      var umiUrl = apiU+umiId+"/stats?startAt=1672848000000&endAt="+umiTime;
      var umiUrl2 = apiU+umiId+"/active";

      fetch(umiUrl, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + umiToken,
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(resdata => {
          setPv(resdata.pageviews.value)
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
        console.log('在线人数',resdata)
        var demo = document.getElementById('online');
        if (demo) {
          demo.innerHTML = resdata.x+1;
        }
      });

    }

    umiTongji();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (number < pv) {
        setNumber((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 1); // 设置每次数字增加的时间间隔

    return () => clearInterval(interval); // 在组件卸载时清除定时器
  }, [number]);
  return (<div className=' p-2 mb-3 flex space-x-1 w-full bg-gray-700 dark:bg-gray-800 rounded-xl h-full justify-center flex-row content-center items-center hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
  hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400 '>
    <div className="   flex justify-center text-center flex-row content-center items-center  ">
      <WifiIcon className=' h-8 inline-block text-green-400   ' />
      <span id="online" className='online inline-block text-green-400 '>1</span>
    </div>
    <EyeIcon className=' h-8  ' />
    <span id="pvstatic">{number}</span>
</div>
  )
}
export default UmamiData
