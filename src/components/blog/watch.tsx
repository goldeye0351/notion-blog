import RotateCard from '@/components/Common/RotateCard';
import BubbleUI from '@/components/blog/Bb';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/post';
  
export default function PGWatch({ posts }: {posts: Post[]}) {
    return            <RotateCard className={'h-72 min-w-72 w-full  flex'}>
    <BubbleUI className="myBubbleUI bg-transparent  duration-300  h-full w-full overflow-y-scroll rounded-xl ">
    {posts.slice(0,21).map((data, i) => (
        <Link passHref href={`${data.slug}`} scroll={false} data-umami-event='手表控件'  key={data.id}>
        <Image src={data.cover} alt={data.title} width={60} height={60}  
        className="hover:scale-125 duration-300  rounded-full aspect-square " /> 
        </Link>
    ))}
    </BubbleUI>
</RotateCard>  
}

