// https://react-svgr.com/playground/
import * as React from 'react'
import Image from 'next/image'

const Logo = (props) => (
  <Image
  src='/favicon.png'
  alt='Logo'
  width={100}
  height={100}
  className=' animate-spin'
/>
)

export default Logo
