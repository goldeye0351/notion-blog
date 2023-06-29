
export const ArticleLock = props => {
  const { validPassword } = props

  const submitPassword = () => {
    const p = document.getElementById('password')
    if (!validPassword(p?.value)) {
      const tips = document.getElementById('tips')
      if (tips) {
        tips.innerHTML = ''
        tips.innerHTML = `<div class='text-red-500 animate__shakeX animate__animated'>${"密码错."}</div>`
      }
    }
  }

  return <div id='container' className='w-full flex justify-center items-center h-96 '>
    <div className='text-center space-y-3'>
      <div className='font-bold'>{"文章已被锁定了"}</div>
      <div className='flex mx-4'>
        <input id="password" type='password'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitPassword()
              }
            }}
            className='outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg dark:text-gray-300 font-light leading-10 text-black bg-gray-100 dark:bg-gray-500'>
        </input>
        <div onClick={submitPassword} className="px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-r duration-300" >
          <i className={'duration-200 cursor-pointer fas fa-key'} >&nbsp;{"提交"}</i>
        </div>
      </div>
      <div id='tips'>
      </div>
    </div>
  </div>
}
