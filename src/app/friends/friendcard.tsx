/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

interface Post {
  id: string;
  title: string;
  link: string;
  summary: string;
}

export default function FrdCard({ post }: { post: Post }) {
  return (
    <Link key={post.id} href={post.title} target="_blank">
      <div
        title={post.title}
        className="flex  flex-col justify-center items-center hover:scale-125 duration-300 "
      >
        <img
          src={post.link}
          alt={post.title}
          width={100}
          height={100}
          className=" rounded-lg "
        />
        <div className=" flex p-1 overflow-hidden  text-white ">
          {post.summary}
        </div>
      </div>
    </Link>
  );
}
