import {useUser,SignInButton,SignOutButton,UserButton, SignedIn,  SignedOut,UserProfile} from "@clerk/nextjs";
import CopyButton from "@/components/CopyButton";
import Tabs from "@/components/Post/Tabs";
import Image from "next/image"
import logoimg from '@/public/pyqlogo.png'
import { useState } from "react"
import BLOG from '@/blog.config'
import WeChat from "@/components/Post/WeChat"
import Container from '@/components/Container'

export default function Home() {
  const saysaytext=BLOG.saysay
  const [xie,setXie]=useState(false);
  const toggleXie = () => {      setXie(prevState => !prevState);    };
  const post = {
    id: BLOG.saysay,
    title: BLOG.saysay,
  };
  const { user } = useUser();
  const email = user?.primaryEmailAddress.emailAddress
  return (<Container title={BLOG.viptitle} description={BLOG.viptitle} ogimage={BLOG.ogimg} className={ ' text-gray-200min-h-screen '} >
  < div className=" w-screen  " >

        <SignedIn>
            <Tabs className='  sticky top-36 h-16   justify-center mx-auto w-96 text-gray-200  '>
              <div key='用户信息' className="flex min-h-screen space-y-6 text-3xl font-semibold flex-col justify-center items-center content-center m-auto text-gray-200  " >
                
                <div className=" scale-150  mb-16 ">
                  <UserButton />
                </div>

                {user && (
                <div> 
                  👋 Hi, {user.primaryEmailAddress.emailAddress}

                <div className="pb-6 max-h-96">
                <dl>
                  <div className="px-8 py-2">
                    <dt className="text-sm font-semibold">User ID</dt>
                    <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
                      {user.id}
                      <CopyButton text={user.id} />
                    </dd>
                  </div>
                  {user.firstName && (
                    <div className="px-8 py-2">
                      <dt className="text-sm font-semibold mb-1">First Name</dt>
                      <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                        {user.firstName}
                      </dd>
                    </div>
                  )}
                  {user.lastName && (
                    <div className="px-8 py-2">
                      <dt className="text-sm font-semibold mb-1">Last Name</dt>
                      <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                        {user.lastName}
                      </dd>
                    </div>
                  )}
                  <div className="px-8 py-2">
                    <dt className="text-sm font-semibold mb-1">Email addresses</dt>
                    <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                      {user.emailAddresses.map((email) => (
                        <div key={email.id} className="flex gap-2 mb-1">
                          {email.emailAddress}
                          {user.primaryEmailAddressId === email.id && (
                            <span className="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                              Primary
                            </span>
                          )}
                        </div>
                      ))}
                    </dd>
                  </div>
                  {user.imageUrl && (
                    <div className="px-8 py-2">
                      <dt className="text-sm font-semibold mb-1">Profile Image</dt>
                      <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                        <img
                          src={user.imageUrl}
                          className="rounded-full w-12 h-12"
                        />
                      </dd>
                    </div>
                  )}
                </dl>
              </div></div>
                )}
                <div className=" p-3 rounded-2xl text-base flex mx-auto items-center  text-green-400  bg-gray-700 dark:bg-gray-800" >
                  < SignOutButton />
                </div>

              
              </div>
              <div key='详细信息' className=" justify-center flex items-center   ">
                <UserProfile />
              </div>
              <div key='点圈圈吐槽一下' className="  " >
                <div className="">
                    <div className="  flex flex-row text-white  justify-end w-96    ">
                      <div onClick={toggleXie} className="  flex-row flex  p-2   text-white justify-center content-center items-center ">
                        <Image id='comment' src={logoimg} alt='朋友圈' className='h-12 w-12 mx-auto    hover:animate-spin  ' />
                        <span className=" inline-block  text-xl italic ">
                          {saysaytext} 
                        </span>
                      </div>
                    </div>
              
                </div>
                
                < WeChat key='Notion Database' post={post} xie={xie} email={email}  />

              </div>
            </Tabs>

        </SignedIn>

        <SignedOut>
          <div className="flex min-h-screen flex-col justify-center items-center content-center m-auto text-gray-200 text-2xl " >
              <div >You are signed Out    </div>     
              <div className=" p-3 rounded-2xl flex mx-auto items-center   bg-gray-700 dark:bg-gray-800">
                <SignInButton />
              </div>
            </div>            
        </SignedOut>
      </div ></Container>
  )
}