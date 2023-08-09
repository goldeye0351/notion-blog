import React, { useEffect, useState } from 'react';
import BLOG from '@/blog.config';

const Umatongji = ({ slug }) => {
  const [myResult, setMyResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const umiId = BLOG.analytics.umamiConfig.websiteId;
        const umiToken = BLOG.analytics.umamiConfig.token;
        const umiTime = Date.parse(new Date());
        const umiUrl = `https://umami.mynotion.life/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=url`;

        const response = await fetch(umiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${umiToken}`,
            'Content-Type': 'application/json'
          }
        });

        const resdata = await response.json();

        for (let value of resdata) {
          if (value.x.substr(1) === slug) {
            const result = value.y;
            console.log(slug, "的结果是", result);
            setMyResult(result);
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [slug]);

  if (myResult === null) {
    return null; // 或者你可以返回一个加载中的提示，直到异步请求完成
  }

  return <div className=' inline-block'>{myResult}</div>;
};

export default Umatongji;
