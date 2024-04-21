export default function RotateCard({children,className}){
    return<div className={`${className} w-80 h-96 text-gray-200 myrotatecard  justify-center items-center flex rounded-xl overflow-hidden `}>
                <div className=' scale-[0.98] w-full h-full  rounded-xl bg-day dark:bg-night flex justify-center items-center '>
                    {children}
                </div>
              </div>
  }
