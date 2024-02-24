import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

const Mulu = ({ tableOfContent }) => {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const actionSectionScrollSpy = (() => {
      const sections = document.getElementsByClassName('notion-h')

      let prevBBox = null
      let currentSectionId = activeSection

      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i]
        if (!section || !(section instanceof Element)) continue

        if (!currentSectionId) {
          currentSectionId = section.getAttribute('data-id')
        }

        const bbox = section.getBoundingClientRect()
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
        const offset = Math.max(150, prevHeight / 4)

        // GetBoundingClientRect returns values relative to the viewport
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute('data-id')

          prevBBox = bbox
          continue
        }

        break
      }

      setActiveSection(currentSectionId)
    })
    window.addEventListener('scroll', actionSectionScrollSpy)

    actionSectionScrollSpy()

    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy)
    }
  }, [activeSection])

  return (
      <div
        className='text-sm text-gray-200 dark:text-gray-200 toc-fade-in bg-gray-700 dark:bg-gray-800 rounded-2xl p-3 duration-300 '
        id='tableOfContent'
      >
        <div className='max-h-[500px] overflow-y-auto scrollbar-thin border-l-2   '>
          {tableOfContent.map(({ id, indentLevel, text }) => (
            <a
              key={id}
              href={`#${id}`}              
            >                
              {activeSection === id ? 
              <motion.div key={activeSection} 
              initial="hidden" whileInView="visible"
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                 hidden: { opacity: 0,x: 100,scale:0.5 },
                 visible: { opacity: 1,x: 0,scale:1 },
                }}
              className=' activeLine ml-2 p-2 cursor-pointer italic hover:ring-2 hover:p-3 duration-300
               text-green-400  dark:text-green-400  border rounded-xl border-green-400 dark:border-green-400
              '>{text}</motion.div>
              :
              <div className=' p-1 cursor-pointer italic rounded-xl hover:bg-gray-600 hover:dark:bg-gray-700 hover:p-3 duration-300
              '>
                {text}
                </div>}
            </a>
          ))}
        </div>        
      </div>
  )
}
export default Mulu
