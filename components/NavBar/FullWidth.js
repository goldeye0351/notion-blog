import { FullWidthIn,FullWidthOut } from "@/Icon/Icon"
const FullWidth =({fullWidth,toggleFullWidth})=>{

    return <button title='fullWidth' onClick={toggleFullWidth} data-umami-event='切换宽度' className=' hidden  p-2 xl:inline-block hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer rounded-lg '>
        {fullWidth ? (
            <FullWidthIn className=' md:w-8 md:h-8 w-6 h-6 text-gray-200  duration-500 hover:scale-125 ' />
        ) :(
            <FullWidthOut  className="md:w-8 md:h-8 w-6 h-6 text-gray-200   duration-500 hover:scale-125 " />                
        )}
    </button>
    }
export default FullWidth