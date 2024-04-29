import styles from  './Button.module.css'
const D3Button =({text}) =>{//3D按钮
    return<>
<div className={`${styles.d3button} px-8 py-3 `  }>{text}</div>

  </>
}
export default D3Button

export function MacButton ({text}) {//苹果按钮
  return<>
<div className={`${styles.macbtn} px-8 py-3 `  }>{text}</div>
</>
}

export function JBButton ({text}) {//渐变按钮
  return<>
<div className={`${styles.jbbtn} mypingcard px-8 py-3 `  }>{text}</div>
</>
}

export function LQButton ({text}) {//液态按钮
  return<>
<div className={`${styles.lqbutton} group  relative  px-8 py-3 `  }>
  <div className={`${styles.lqspan} w-full h-full ` }>{text}</div>
  <div className={`${styles.liquid}  w-full h-full  duration-300 group-hover:-translate-y-16  `}>
  </div>
</div>
</>
}

export function OLDButton ({text}) {//老按钮
  return<>
  <div className=" relative  rounded-xl w-24 h-12  ">
      <svg  className="myshape rounded-xl hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 w-full h-full" >
          <rect rx="12" ry="12" className=' w-full h-full rounded-xl ' />
      </svg>
      <div className='absolute inset-x-0 inset-y-0 bg-gray-700 rounded-xl  justify-center items-center flex '>
        {text} 
      </div>
  </div>
  </>
}

export function KZButton ({text}) {//渐变按钮
  return<>
<div className='drawborder px-8 py-3 bg-gray-700 dark:bg-gray-800 hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 '>{text}</div>
</>
}