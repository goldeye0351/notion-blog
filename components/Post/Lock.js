import Image from "next/image"
import payimg from '@/public/pyqlogo.png'
export const Lock = props => {
  const { validPassword } = props

  const submitPassword = () => {
    const p = document.getElementById('password')
    if (!validPassword(p?.value)) {
      const tips = document.getElementById('tips')
      if (tips) {
        tips.innerHTML = ``
        tips.innerHTML = `<div class='text-red-500 bg-gray-500 dark:bg-gray-600 rounded-xl w-20 p-1 my-1'>${"Check  !"}</div>`
      }
    }
  }
{/* shadow-[0_0_30px_30px_rgba(255,255,80,0.8)]    <Image src={payimg} alt='pay' className=" rounded-r-full w-56 " />
*/}
  return     <div className='fixed inline-flex w-56 bg-gray-700 dark:bg-gray-800  duration-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
    <div src={payimg} alt='pay' className=" rounded-r-full w-56 h-56" />
    <div id='container' className=' w-0  -translate-x-28  flex flex-col justify-center items-center '>
      <div className='flex flex-col space-y-3 '>
        <input id="password" type='password' placeholder="password"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitPassword()
              }
            }}
            className=' w-20 rounded-xl text-gray-200 ring-1 ring-green-400  p-1 bg-whte bg-black'>
        </input>
        <div onClick={submitPassword} 
        className="cursor-pointer flex p-1 my-1 items-center 
        justify-center  text-white bg-gray-500 dark:bg-gray-600 rounded-xl " >
          {"OK"}
        </div>
      </div>
      <div id='tips'>      </div>

  </div></div>
}
