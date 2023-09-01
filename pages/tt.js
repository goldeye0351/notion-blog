import React from 'react';




export async function getServerSideProps({ req }) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const apiKey = '42f57ba8b461aaa41f1673d23d268d21';
  const response = await fetch(`http://api.ipstack.com/${ip}?access_key=${apiKey}`);
  const data = await response.json();
  const country = `${data.location.country_flag_emoji}, ${data.region_name}, ${data.city}`;

  return {
    props: {
      ip,
      country
    }
  };
}
export default function MyComponent({ ip, country }) {
  return (
    <div>
      <h2>欢迎您, 来自 {country} 的客人，IP地址: {ip}</h2>
    </div>
  );
}