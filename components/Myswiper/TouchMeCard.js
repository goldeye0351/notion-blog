
import FlipCard from './FlipCard'
import Link from 'next/link'
import { UserIcon } from '@heroicons/react/outline'
import Logo from '../Common/Logo'
/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  return (
        <div className={'relative h-28 text-white flex flex-col'}>

            <FlipCard
                className='cursor-pointer rounded-xl '
                frontContent={
                     
                     <div className=' flex mx-auto justify-center rounded-xl'>
                     < Logo className='  ' />
                     </div >
                    }
                backContent={
                    < UserIcon className=' w-full h-full flex mx-auto my-auto bg-gray-300 dark:bg-gray-600 rounded-xl' />


                }
            />

        </div>
  )
}
