export default function RotateCard({children,className}){
    return<div className={`${className}  rounded-xl myrotatecard`}>
                <div className=' scale-[0.98] w-full h-full  rounded-xl bg-day dark:bg-night flex justify-center items-center '>
                    {children}
                </div>
              </div>
  }
