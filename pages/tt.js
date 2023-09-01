import React from 'react';

export default function MyComponent({ ip }) {
  const ip2 = window.location.hostname;
  return (
    <div>
      <h2>Your IP address: {ip}</h2>
      <h2>Your IP2 address: {ip2}</h2>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  return {
    props: {
      ip
    }
  };
}

