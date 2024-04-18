import styles from  './Button.module.css'
const Button3D =({text}) =>{
    return<>
<div className={`${styles.button} px-8 py-3 `  }>{text}</div>

  </>
}
export default Button3D

export function MacButton ({text}) {
  return<>
<div className={`${styles.macbtn} px-8 py-3 `  }>{text}</div>
</>
}

export function JBButton ({text}) {
  return<>
<div className={`${styles.jbbtn} px-8 py-3 `  }>{text}</div>
</>
}

export function LQButton ({text}) {
  return<>
<div className={`${styles.lqbutton} group  relative  px-8 py-3 `  }>
  <div className={`${styles.lqspan} w-full h-full ` }>{text}</div>
  <div className={`${styles.liquid}  w-full h-full  duration-300 group-hover:-translate-y-16  `}>
  </div>
</div>
</>
}

export function KZButton ({text}) {
  return<>
<div className={`${styles.kzbutton} px-8 py-3 `  }>{text}</div>
</>
}