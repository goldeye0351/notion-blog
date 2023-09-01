import Link from 'next/link'
import BLOG from '@/blog.config'
import {  UserIcon,  UsersIcon,  MailIcon,EyeIcon, StarIcon, CursorClickIcon,StatusOnlineIcon, HeartIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import ThemeSwitcher from './ThemeSwitcher.js'
import React, { useEffect } from 'react'

var umiId = BLOG.analytics.umamiConfig.websiteId

const Footer = ({ fullWidth }) => {


  useEffect(() => {
    function umiTongji() {
      var umiToken = BLOG.analytics.umamiConfig.token
      var umiTime = Date.parse(new Date());
      var umiUrl = "https://umami.mynotion.life/api/websites/"+umiId+"/stats?startAt=1672848000000&endAt="+umiTime;
      var umiUrl2 = "https://umami.mynotion.life/api/websites/"+umiId+"/active";

      fetch(umiUrl, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + umiToken,
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(resdata => {
        document.querySelector('#pvstatic').innerHTML = resdata.pageviews.value;
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
        document.querySelector('#online').innerHTML = resdata[0].x;
      });

    }

    umiTongji();
  }, []);
  return (
    <motion.div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-600 dark:text-gray-300 transition-all ${
        !fullWidth ? 'max-w-5xl md:px-8' : 'px-4 md:px-24'
      }`}
    >
      <footer className='max-w-screen-2xl  mx-auto'>
        <div className='flex flex-row justify-center border-b dark:border-gray-600 '>
            <ThemeSwitcher  />
        </div>

        <div className='flex justify-between h-16 '>
            <Link href="https://github.com/goldeye0351/notion-blog" className=" group    flex items-center space-x-3">
            

              <div className="flex space-x-1.5    group-hover:text-sky-400   ">
                 <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='duration-500  fill-black dark:fill-white w-6 h-6  '>
                  <path fill="currentColor"  d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                 </svg>  
              </div>

              
              <div className="flex space-x-1.5   group-hover:text-sky-400  " >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className='duration-500  fill-black dark:fill-white w-6 h-6  '>
                  <path fill="#38bdf8" d="M23.749 30.005c-.119.063-.109.083.005.025a.31.31 0 0 0 .095-.061c0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016a.249.249 0 0 0 .068-.047c0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016a.246.246 0 0 0 .068-.048c0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015c.037-.02.068-.041.068-.047c0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068c.067-.041.181-.131.161-.131c-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041c-4.548.412-8.803 2.86-11.5 6.631a15.828 15.828 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333c0 1.192.016 1.448.145 2.328c.871 6.011 5.147 11.057 10.943 12.927c1.043.333 2.136.563 3.381.704c.484.052 2.577.052 3.061 0c2.152-.24 3.969-.771 5.767-1.688c.276-.14.328-.177.291-.208a340.89 340.89 0 0 1-2.609-3.495l-2.557-3.453l-3.203-4.745a416.396 416.396 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681c-.011 4.505-.011 4.688-.068 4.792a.572.572 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.595.595 0 0 1-.208-.229l-.068-.141l.005-6.271l.011-6.271l.099-.125a.753.753 0 0 1 .229-.187c.131-.063.183-.073.724-.073c.635 0 .74.025.907.208a602.855 602.855 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839l.125-.083a16.346 16.346 0 0 0 3.285-2.885a15.935 15.935 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333c0-1.193-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a16.983 16.983 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.623.623 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624l-.989-1.52l-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068c.463 0 .541.005.645.063z"/>
              </svg>
              </div>

              <div className="flex space-x-1.5    group-hover:text-sky-400 " >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className='duration-500  fill-black dark:fill-white w-6 h-6  '>
                  <path fill="currentColor" d="M5.948 5.609c.99.807 1.365.75 3.234.625l17.62-1.057c.375 0 .063-.375-.063-.438l-2.927-2.115c-.557-.438-1.307-.932-2.74-.813L4.015 3.061c-.625.057-.75.37-.5.62zm1.057 4.11v18.536c0 .995.495 1.37 1.615 1.307l19.365-1.12c1.12-.063 1.25-.745 1.25-1.557V8.474c0-.813-.313-1.245-1-1.182L8.001 8.474c-.75.063-.995.432-.995 1.24zm19.115.989c.125.563 0 1.12-.563 1.188l-.932.188v13.682c-.813.438-1.557.688-2.177.688c-1 0-1.25-.313-1.995-1.245l-6.104-9.583v9.271l1.932.438s0 1.12-1.557 1.12l-4.297.25c-.125-.25 0-.875.438-.995l1.12-.313V13.142l-1.557-.125c-.125-.563.188-1.37 1.057-1.432l4.609-.313l6.354 9.708v-8.589l-1.62-.188c-.125-.682.37-1.182.995-1.24zM2.583 1.38L20.328.073c2.177-.188 2.74-.063 4.109.932l5.667 3.984c.932.682 1.245.87 1.245 1.615v21.839c0 1.37-.5 2.177-2.24 2.302L8.494 31.99c-1.302.063-1.927-.125-2.615-.995l-4.172-5.417C.962 24.583.65 23.838.65 22.969V3.558c0-1.12.5-2.052 1.932-2.177z"/>
              </svg>
              </div>

            </Link>
            <div className='  flex space-x-2  h-16 justify-center flex-row content-center items-center '>
                <div>{`© ${new Date().getFullYear()}`}</div>  
                <HeartIcon className=' h-5  duration-500  hover:animate-ping hover:h-8 ' />
                

                <div className="  h-16 flex justify-center text-center flex-row content-center items-center  ">
                  <StatusOnlineIcon className=' h-6 inline-block text-green-400   ' />
                  <span id="online" className='inline-block text-green-400 '></span>
                  

                </div>

                <EyeIcon className=' h-5  ' />
                <span id="pvstatic">2023</span>
            </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Footer
