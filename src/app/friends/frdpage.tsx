'use client'
import { useState } from "react";
import { FriendsIcon } from "@/Icon/Icon";
import FrdCard from "./friendcard";
import BLOG from "@/blog.config";

interface Post {
  id: string;
  title: string;
  link: string;
  summary: string;
}

interface SubFriendProps {
  posts: Post[];
  visitorIp: any;
}

const SubFriend = ({ posts, visitorIp }: SubFriendProps) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [summary, setSummary] = useState("");
  const [xie, setXie] = useState(false);

  const toggleXie = () => {
    setXie((prevState) => !prevState);
  };

  const time1 = new Date();
  const fslug = "f" + time1.getTime();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/addfrd", {
      method: "POST",
      body: JSON.stringify({ title, icon, summary, fslug, visitorIp }),
    });

    if (res.status === 200) {
      window.scrollTo({
        top: document.getElementById("friend")?.offsetTop ?? 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        location.reload(); // 刷新页面
      }, 2000); // 等待2秒后刷新
    } else {
      alert(BLOG.FRIEND_FAILED_MESSAGE);
    }
  };

  return (
    <>
      <div className=" flex flex-row gap-8 mb-8 mt-36 justify-center">
        {posts.map((post) => (
          <FrdCard post={post} key={post.id} />
        ))}
      </div>
      <button
        onClick={toggleXie}
        className=" fixed  inset-y-96     lg:right-36 animate-bounce z-50 md:right-16 right-6 text-green-400 dark:text-green-500"
      >
        <FriendsIcon className={" w-12 h-12 "} />
      </button>
      <div
        className={`${
          xie ? "w-full h-full" : "w-0 h-0 "
        } flex duration-1000 overflow-hidden flex-col mx-auto justify-center mb-8`}
      >
        <div
          id="自主提交"
          className="group w-full mx-auto flex flex-col content-center items-center text-2xl  justify-center rounded-xl  text-white  "
        >
          <div className="h-3" />
          <div className=" flex w-full  mx-auto justify-center items-center content-center ">
            {BLOG.FRIEND_TITLE}
          </div>
          <div className="h-8 my-3" />
        </div>
        <form onSubmit={submitForm} className=" max-w-screen-md grid sm:grid-cols-2 gap-3  mx-auto text-gray-200">
          <div className="  p-3 w-96 bg-gray-700 dark:bg-gray-800 rounded-xl ">
            <input
              id="title"
              name="title"
              type="text"
              className=" block w-full duration-500 bg-black/30 dark:bg-black/30"
              placeholder={BLOG.FRIEND_SITE}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="  p-3  bg-gray-700 dark:bg-gray-800 rounded-xl ">
            <input
              id="icon"
              name="icon"
              type="text"
              className=" block w-full duration-500 bg-black/30 dark:bg-black/30"
              placeholder={BLOG.FRIEND_ICON}
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              required
            />
          </div>

          <div className="p-3 sm:col-span-2 bg-gray-700 dark:bg-gray-800 duration-500 rounded-xl">
            <textarea
              name="summary"
              id="summary"              
              className=" block w-full bg-black/30 dark:bg-black/30 duration-500 rounded-xl"
              placeholder={BLOG.FRIEND_CONTENT}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="sm:col-span-2  p-3 text-2xl   bg-gray-700 dark:bg-gray-800  hover:bg-gray-500 dark:hover:bg-gray-600 duration-500 rounded-xl  "
          >
            <p className="text-gray-400 ">OK</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default SubFriend;
