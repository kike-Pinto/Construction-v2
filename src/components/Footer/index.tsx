// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faBehance,
//   faFacebook,
//   faInstagram,
//   faLinkedin,
//   faXTwitter,
// } from '@fortawesome/free-brands-svg-icons'
// import logo from '../../assets/images/logoBlack.svg'

// const Footer = () => {
//   return (
//     <div className='container mx-auto w-full lg:mt-40 mt-20 flex flex-col'>
//       <div className='w-full flex lg:flex-row flex-col items-start justify-between pb-[100px] px-5 lg:gap-0 gap-16'>
//         <div className='flex flex-col gap-5'>
//           <img src={logo} alt='logo' className='w-[150px]' />
//           <span className='font-sans max-w-[280px] text-gray'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//           </span>
//         </div>
//         <div className='flex flex-col gap-5'>
//           <span className='text-primary font-sans'>About</span>
//           <a href='#' className='text-gray font-sans'>
//             Terms & Conditions
//           </a>
//           <a href='#' className='text-gray font-sans'>
//             Privacy Policy
//           </a>
//           <a href='#' className='text-gray font-sans'>
//             Career
//           </a>
//           <a href='#' className='text-gray font-sans'>
//             Contact
//           </a>
//           <a href='#' className='text-gray font-sans'>
//             Help
//           </a>
//         </div>
//         <div className='flex flex-col gap-5'>
//           <span className='text-primary font-sans'>Quick Links</span>
//           <a href='#' className='text-gray font-sans'>
//             Newsletter
//           </a>
//           <a href='#' className='text-gray font-sans'>
//             Articles
//           </a>
//           <a href='#' className='text-gray font-sans'>
//             Location
//           </a>
//         </div>
//         <div className='flex flex-col gap-5'>
//           <span className='text-gray font-sans max-w-[240px]'>
//             163 Cerro Dragon, Iquique Chile
//           </span>
//           <a href='#' className='text-gray font-sans'>
//             (+089) 234-516-6123
//           </a>
//           <a href='#' className='text-gray font-sans'>
//             info@yourinfo.com
//           </a>
//         </div>
//       </div>
//       <div className='w-full flex lg:flex-row flex-col items-center justify-between border-t lg:h-[80px] lg:gap-0 gap-10 py-5 border-[#DADADA] px-5'>
//         <span className='font-sans text-gray lg:text-left text-center'>
//           ©2025 Construccion-Metales | Desarrollado por:
//           <a
//             href='#'
//             target='_blank'
//             className='font-bold text-secondary hover:text-primary'
//           >
//             {' '}
//             WebSoftwareDesarrollo
//           </a>
//         </span>
//         <div className='flex items-center gap-6'>
//           <FontAwesomeIcon
//             icon={faFacebook}
//             className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
//           />
//           <FontAwesomeIcon
//             icon={faInstagram}
//             className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
//           />
//           <FontAwesomeIcon
//             icon={faLinkedin}
//             className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
//           />
//           <FontAwesomeIcon
//             icon={faXTwitter}
//             className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
//           />
//           <FontAwesomeIcon
//             icon={faBehance}
//             className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/images/logoBlack.svg'

const Footer = () => {
  return (
    <div className='container mx-auto w-full lg:mt-40 mt-20 flex flex-col'>
      <div
        className='w-full flex lg:flex-row flex-col items-start justify-between pb-[100px] px-5 lg:gap-0 gap-16
                     md:flex-row md:flex-wrap md:gap-16 md:max-lg:justify-start'
      >
        <div className='flex flex-col gap-5 md:max-lg:w-5/12'>
          <img src={logo} alt='logo' className='w-[150px]' />
          <span className='font-sans max-w-[280px] text-gray'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem
            saepe magnam laborum mollitia non vitae ipsum sequi fugit eveniet
            nisi, unde, deserunt amet! Alias nihil quis soluta enim blanditiis?
          </span>
        </div>
        <div className='flex flex-col gap-5 md:max-lg:w-5/12'>
          <span className='text-primary font-sans'>About</span>
          <a href='#' className='text-gray font-sans'>
            Terms & Conditions
          </a>
          <a href='#' className='text-gray font-sans'>
            Privacy Policy
          </a>
          <a href='#' className='text-gray font-sans'>
            Career
          </a>
          <a href='#' className='text-gray font-sans'>
            Contact
          </a>
          <a href='#' className='text-gray font-sans'>
            Help
          </a>
        </div>
        <div className='flex flex-col gap-5 md:max-lg:w-5/12'>
          <span className='text-primary font-sans'>Quick Links</span>
          <a href='#' className='text-gray font-sans'>
            Newsletter
          </a>
          <a href='#' className='text-gray font-sans'>
            Articles
          </a>
          <a href='#' className='text-gray font-sans'>
            Location
          </a>
        </div>
        <div className='flex flex-col gap-5 md:max-lg:w-5/12'>
          <span className='text-primary font-sans'>Address</span>
          <span className='text-gray font-sans max-w-[240px]'>
            163 Cerro Dragon, Iquique Chile
          </span>
          <a href='#' className='text-gray font-sans'>
            (+089) 234-516-6123
          </a>
          <a href='#' className='text-gray font-sans'>
            info@yourinfo.com
          </a>
        </div>
      </div>
      <div className='w-full flex lg:flex-row flex-col items-center justify-between border-t lg:h-[80px] lg:gap-0 gap-10 py-5 border-[#DADADA] px-5'>
        <span className='font-sans text-gray lg:text-left text-center'>
          ©2025 Construccion-Metales | Desarrollado por:
          <a
            href='#'
            target='_blank'
            className='font-bold text-secondary hover:text-primary'
          >
            WebSoftwareDesarrollo
          </a>
        </span>
        <div className='flex items-center gap-6'>
          <FontAwesomeIcon
            icon={faFacebook}
            className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faBehance}
            className='w-6 h-6 text-gray hover:text-primary cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
