import React, { useState, useEffect } from 'react'
import bg from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.svg'
import { navItems } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import MobileMenu from './MobileMenu'

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  // Función para navegar a la sección correspondiente
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ): void => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  // Detectar qué sección está actualmente en el viewport
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 100 // Pequeño offset para mejorar la detección

      // Verificar cada sección y determinar cuál está actualmente visible
      navItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(item.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Manejar el bloqueo del scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  return (
    <div
      className='w-full flex items-center justify-center relative py-32 bg-cover bg-center'
      style={{ backgroundImage: `url(${bg})` }}
      id='home'
    >
      <div className='absolute top-9 px-6 sm:px-12 w-full flex items-center justify-between'>
        <img src={logo} alt='logo' className='z-10' />

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-10 '>
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.title}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`font-oswald uppercase font-medium text-sm xl:text-base border-b pb-2 tracking-widest ${
                activeSection === item.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-white'
              } hover:text-primary hover:border-primary transition-colors duration-300`}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Social Media - Desktop */}
        <div className='hidden lg:flex items-center gap-6'>
          <FontAwesomeIcon
            icon={faFacebook}
            className='w-6 h-6 text-white hover:text-primary cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className='w-6 h-6 text-white hover:text-primary cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className='w-6 h-6 text-white hover:text-primary cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className='w-6 h-6 text-white hover:text-primary cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faBehance}
            className='w-6 h-6 text-white hover:text-primary cursor-pointer'
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-white z-10'
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label='Open menu'
        >
          <FontAwesomeIcon icon={faBars} className='w-8 h-8' />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        onNavItemClick={scrollToSection}
      />

      <div className='flex flex-col gap-12 lg:items-start items-center lg:px-0 px-6 sm:px-12'>
        <motion.div
          className='text-white font-semibold font-oswald lg:text-[100px] text-[45px] lg:leading-[140px] tracking-wide uppercase lg:max-w-[80vw] lg:text-left text-center mt-16'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          We are the best construction company
        </motion.div>

        {/* Botón animado de derecha a izquierda */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button variant='light' className='hover:bg-primary'>
            view our projects
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
