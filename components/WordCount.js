import { useEffect } from 'react'

export default function WordCount() {
  useEffect(() => {
    countWords()
  })

  return <span id='wordCountWrapper' className='flex gap-3 font-light'>
        <span className='flex whitespace-nowrap items-center'>
            <i className='pl-1 pr-2 fas fa-file-word' />
            <span id='wordCount'>0</span>&nbsp;🖍️
        </span>
        <span className='flex whitespace-nowrap items-center'>
            <i className='mr-1 fas fa-clock' />
            <span></span>
            <span id='readTime'>0</span>&nbsp;🕰️
        </span>
    </span>
}

/**
 * 更新字数统计和阅读时间
 */
function countWords() {
  const articleText = deleteHtmlTag(document.getElementById('postmain')?.innerHTML)
  const wordCount = fnGetCpmisWords(articleText)
  // 阅读速度 300-500每分钟
  document.getElementById('wordCount').innerHTML = wordCount
  document.getElementById('readTime').innerHTML = Math.floor(wordCount / 400) + 1
  const wordCountWrapper = document.getElementById('wordCountWrapper')
  wordCountWrapper.classList.remove('hidden')
}

// 去除html标签
function deleteHtmlTag(str) {
  if (!str) {
    return ''
  }
  str = str.replace(/<[^>]+>|&[^>]+;/g, '').trim()// 去掉所有的html标签和&nbsp;之类的特殊符合
  return str
}

// 用word方式计算正文字数
function fnGetCpmisWords(str) {
  if (!str) {
    return 0
  }
  let sLen = 0
  try {
    // eslint-disable-next-line no-irregular-whitespace
    str = str.replace(/(\r\n+|\s+|　+)/g, '龘')
    // eslint-disable-next-line no-control-regex
    str = str.replace(/[\x00-\xff]/g, 'm')
    str = str.replace(/m+/g, '*')
    str = str.replace(/龘+/g, '')
    sLen = str.length
  } catch (e) {

  }
  return sLen
}
