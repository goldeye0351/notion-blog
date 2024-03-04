import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import BLOG from '@/blog.config'
import { lang } from '@/public/lang'
import { useRouter } from 'next/router'
import Hello from '@/components/Common/Hello'
import Image from 'next/image'
import xmiimg from '@/public/51xmi.png'


export const Contact = () => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <Container title={BLOG.title} description={BLOG.description} ogimage={BLOG.ogimg} className={ ' m-auto min-h-screen ' } >
      <div className='mb-16 text-gray-200 dark:text-gray-200'>

        <Hello 
        title={<div>
          <sapn className='text-xl lg:text-3xl font-light text-center flex justify-center mx-auto'>
          {t.CONTACT.TITLE}
        </sapn></div>} 
          txt={<div className=' p-3 mx-auto flex justify-center  flex-col'>
          <div>{t.CONTACT.DESCRIPTION}{t.CONTACT.TG_DESCRIPTION}</div>
          </div>}
            logoimg={<Image src={xmiimg} alt=' ' fill className=' scale-50  group-hover:scale-75 duration-1000 ' /> }
            /> 

      </div>

      <ContactForm />
    </Container>
  )
}

export default Contact
