import { motion } from 'framer-motion'
import { articles } from '../../data'
import Titlebar from '../Titlebar'

const Blog = () => {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div
      className='w-full lg:mt-40 mt-20 flex flex-col items-start justify-center gap-14 px-5'
      id='news'
    >
      <div className='container mx-auto lg:px-20 px-5'>
        <motion.div
          className='flex flex-col gap-4 mb-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={titleVariants}>
            <Titlebar title='new articles' />
          </motion.div>
          <motion.span
            className='uppercase text-secondary font-oswald font-bold text-[45px]'
            variants={titleVariants}
          >
            Read latest articles
          </motion.span>
        </motion.div>

        <motion.div
          className='w-full flex lg:flex-row flex-col items-center gap-6 justify-between'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {articles.map((item) => (
            <motion.div
              key={item.title}
              className='flex w-full flex-col justify-end p-6 gap-4 bg-cover bg-center h-[370px]'
              style={{ backgroundImage: `url(${item.image})` }}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <p className='font-sans text-lg text-articleDate italic'>
                {item.date}
              </p>
              <span className='text-white font-medium font-oswald text-[32px] tracking-wide leading-[40px] uppercase'>
                {item.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
