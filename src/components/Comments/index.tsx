import { motion } from 'framer-motion'
import Titlebar from '../Titlebar'
import comments from '../../assets/images/comments.png'
import { commentsArray } from '../../data'

const Comments = () => {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
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
    hidden: { x: 100, opacity: 0 },
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
      className='w-full lg:mt-40 mt-20 lg:h-[800px] bg-center bg-cover flex flex-col items-start justify-center gap-14 px-5 lg:py-0 py-20'
      style={{ backgroundImage: `url(${comments})` }}
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
            <Titlebar className='!text-faded' title='Testimonials' />
          </motion.div>
          <motion.span
            className='uppercase text-white font-oswald font-bold text-[30px] sm:text-[45px]'
            variants={titleVariants}
          >
            what our clients says
          </motion.span>
        </motion.div>

        <motion.div
          className='flex lg:flex-row flex-col w-full items-center gap-6 justify-between'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {commentsArray.map((item) => (
            <motion.div
              key={item.name}
              className='flex w-full flex-col justify-between px-9 py-9 bg-white h-[350px] sm:h-[250px] lg:h-[400px] xl:h-[300px] lg:gap-0 gap-10'
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className='font-sans text-lg text-gray'>{item.body}</p>
              <div className='flex items-center gap-4'>
                <div className='bg-primary w-[50px] h-[1px]'></div>
                <span className='text-secondary font-oswald text-[22px] tracking-wider'>
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Comments
