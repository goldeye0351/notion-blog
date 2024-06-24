import styles from './rings.module.css'
export default function RingsCard({children,className}){
    return<div className={`${className}  ${styles.rings} `}>
                <i style={{ '--clr': '#00ff0a' }}></i>
                <i style={{ '--clr': '#ff0057' }}></i>
                <i style={{ '--clr': '#fffd44' }}></i>
                <div className=' flex justify-center items-center  '>
                    {children}
                </div>
            </div>
            }