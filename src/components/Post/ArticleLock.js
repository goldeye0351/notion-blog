
export const ArticleLock = props => {
  const { validPassword } = props

  const submitPassword = () => {
    const p = document.getElementById('password')
    if (!validPassword(p?.value)) {
      const tips = document.getElementById('tips')
      if (tips) {
        tips.innerHTML = ''
        tips.innerHTML = `<div class='text-green-400 text-xl'>${"Please check password."}</div>`
      }
    }
  }

  return <div id='container' className='w-full flex justify-center items-center h-96 text-gray-200 '>
    <div className='text-center space-y-3'>
      <div className='font-bold'>{"Locked Password"}</div>
      <div className='flex mx-4'>
        <input id="password" type='password'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitPassword()
              }
            }}
            className='outline-none w-full text-sm pl-5 rounded-l transition font-light leading-10 bg-gray-700 text-gray-200'>
        </input>
        <div onClick={submitPassword} className="px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 bg-green-400/50  hover:bg-green-500 text-white rounded-r duration-300" >
          <i className={'duration-200 cursor-pointer '} >&nbsp;{"OK"}</i>
        </div>
      </div>
      <div id='tips'>
      </div>
    </div>
  </div>
}
