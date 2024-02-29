import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import BLOG from '@/blog.config'
import { lang } from '@/public/lang'
import { useRouter } from 'next/router'
import Hello from '@/components/Common/Hello'

export const Contact = () => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <Container title={BLOG.title} description={BLOG.description} ogimage={BLOG.ogimg} className={ ' m-auto min-h-screen ' } >
      <div className='mb-16 text-gray-200 dark:text-gray-200'>

        <Hello hi={<div className=' p-3 mx-auto flex justify-center  flex-col'>
          <div>{t.CONTACT.DESCRIPTION}{t.CONTACT.TG_DESCRIPTION}</div>
          </div>} 
            logoimg={<div>
            <sapn className='text-xl lg:text-3xl font-light text-center mb-4 flex justify-center mx-auto p-3'>
            {t.CONTACT.TITLE}
          </sapn></div>}
        />

      </div>
      <ContactForm />
    </Container>
  )
}

export default Contact
