import { motion } from 'framer-motion'
import banner from '../../assets/images/banner.png'
import { features } from '../../data'
import Button from '../Button'

const Banner = () => {
  // Variantes de animación para Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const featureVariants = {
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
      className='w-full lg:mt-40 mt-20 bg-cover bg-center pb-10'
      style={{ backgroundImage: `url(${banner})` }}
    >
      <motion.div
        className='container mx-auto flex lg:flex-row flex-col items-center justify-between lg:py-28 py-10 lg:px-20 px-5'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            className={`flex flex-col lg:items-start items-center gap-5 mt-20 lg:mt-0 ${
              index > 0 ? 'lg:ml-8' : ''
            }`}
            variants={featureVariants}
            custom={index}
          >
            <span className='text-white font-sans font-bold lg:text-left text-center text-[30px] max-w-[240px] leading-[40px]'>
              {item.title}
            </span>
            <p className='text-faded font-sans text-base lg:text-left text-center'>
              {item.description}
            </p>
            <Button className='!h-[54px] mt-2 hover:bg-white hover:text-primary'>
              read more
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Banner
