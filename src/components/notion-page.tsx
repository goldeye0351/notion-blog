'use client';
import dynamic from 'next/dynamic';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import Image from 'next/image';
import 'react-notion-x/src/styles.css';
import './notion.css';


export default function NotionPage({
  recordMap,
}: {

  recordMap: ExtendedRecordMap;
}) {


  return (
    <NotionRenderer  recordMap={recordMap}  
    darkMode={true} 
    components={{
      Code,
      Collection,
      nextImage: Image,
    }} />
  );
}
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);