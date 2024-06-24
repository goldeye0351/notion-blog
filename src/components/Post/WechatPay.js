import Image from 'next/image'

// export default function WechatPay() {
const WechatPay = () => {
  return (
    <div className='fixed inline-flex shadow-lg bg-gray-100 dark:bg-gray-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
      <Image
        src='/mypay.png'
        alt='Pay'
        width={268}
        height={268}
      />
    </div>
  )
}

export default WechatPay
