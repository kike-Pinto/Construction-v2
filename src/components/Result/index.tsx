import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { results } from '../../data'

interface CounterProps {
  value: string
  inView: boolean
}

const Counter: React.FC<CounterProps> = ({ value, inView }) => {
  const [count, setCount] = useState<number>(0)
  // Extraer el número y el sufijo (ej: "780+" -> numero: 780, sufijo: "+")
  const numericValue = parseInt(value.replace(/\D/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    // Resetear contador cuando no está visible
    if (!inView) {
      setCount(0)
      return
    }

    // Si está en vista, iniciar la animación
    if (inView) {
      let start = 0
      const end = numericValue
      const duration = 2000 // duración en ms
      const incrementTime = 30 // actualizar cada 30ms

      // Calculamos cuánto incrementar en cada paso
      const totalSteps = duration / incrementTime
      const incrementValue = end / totalSteps

      const timer = setInterval(() => {
        start += incrementValue
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [inView, numericValue])

  return (
    <span className='font-oswald text-logos font-bold text-[102px] leading-tight hover:text-primary cursor-default transition-colors'>
      {count}
      {suffix}
    </span>
  )
}

const Result: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <div
      ref={ref}
      className='w-full lg:h-[430px] bg-gray2 flex items-center justify-center px-5 py-20 lg:py-0'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-10 w-full max-w-6xl'>
        {results.map((item) => (
          <motion.div
            key={item.title}
            className='flex flex-col items-center text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Counter value={item.value} inView={isInView} />
            <span className='text-secondary font-oswald text-lg uppercase'>
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Result
