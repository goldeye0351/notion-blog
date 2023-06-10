import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'
import { getPreviewImageMap } from './previewImages'

export async function getPostBlocks(id) {
  const authToken = BLOG.notionAccessToken || null
  const api = new NotionAPI({ authToken })
  const pageBlock = await api.getPage(id)
  if (BLOG.previewImagesEnabled) {
    const previewImageMap = await getPreviewImageMap(pageBlock)
    pageBlock.preview_images = previewImageMap
  }
  return pageBlock
}
