import WavesArea from "@/components/Post/WavesArea"
import BLOG from "@/blog.config"
import React, { useEffect } from 'react'


var umiId = BLOG.analytics.umamiConfig.websiteId

function MyComponent() {


  useEffect(() => {
    function umiTongji() {
      var umiToken = BLOG.analytics.umamiConfig.token
      var umiTime = Date.parse(new Date());
      var umiUrl = "https://umami.mynotion.life/api/websites/"+umiId+"/stats?startAt=1672848000000&endAt="+umiTime;
      
      fetch(umiUrl, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + umiToken,
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(resdata => {
        document.querySelector('#pvStatic').innerHTML = resdata.pageviews.value;
        document.querySelector('#uvStatic').innerHTML = resdata.uniques.value;
      });
    }

    umiTongji();
  }, []);

  return (
    <div className="tongji">
      总访问量 <span pvStatic id="pvStatic">0</span> 次 | 总访客数 <span uvStatic id="uvStatic">0</span> 人
      <hr/>
      <span id="busuanzi_container_site_pv" className="hidden">
          本站总访问量<span id="busuanzi_value_site_pv"></span>次
      </span>
    </div>
  );
}

export default  MyComponent