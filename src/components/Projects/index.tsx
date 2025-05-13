// import { useState, useEffect, useRef } from 'react'
// import { projectCats, projects } from '../../data'
// import Titlebar from '../Titlebar'

// const Projects = () => {
//   const [cats, setCats] = useState(projectCats)
//   const [filteredProjects, setFilteredProjects] = useState(projects)
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const sliderRef = useRef<HTMLDivElement>(null)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [scrollLeft, setScrollLeft] = useState(0)
//   const [dragDistance, setDragDistance] = useState(0)

//   // Filter projects when category changes
//   useEffect(() => {
//     const activeCategory = cats.find((cat) => cat.active)?.title
//     if (activeCategory === 'All') {
//       setFilteredProjects([...projects])
//     } else {
//       const filtered = projects.filter(
//         (project) => project.category === activeCategory
//       )
//       setFilteredProjects(filtered)
//     }
//     // Reset current index when filter changes
//     setCurrentIndex(0)
//   }, [cats])

//   const handleCategoryClick = (catTitle: string) => {
//     setCats((prevCats) =>
//       prevCats.map((cat) => ({
//         ...cat,
//         active: cat.title === catTitle,
//       }))
//     )
//   }

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === filteredProjects.length - 1 ? 0 : prev + 1
//     )
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? filteredProjects.length - 1 : prev - 1
//     )
//   }

//   // Get the visible projects properly based on how many are available
//   const getVisibleProjects = () => {
//     if (filteredProjects.length === 0) return []

//     // If we have fewer than 3 projects, just return all of them
//     if (filteredProjects.length < 3) {
//       return filteredProjects
//     }

//     // Otherwise get prev, current, next
//     const prev =
//       currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
//     const next =
//       currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1

//     return [
//       filteredProjects[prev],
//       filteredProjects[currentIndex],
//       filteredProjects[next],
//     ]
//   }

//   const visibleProjects = getVisibleProjects()

//   // Mouse drag handlers
//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (!sliderRef.current) return
//     setIsDragging(true)
//     setStartX(e.pageX - sliderRef.current.offsetLeft)
//     setScrollLeft(sliderRef.current.scrollLeft)
//     setDragDistance(0)
//   }

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging || !sliderRef.current) return
//     e.preventDefault()
//     const x = e.pageX - sliderRef.current.offsetLeft
//     const walk = (x - startX) * 2 // Scroll speed multiplier
//     sliderRef.current.scrollLeft = scrollLeft - walk
//     setDragDistance(Math.abs(x - startX))
//   }

//   const handleMouseUp = () => {
//     if (!isDragging) return
//     setIsDragging(false)

//     // If there was minimal drag, consider it a click and advance to next slide
//     if (dragDistance < 5 && filteredProjects.length > 1) {
//       nextSlide()
//       return
//     }

//     if (!sliderRef.current) return

//     // Determine which slide is most visible and set it as current
//     if (sliderRef.current.scrollWidth > 0 && filteredProjects.length > 1) {
//       const slideWidth = sliderRef.current.scrollWidth / visibleProjects.length
//       const centerPosition =
//         sliderRef.current.scrollLeft + sliderRef.current.offsetWidth / 2

//       // Adjust calculation based on visible projects
//       if (visibleProjects.length === 3) {
//         // For 3 visible items, map the center position to the actual index
//         const visibleIndex = Math.floor(centerPosition / slideWidth)
//         if (visibleIndex === 0) {
//           prevSlide()
//         } else if (visibleIndex === 2) {
//           nextSlide()
//         }
//         // If visibleIndex is 1, we're already on the correct slide, so do nothing
//       } else {
//         // Direct mapping for 1 or 2 items
//         const newIndex = Math.min(
//           Math.max(0, Math.round(centerPosition / slideWidth)),
//           filteredProjects.length - 1
//         )
//         setCurrentIndex(newIndex)
//       }
//     }
//   }

//   const handleMouseLeave = () => {
//     if (isDragging) {
//       setIsDragging(false)
//     }
//   }

//   // Handle clicking on pagination dots
//   const handleDotClick = (index: number) => {
//     setCurrentIndex(index)
//   }

//   return (
//     <div
//       className='lg:mt-40 mt-20 w-full flex flex-col lg:items-center justify-center gap-20 px-5'
//       id='projects'
//     >
//       <div className='container mx-auto lg:px-20 px-5'>
//         <div className='flex flex-col gap-4 mb-10'>
//           <Titlebar title='Latest Projects' />
//           <span className='uppercase font-oswald font-bold text-[45px] leading-[55px] text-secondary lg:max-w-[450px]'>
//             explore our works
//           </span>
//           <div className='hidden lg:flex items-center gap-14 mt-5'>
//             {cats.map((item) => (
//               <div
//                 key={item.title}
//                 onClick={() => handleCategoryClick(item.title)}
//                 className={`font-sans text-lg cursor-pointer ${
//                   item.active ? 'text-primary' : 'text-disabled'
//                 } hover:text-primary transition-colors duration-300`}
//               >
//                 {item.title}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile category selector */}
//         <div className='lg:hidden flex flex-wrap gap-4 mb-10'>
//           {cats.map((item) => (
//             <div
//               key={item.title}
//               onClick={() => handleCategoryClick(item.title)}
//               className={`font-sans text-sm cursor-pointer px-3 py-1 border ${
//                 item.active
//                   ? 'text-primary border-primary'
//                   : 'text-disabled border-disabled'
//               } hover:text-primary hover:border-primary transition-colors duration-300`}
//             >
//               {item.title}
//             </div>
//           ))}
//         </div>

//         {filteredProjects.length > 0 ? (
//           <div className='w-full relative'>
//             <div className='flex items-center justify-center'>
//               {/* Projects slider with drag functionality */}
//               <div
//                 ref={sliderRef}
//                 className={`w-full flex items-center gap-4 ${
//                   isDragging ? 'cursor-grabbing' : 'cursor-grab'
//                 } overflow-x-auto scrollbar-hide`}
//                 style={{
//                   scrollBehavior: isDragging ? 'auto' : 'smooth',
//                   overflowX: 'scroll',
//                   scrollbarWidth: 'none',
//                   msOverflowStyle: 'none',
//                 }}
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {visibleProjects.map((project, index) => {
//                   // For single project, make it centered and large
//                   if (visibleProjects.length === 1) {
//                     return (
//                       <div
//                         key={`${project.title}-${index}`}
//                         className='flex flex-col gap-4 transition-all duration-300 w-full md:w-2/5 z-10'
//                       >
//                         <div className='overflow-hidden h-64 md:h-96'>
//                           <img
//                             src={project.image}
//                             alt={project.title}
//                             className='w-full h-full object-cover transition-transform duration-300'
//                             style={{ transform: 'scale(1.1)' }}
//                           />
//                         </div>
//                         <span className='uppercase text-secondary font-oswald font-medium text-center text-xl md:text-2xl'>
//                           {project.title}
//                         </span>
//                       </div>
//                     )
//                   }

//                   // For two projects, make them side by side
//                   if (visibleProjects.length === 2) {
//                     return (
//                       <div
//                         key={`${project.title}-${index}`}
//                         className='flex flex-col gap-4 transition-all duration-300 w-[45%] md:w-[35%]'
//                       >
//                         <div className='overflow-hidden h-64 md:h-80'>
//                           <img
//                             src={project.image}
//                             alt={project.title}
//                             className='w-full h-full object-cover'
//                           />
//                         </div>
//                         <span className='uppercase text-secondary font-oswald font-medium text-center text-xl md:text-2xl'>
//                           {project.title}
//                         </span>
//                       </div>
//                     )
//                   }

//                   // For three or more projects, use the standard layout
//                   return (
//                     <div
//                       key={`${project.title}-${index}`}
//                       className={`flex flex-col gap-4 transition-all duration-300 ${
//                         index === 1
//                           ? 'w-full md:w-2/5 z-10'
//                           : 'hidden md:block md:w-1/4 opacity-70'
//                       }`}
//                     >
//                       <div
//                         className={`overflow-hidden ${
//                           index === 1 ? 'h-64 md:h-96' : 'h-52 md:h-72'
//                         }`}
//                       >
//                         <img
//                           src={project.image}
//                           alt={project.title}
//                           className='w-full h-full object-cover transition-transform duration-300'
//                           style={index === 1 ? { transform: 'scale(1.1)' } : {}}
//                         />
//                       </div>
//                       <span className='uppercase text-secondary font-oswald font-medium text-center text-xl md:text-2xl'>
//                         {project.title}
//                       </span>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* Pagination dots */}
//             {filteredProjects.length > 1 && (
//               <div className='flex justify-center mt-6 gap-2'>
//                 {filteredProjects.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleDotClick(index)}
//                     className={`w-3 h-3 rounded-full ${
//                       currentIndex === index
//                         ? 'bg-primary'
//                         : 'bg-gray-300 border border-gray'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className='w-full text-center py-16'>
//             <p className='text-lg text-gray-500'>
//               No projects found in this category.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Projects

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { projectCats, projects } from '../../data'
import Titlebar from '../Titlebar'

const Projects = () => {
  const [cats, setCats] = useState(projectCats)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [dragDistance, setDragDistance] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Filter projects when category changes
  useEffect(() => {
    const activeCategory = cats.find((cat) => cat.active)?.title
    if (activeCategory === 'All') {
      setFilteredProjects([...projects])
    } else {
      const filtered = projects.filter(
        (project) => project.category === activeCategory
      )
      setFilteredProjects(filtered)
    }
    setCurrentIndex(0)
    setHasAnimated(false)
  }, [cats])

  const handleCategoryClick = (catTitle: string) => {
    setCats((prevCats) =>
      prevCats.map((cat) => ({
        ...cat,
        active: cat.title === catTitle,
      }))
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    )
  }

  const getVisibleProjects = () => {
    if (filteredProjects.length === 0) return []

    if (filteredProjects.length < 3) {
      return filteredProjects
    }

    const prev =
      currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    const next =
      currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1

    return [
      filteredProjects[prev],
      filteredProjects[currentIndex],
      filteredProjects[next],
    ]
  }

  const visibleProjects = getVisibleProjects()

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current || isAnimating) return
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
    setDragDistance(0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
    setDragDistance(Math.abs(x - startX))
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (dragDistance < 5 && filteredProjects.length > 1) {
      nextSlide()
      return
    }

    if (!sliderRef.current) return

    if (sliderRef.current.scrollWidth > 0 && filteredProjects.length > 1) {
      const slideWidth = sliderRef.current.scrollWidth / visibleProjects.length
      const centerPosition =
        sliderRef.current.scrollLeft + sliderRef.current.offsetWidth / 2

      if (visibleProjects.length === 3) {
        const visibleIndex = Math.floor(centerPosition / slideWidth)
        if (visibleIndex === 0) {
          nextSlide()
        } else if (visibleIndex === 2) {
          prevSlide()
        }
      } else {
        const newIndex = Math.min(
          Math.max(0, Math.round(centerPosition / slideWidth)),
          filteredProjects.length - 1
        )
        setCurrentIndex(newIndex)
      }
    }
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  // Framer Motion Variants
  const headerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
      },
    }),
  }

  // New animation variants (left to right)
  const projectLeftVariant = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  }

  const projectCenterVariant = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  }

  const projectRightVariant = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  }

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setHasAnimated(true)
    }, 1800)
    return () => clearTimeout(timer)
  }, [currentIndex, cats])

  return (
    <div
      className='lg:mt-40 mt-20 w-full flex flex-col lg:items-center justify-center gap-20 px-5'
      id='projects'
    >
      <div className='container mx-auto lg:px-20 px-5'>
        <div className='flex flex-col gap-4 mb-10'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            custom={0}
            variants={headerVariants}
          >
            <Titlebar title='Latest Projects' />
          </motion.div>

          <motion.span
            className='uppercase font-oswald font-bold text-[45px] leading-[55px] text-secondary lg:max-w-[450px]'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            custom={1}
            variants={headerVariants}
          >
            explore our works
          </motion.span>

          <motion.div
            className='hidden lg:flex items-center gap-14 mt-5'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            custom={2}
            variants={headerVariants}
          >
            {cats.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index + 3}
                variants={headerVariants}
                onClick={() => handleCategoryClick(item.title)}
                className={`font-sans text-lg cursor-pointer ${
                  item.active ? 'text-primary' : 'text-disabled'
                } hover:text-primary transition-colors duration-300`}
              >
                {item.title}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile category selector */}
        <motion.div
          className='lg:hidden flex flex-wrap gap-4 mb-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={2}
          variants={headerVariants}
        >
          {cats.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index + 3}
              variants={headerVariants}
              onClick={() => handleCategoryClick(item.title)}
              className={`font-sans text-sm cursor-pointer px-3 py-1 border ${
                item.active
                  ? 'text-primary border-primary'
                  : 'text-disabled border-disabled'
              } hover:text-primary hover:border-primary transition-colors duration-300`}
            >
              {item.title}
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className='w-full relative'>
            <div className='flex items-center justify-center'>
              <div
                ref={sliderRef}
                className={`w-full flex items-center gap-4 ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                } overflow-x-auto scrollbar-hide`}
                style={{
                  scrollBehavior: isDragging ? 'auto' : 'smooth',
                  overflowX: 'scroll',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                {visibleProjects.map((project, index) => {
                  if (visibleProjects.length === 1) {
                    return (
                      <motion.div
                        key={`${project.title}-${index}`}
                        className='flex flex-col gap-4 transition-all duration-300 w-full md:w-2/5 z-10'
                        initial='hidden'
                        animate={hasAnimated ? 'visible' : 'hidden'}
                        variants={projectCenterVariant}
                      >
                        <div className='overflow-hidden h-64 md:h-96'>
                          <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover transition-transform duration-300'
                            style={{ transform: 'scale(1.1)' }}
                          />
                        </div>
                        <span className='uppercase text-secondary font-oswald font-medium text-center text-xl md:text-2xl'>
                          {project.title}
                        </span>
                      </motion.div>
                    )
                  }

                  if (visibleProjects.length === 2) {
                    return (
                      <motion.div
                        key={`${project.title}-${index}`}
                        className='flex flex-col gap-4 transition-all duration-300 w-[45%] md:w-[35%]'
                        initial='hidden'
                        animate={hasAnimated ? 'visible' : 'hidden'}
                        variants={
                          index === 0 ? projectLeftVariant : projectRightVariant
                        }
                      >
                        <div className='overflow-hidden h-64 md:h-80'>
                          <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <span className='uppercase text-secondary font-oswald font-medium text-center text-xl md:text-2xl'>
                          {project.title}
                        </span>
                      </motion.div>
                    )
                  }

                  let projectVariant
                  if (index === 0) {
                    projectVariant = projectLeftVariant
                  } else if (index === 1) {
                    projectVariant = projectCenterVariant
                  } else {
                    projectVariant = projectRightVariant
                  }

                  return (
                    <motion.div
                      key={`${project.title}-${index}`}
                      className={`flex flex-col gap-4 transition-all duration-300 ${
                        index === 1
                          ? 'w-full md:w-2/5 z-10'
                          : 'hidden md:block md:w-1/4 opacity-70'
                      }`}
                      initial='hidden'
                      animate={hasAnimated ? 'visible' : 'hidden'}
                      variants={projectVariant}
                    >
                      <div
                        className={`overflow-hidden ${
                          index === 1 ? 'h-64 md:h-96' : 'h-52 md:h-72'
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className='w-full h-full object-cover transition-transform duration-300'
                          style={index === 1 ? { transform: 'scale(1.1)' } : {}}
                        />
                      </div>
                      <span className='uppercase text-secondary font-oswald font-medium text-center text-xl md:text-2xl'>
                        {project.title}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {filteredProjects.length > 1 && (
              <div className='flex justify-center mt-6 gap-2'>
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index
                        ? 'bg-primary'
                        : 'bg-gray-300 border border-gray'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <motion.div
            className='w-full text-center py-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className='text-lg text-gray-500'>
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects
