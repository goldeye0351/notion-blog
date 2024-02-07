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
        className='text-sm  toc-fade-in bg-gray-300 dark:bg-gray-600 rounded-2xl p-3 duration-300 '
        id='tableOfContent'
      >

        <div className='max-h-[500px] overflow-y-auto scrollbar-thin  '>
          {tableOfContent.map(({ id, indentLevel, text }) => (

            <a
              key={id}
              href={`#${id}`}
              
            >
                
              <div key={id} className={`${activeSection === id ? (' text-black  dark:text-green-400  border-l-2 border-black dark:border-green-400') : ' '} p-1 cursor-pointer italic 
              hover:bg-gray-200 hover:dark:bg-gray-700` } >
                {text}
              </div>
            </a>

          ))}
        </div>
        
      </div>

  )
}

export default Mulu
