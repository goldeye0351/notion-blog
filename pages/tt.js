import React from 'react';




export async function getServerSideProps({ req }) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const apiKey = '42f57ba8b461aaa41f1673d23d268d21';
  const response = await fetch(`http://api.ipstack.com/${ip}?access_key=${apiKey}`);
  const data = await response.json();
  const country = `${data.location.country_flag_emoji}, ${data.region_name}, ${data.city}`;
  
  const currentHour = (new Date()).getHours();
  let greeting;

  if (currentHour >= 0 && currentHour < 6) {
    greeting = '凌晨好🌙';
  } else if (currentHour >= 6 && currentHour < 12) {
    greeting = '早上好🌞';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = '下午好🌤';
  } else {
    greeting = '晚上好🌙';
  }

  return {
    props: {
      ip,
      country,
      greeting
    }
  };
}
export default function MyComponent({ ip, country, greeting  }) {
  return (
    <div>

      <h2>    {greeting}</h2>
      <h2>欢迎您, 来自 {country} 的客人</h2>
      <h2>IP: {ip}</h2>
    </div>
  );
}