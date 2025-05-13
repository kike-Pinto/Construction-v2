import { motion } from 'framer-motion'
import Button from '../Button'
import contactBg from '../../assets/images/contactBg.png'

const Contact = () => {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className='w-full lg:mt-40 mt-20 lg:h-[567px] flex items-center justify-center flex-col bg-cover bg-center lg:p-0 p-10 py-20'
      style={{ backgroundImage: `url(${contactBg})` }}
      id='contact'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className='flex flex-col items-start gap-4 px-5'
        variants={contentVariants}
      >
        <motion.span
          className='uppercase font-oswald font-bold lg:flex-[45px] text-[43px] text-white tracking-wide'
          variants={itemVariants}
        >
          Are you ready to start new project?
        </motion.span>

        <motion.p
          className='font-sans text-lg max-w-[700px] text-faded leading-10'
          variants={itemVariants}
        >
          If you have any projects in mind say hello at contact@yourinfo.com or
          just call us at +111 1234 2344 1234
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button variant='light' className='!mt-5 hover:bg-primary'>
            get in touch
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
