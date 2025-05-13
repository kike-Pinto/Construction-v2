import { motion } from 'framer-motion'
import { team } from '../../data'
import Titlebar from '../Titlebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Team = () => {
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

  return (
    <div className='w-full lg:mt-40 mt-20 px-5 flex flex-col gap-14' id='team'>
      <div className='container mx-auto lg:px-20 px-5'>
        <motion.div
          className='flex flex-col gap-4 mb-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Titlebar title='meet our team' />
          <motion.span
            className='uppercase text-secondary font-oswald font-bold text-[30px] sm:text-[45px]'
            variants={itemVariants}
          >
            our professional team
          </motion.span>
        </motion.div>

        <motion.div
          className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {team.map((item, index) => (
            <motion.div
              key={item.name}
              className='flex flex-col gap-4'
              variants={itemVariants}
              custom={index}
            >
              {/* Contenedor de la imagen con overlay */}
              <motion.div
                className='relative group overflow-hidden'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Imagen */}
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full transition-all duration-300 group-hover:brightness-50'
                />

                {/* Overlay con redes sociales - aparece en hover */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='w-6 h-6 text-white hover:text-primary cursor-pointer transition-colors'
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='w-6 h-6 text-white hover:text-primary cursor-pointer transition-colors'
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className='w-6 h-6 text-white hover:text-primary cursor-pointer transition-colors'
                  />
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className='w-6 h-6 text-white hover:text-primary cursor-pointer transition-colors'
                  />
                  <FontAwesomeIcon
                    icon={faBehance}
                    className='w-6 h-6 text-white hover:text-primary cursor-pointer transition-colors'
                  />
                </div>
              </motion.div>

              {/* Información del miembro del equipo */}
              <motion.div
                className='flex flex-col items-center justify-center gap-1'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className='uppercase text-secondary font-oswald font-medium text-[28px] tracking-wide'>
                  {item.name}
                </span>
                <span className='font-sans text-lg text-teams'>
                  {item.role}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Team
