import { useEffect, useState } from 'react';

export default function IpComponent() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch('/api/ip')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>{ipAddress}</div>
  );
}