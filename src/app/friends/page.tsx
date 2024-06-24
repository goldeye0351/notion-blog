import SubFriend from './frdpage';
import { headers } from 'next/headers'
import { useMemo } from 'react';

const apikey = process.env.NOTION_API_KEY;
const bapi= "Bearer "+apikey
const DatabaseId = process.env.NOTION_DATABASE_ID

function IP() {
  const FALLBACK_IP_ADDRESS = '0.0.0.0'
  const forwardedFor = headers().get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
  }
  return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
}
export default async function Friends( ) {
  const ipComponent = useMemo(() => <IP />, []);
  const frd = await fetch(
    `https://api.notion.com/v1/databases/${DatabaseId}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: bapi,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: 'type',
          select: {
            equals: 'Friend',
          },
        },
      }),
    }
  );
  const data = await frd.json();
  const allfrd = data.results.map((result:any) => {
    if (!('properties' in result)) return {};
    const id= result.id;
    const properties = result.properties;
    const title = properties.title.title[0].text.content;
    const summary = properties.summary.rich_text[0].plain_text;
    const link = properties.Link.url;
        return {
      id,
      title,
      summary,      
      link,
    };
  });
  return (<>

<div id="data" data-posts={JSON.stringify(allfrd)} />
{allfrd.length}
<div id="friend"  >
    <SubFriend  posts={allfrd} visitorIp={ipComponent}/>
</div>
</>
  );
}

export const metadata = {
  title: '友链 51xMI',
  description: '51xMI .',
};