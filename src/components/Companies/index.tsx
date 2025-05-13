import { motion } from 'framer-motion'
import { companies } from '../../data'

const Companies = () => {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className='container mx-auto py-10 lg:py-0 lg:px-20 px-5'>
      <motion.div
        className='w-full lg:mt-40 mt-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {companies.map((item) => (
            <motion.div
              key={item.id}
              className='flex items-center justify-center h-[188px] border-l-[6px] cursor-pointer border-gray2 bg-gray2 hover:!border-primary hover:bg-secondary transition-all duration-300'
              variants={itemVariants}
            >
              <img src={item.image} alt={item.id.toString()} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Companies
