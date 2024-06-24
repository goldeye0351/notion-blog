'use client'
import React, { useState } from 'react'
import OLDButton , { KZButton } from './button/Button'
import { motion,AnimatePresence } from 'framer-motion'
/**
 * Tabs切换标签
 * @param {*} param0
 * @returns
 */
const Tabs = ({ className, children }) => {
  const [currentTab, setCurrentTab] = useState(0)
  if (!children) {
    return <></>
  }
  children = children.filter(c => c !== '')
  let count = 0
  children.forEach(e => {
    if (e) {
      count++
    }
  })
  if (count === 0) {
    return <></>
  }
  if (count === 1) {
    return <section className={'duration-200 ' + className}>
            {children}
        </section>
  }

  function tabClickHandle(i) {
    setCurrentTab(i)
  }

  return <div className={'mb-5 duration-200 ' + className}>
        <ul className='flex justify-center space-x-3 py-3 duration-300  bg-gray-700 dark:bg-gray-800 rounded-xl overflow-auto mb-3'>
            {children.map((item, index) => {
              return <li key={index}
                    className={(currentTab === index ? 'font-black shadow-[0_0_30px_10px_rgba(0,255,0,0.3)] ' : 'font-extralight italic cursor-pointer') + ' rounded-xl  '}
                    onClick={() => {tabClickHandle(index)}}>
                    {index % 2 === 0 ? <KZButton text={item?.key} /> : <OLDButton text={item?.key} />}       
                      </li>
            })}
        </ul>
        <div> 
          <AnimatePresence mode='wait' >
          <motion.div   key={currentTab}
                  initial={{ opacity:0.5, scale:0 }}
                  animate={{ opacity:1, scale:1 }}
                  exit   ={{ opacity:0, scale:0, }}
                >
            {children.map((item, index) => {
              return <section key={index}>
               
                    {currentTab === index && item}
                
                </section>
            })}
            </motion.div>
        </AnimatePresence>
        </div>
    </div>
}

export default Tabs
