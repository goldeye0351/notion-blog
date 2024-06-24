import Image from "next/image"
//import payimg from '@/public/pyqlogo.png'
export const Lock = props => {
  const { validPassword } = props

  const submitPassword = () => {
    const p = document.getElementById('password')
    if (!validPassword(p?.value)) {
      const tips = document.getElementById('tips')
      if (tips) {
        tips.innerHTML = ``
        tips.innerHTML = `<div class='text-red-500 bg-gray-500 dark:bg-gray-600 rounded-xl  p-1 h-8 my-1'>${"密码:51xmi"}</div>`
      }
    }
  }
{/* shadow-[0_0_30px_30px_rgba(255,255,80,0.8)]    <Image src={payimg} alt='pay' className=" rounded-r-full w-56 " />
*/}
  return     <div className='fixed inline-flex  bg-gray-700 dark:bg-gray-800  duration-300  p-5 rounded-3xl  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
    <div src='/pyqlogo.png' alt='pay' className="  " />
    <div id='container' className='  flex flex-col justify-center items-center '>
      <div className='flex flex-row space-x-3'>
        <input id="password" type='password' placeholder="51xmi" 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitPassword()
              }
            }}
            className=' w-20 h-8 rounded-xl text-gray-200 ring-1 ring-green-400  p-1 bg-whte bg-black'>
        </input>
        <div onClick={submitPassword} 
        className="cursor-pointer flex p-1 m-1 items-center h-8
        justify-center  text-white bg-gray-500 dark:bg-gray-600 rounded-xl " >
          {"OK" }
        </div>
        <div id='tips'>      </div>
      </div>
     

  </div></div>
}
