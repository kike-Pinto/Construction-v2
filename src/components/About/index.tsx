// import Button from '../Button'
// import Titlebar from '../Titlebar'

// const About = () => {
//   return (
//     <div
//       className='w-full flex items-center justify-between px-5 bg-gray2 lg:h-[514px] lg:p-0 p-10 py-20'
//       id='about'
//     >
//       <div className='container mx-auto flex lg:flex-row flex-col items-center w-full  gap-10 lg:px-20 px-5'>
//         <div className='flex flex-col gap-4'>
//           <Titlebar title='About us' />
//           <span className='uppercase font-oswald font-bold text-[45px] leading-[55px] text-secondary lg:max-w-[450px]'>
//             Recognize more about our company
//           </span>
//         </div>
//         <div className='flex flex-col gap-3 lg:max-w-[640px] max-w-full'>
//           <span className='font-sans font-semibold text-lg text-secondary'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
//             ex?
//           </span>
//           <p className='text-gray font-sans text-lg'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
//             doloremque deleniti aut sapiente facilis ea.
//           </p>
//           <Button className='!h-[54px] mt-8 hover:bg-primary hover:text-black'>
//             about us
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About

import { motion } from 'framer-motion'
import Button from '../Button'
import Titlebar from '../Titlebar'

const About = () => {
  return (
    <div
      className='w-full flex items-center justify-between px-5 bg-gray2 lg:h-[514px] lg:p-0 p-10 py-20'
      id='about'
    >
      <div className='container mx-auto flex lg:flex-row flex-col items-center w-full gap-10 lg:px-20 px-5'>
        {/* Primer bloque de contenido animado de arriba hacia abajo */}
        <motion.div
          className='flex flex-col gap-4'
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Titlebar title='About us' />
          <span className='uppercase font-oswald font-bold text-[45px] leading-[55px] text-secondary lg:max-w-[450px]'>
            Recognize more about our company
          </span>
        </motion.div>

        {/* Segundo bloque con texto y botón animado de abajo hacia arriba */}
        <motion.div
          className='flex flex-col gap-3 lg:max-w-[640px] max-w-full'
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className='font-sans font-semibold text-lg text-secondary'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            ex?
          </span>
          <p className='text-gray font-sans text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            doloremque deleniti aut sapiente facilis ea.
          </p>

          {/* Botón animado entrando desde la derecha */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className='!h-[54px] mt-8 hover:bg-primary hover:text-black'>
              about us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
