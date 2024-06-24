'use client'
import { useState } from 'react'
import { useUser } from '@clerk/nextjs';
function Contact() {
  const [showResult, setShowResult] = useState(false)
  const {user} = useUser()
  const useremail=user?.primaryEmailAddress?.emailAddress
  const [youname, setYouname] = useState('');
  const [youmail, setYoumail] = useState('');
  const [summary, setSummary] = useState('');
  const sentMessage = async  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const tgUrl = '/api/telme'
    const res = await fetch(tgUrl, {
      body: JSON.stringify({youname,youmail,useremail,summary }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    console.log(res)
    setShowResult(true)
  }
  return (
    <>
      {showResult ? (
        <div>
          <p className=' font-bold md:text-lg text-center mx-auto text-gray-200'>
            谢谢你,已提交
          </p>
        </div>
      ) : (
        <form
          className=' grid sm:grid-cols-2 gap-4 mx-auto text-gray-200'
          onSubmit={sentMessage}
        >
          <div>
            <input
              name='name'
              id='name'
              type='text'
              value={youname}
              onChange={(e) => setYouname(e.target.value)}
              required
              placeholder='Name'
              className='block w-full bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-600'
            />
          </div>
          <div>
            <input
              name='email'
              id='mail'
              type='text'
              value={user?.primaryEmailAddress?.emailAddress}
              onChange={(e) => setYoumail(e.target.value)}
              required
              placeholder='Email'
              className='block w-full bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-600'
            />
          </div>

          <div className='sm:col-span-2'>
            <textarea
              name='message'
              id='message'
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
              placeholder='Hi,there'
              className='h-36 block w-full bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-600'
            ></textarea>
          </div>

          <div className='sm:col-span-2 flex justify-between items-center'>
              
              <button
                type='submit'
                className='inline-block bg-gray-700 dark:bg-gray-800 hover:bg-gray-600  dark:hover:bg-gray-600 text-center rounded-lg outline-none transition duration-100 px-8 py-3'
              >
                <p className='text-gray-200 h-5'>Send</p>
              </button>
            
            <p className='mb-2 text-gray-200 text-sm'>
              @email
            </p>
          </div>
        </form>
      )}
    </>
  )
}

export default Contact
