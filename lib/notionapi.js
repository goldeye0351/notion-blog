import { Client } from "@notionhq/client";
import BLOG from "@/blog.config"


const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getDefComments = async (databaseId,postid) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Name",
      rich_text: {
        equals: postid
      }
    },
  });
  return response.results;
};
export async function getMenuItems() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      "or": [
        {
      property: 'type',
      select: {
        equals: 'Menu',
      },},
      {
        property: 'type',
        select: {
          equals: 'SubMenu',
        },}
    ]},
  });
  const results = response.results;
  const menus = [];
  
  if (results && results.length > 0) {
    results.forEach(e => {
      let menu = {};
      
      if (e.properties.type.select.name === 'Menu') {
        menu.name = e.properties.title.title[0].text.content
        menu.to = e.properties.slug.rich_text[0].text.content
        menu.type = e.properties.type.select.name
        menu.up = e.properties.up.number 
        menus.push(menu);
      } else if (e.properties.type.select.name === 'SubMenu') {
        const parentMenu = menus[menus.length - 1];
        
        if (parentMenu) {
          if (!parentMenu.submenu) {
            parentMenu.submenu = [];
          }
          
          menu.name = e.properties.title.title[0].text.content
          menu.to = e.properties.slug.rich_text[0].text.content
          menu.type = e.properties.type.select.name
          menu.up = e.properties.up.number 
          parentMenu.submenu.push(menu);
        }
      }
    });
  }
  console.log('这是菜单API',menus)
  return menus.sort((a, b) => a.up- b.up)
  //return response.results;
}
export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  blockId = blockId.replaceAll("-", "");

  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  // Fetches all child blocks recursively - be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = results.map(async (block) => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return await Promise.all(childBlocks).then((blocks) => {
    return blocks.reduce((acc, curr) => {
      if (curr.type === "bulleted_list_item") {
        if (acc[acc.length - 1]?.type === "bulleted_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "bulleted_list",
            bulleted_list: { children: [curr] },
          });
        }
      } else if (curr.type === "numbered_list_item") {
        if (acc[acc.length - 1]?.type === "numbered_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "numbered_list",
            numbered_list: { children: [curr] },
          });
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
