import mycache from 'memory-cache'
import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'
import { getPreviewImageMap } from './previewImages'

export async function getPostBlocks(id) {
          // Check if the record map is already in the cache
          const cachedRecordMap = mycache.get(id);
          // If the record map is in the cache, return it
          if (cachedRecordMap) {    return cachedRecordMap;  }

  const authToken = BLOG.notionAccessToken || null
  const api = new NotionAPI({ authToken })
  const pageBlock = await api.getPage(id)

  if (BLOG.previewImagesEnabled) {
    const previewImageMap = await getPreviewImageMap(pageBlock)
    pageBlock.preview_images = previewImageMap
  }
          // Store the record map in the cache
          mycache.put(id, pageBlock );
          // Return the record map
  return pageBlock
}
