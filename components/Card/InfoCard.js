import { useState } from 'react'
import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import Tags from '@/components/Common/Tags'
import PropTypes from 'prop-types'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const InfoCard = ({ tags, currentTag }) => {
  const { locale } = useRouter()
  const t = lang[locale]


  return (
    
      <Tags tags={tags} currentTag={currentTag} />
      
  )
}

export default InfoCard
