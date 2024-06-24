import styles from './rotatecard.module.css'

export default function RotateCard({children,className}: {children: React.ReactNode, className?: string}) {
    return <div className={`${className} ${styles.myrotatecard} rounded-xl `}>
                <div className=' scale-[0.98] w-full h-full  rounded-xl bg-day dark:bg-night flex justify-center items-center '>
                    {children}
                </div>
              </div>
  }
