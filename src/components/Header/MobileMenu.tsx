import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// Definición de tipos para los NavItems
interface NavItem {
  id: string
  title: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
  activeSection: string
  onNavItemClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
  onNavItemClick,
}) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 lg:hidden'>
      {/* Background overlay */}
      <div
        className='absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Menu content */}
      <div className='absolute right-0 top-0 h-full w-4/5 max-w-sm bg-black bg-opacity-90 flex flex-col p-6'>
        {/* Close button */}
        <button
          className='self-end text-white mb-8'
          onClick={onClose}
          aria-label='Close menu'
        >
          <FontAwesomeIcon icon={faXmark} className='w-8 h-8' />
        </button>

        {/* Navigation items */}
        <div className='flex flex-col gap-8 mt-6'>
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.title}
              onClick={(e) => {
                onNavItemClick(e, item.id)
                onClose()
              }}
              className={`font-oswald uppercase font-medium border-b pb-2 tracking-widest inline-block self-start ${
                activeSection === item.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-white'
              } hover:text-primary hover:border-primary transition-colors duration-300`}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Social media icons */}
        <div className='mt-auto mb-8 flex justify-center gap-6'>
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
      </div>
    </div>
  )
}

export default MobileMenu
