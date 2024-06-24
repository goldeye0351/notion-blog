//getUmamiDate.ts
import BLOG from "@/blog.config";
import cache from 'memory-cache'
const umiId = BLOG.analytics.umamiConfig.websiteId;
const umiToken = BLOG.analytics.umamiConfig.token;
const umiTime = Date.parse(new Date().toString());

export const getUmamiAllUrl = async () => {
  // 从缓存中获取 Umami 数据
  const cachedData = cache.get("url");
  if (cachedData) {   
    return cachedData;  
  }
  const umiUrl = `https://umami.51xmi.com/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=url`;
  const response = await fetch(umiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${umiToken}`,
      'Content-Type': 'application/json'
    }
  });
  const resdata = await response.json();
  cache.put("url",resdata, 60  ); // 缓存 1 分钟

  return resdata;
};

export const get1Url = async (title: string) => {
    const resdata=await getUmamiAllUrl();

    const defumami = resdata.filter((x: { x: string; y: number }) => x.x.substring(1) === title);
    return defumami;//返回的要这样用 {defumami[0].y} ,返回的带有/blog,因此要去除/
  };

export const getUmamiAllLike = async () => {
    // url 是网址, event是点赞的数据
    const umiUrl = `https://umami.51xmi.com/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=event`;
    const response = await fetch(umiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${umiToken}`,
        'Content-Type': 'application/json'
      },
    });

    const resdata = await response.json();    
    return resdata; //返回的要这样用 {defumami[0].y}
  };  
  
export const get1Like = async (title: string) => {  
      const resdata=await getUmamiAllLike();
      // 返回过滤后的数据
      const defumami = resdata.filter((x: { x: string; y: number }) => x.x === title);
        return defumami; //返回的要这样用 {defumami[0].y}
    };
    