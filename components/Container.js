import SEO from '@/components/Common/SEO'
import BLOG from '@/blog.config'
import PropTypes from 'prop-types'

const Container = ({ children, fullWidth,className, ...customMeta }) => {
  const meta = {
    title: BLOG.title,
    type: 'website',
    ...customMeta
  }
  return (
    <>
      <SEO meta={meta} />
      <main className={`m-auto  duration-1000 ease-in-out ${className} ${fullWidth ? 'max-w-[100VW] px-3 ' : '  w-full max-w-7xl' }`}  >
        {children}
      </main>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
