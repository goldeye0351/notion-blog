import BLOG from '@/blog.config'
import got from 'got'
import lqip from '../lqip.js'
import pMap from 'p-map'
import pMemoize from 'p-memoize'

import { defaultMapImageUrl } from 'react-notion-x'
import { getPageImageUrls } from 'notion-utils'

// NOTE: this is just an example of how to pre-compute preview images.
// Depending on how many images you're working with, this can potentially be
// very expensive to recompute, so in production we recommend that you cache
// the preview image results in a key-value database of your choosing.
// If you're not sure where to start, check out https://github.com/jaredwray/keyv

export async function getPreviewImageMap(recordMap) {
  const urls = getPageImageUrls(recordMap, {
    mapImageUrl: defaultMapImageUrl
  }).filter((url) => url && !url.includes('.svg') && !url.includes(`${BLOG.ogImageGenerateHost}`)) // not include svg

  const previewImagesMap = Object.fromEntries(
    await pMap(urls, async (url) => [url, await getPreviewImage(url)], {
      concurrency: 8
    })
  )

  return previewImagesMap
}

async function createPreviewImage(url) {
  try {
    const { body } = await got(url, { responseType: 'buffer' })
    const result = await lqip(body)
    // console.log('lqip', { originalUrl: url, ...result.metadata })

    return {
      originalWidth: result.metadata.originalWidth,
      originalHeight: result.metadata.originalHeight,
      dataURIBase64: result.metadata.dataURIBase64
    }
  } catch (err) {
    if (err.message === 'Input buffer contains unsupported image format') {
      return null
    }

    console.warn('failed to create preview image', url, err.message)
    return null
  }
}

export const getPreviewImage = pMemoize(createPreviewImage)
