import styles from  './Button.module.css'

export default function OLDButton ({text}) {//老按钮
  return<>
  <div className=" relative rounded-xl w-20 h-8   ">
      <svg  className={`${styles.myshape} rounded-xl hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 w-full h-full  `} >
          <rect rx="10" ry="10" className=' w-full h-full rounded-xl ' />
      </svg>
      <div className='absolute inset-x-0 inset-y-0 bg-gray-700 rounded-xl  justify-center items-center flex '>
        {text} 
      </div>
  </div>
  </>
}

export function KZButton ({text}) {//渐变按钮
  return<>
<div className={`${styles.drawborder} w-20 h-8  flex justify-center items-center  bg-gray-700 dark:bg-gray-800 hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 `}>{text}</div>
</>
}