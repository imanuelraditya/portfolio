'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        image: '/work/1.png',
        category: 'fullstack',
        name: 'Mealshub',
        description: 'A website based system named MealsHub for ordering menu and payment with multiple user;',
        link: '',
        github: 'https://github.com/imanuelraditya/Mealshub',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'Plantix',
        description: 'A website based system named Plantix for monitoring plant condition around the farm;',
        link: 'https://tubes-lasti-plantix.vercel.app/',
        github: 'https://github.com/imanuelraditya/Plantix',
    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: 'ShoeWizards',
        description: 'A microservice that can give shoe care recommendation based on shoe type and size;',
        link: 'https://shoewizards-tst-frontend.vercel.app/',
        github: 'https://github.com/imanuelraditya/Shoewizards-Service-FE',
    },
    {
        image: '/work/4.png',
        category: 'user-interface',
        name: 'GreenPlates',
        description: 'A design interface for an application named GreenPlates that help user finds healthy foods;',
        link: 'https://www.figma.com/proto/PDWMj7v0Nq4nYCd4wRXxp9/GreenPlates-IMK?page-id=280%3A14166&type=design&node-id=1362-12927&viewport=-14927%2C-5163%2C1.37&t=9EQK6ka9SVid2UKC-1&scaling=scale-down&starting-point-node-id=1362%3A12927&show-proto-sidebar=1&mode=design',
        github: '',
    },
    {
      image: '/work/5.png',
      category: 'desktop app',
      name: 'Sim-Plicity',
      description: 'A simplification of The Sims Game using pixel art and simple game mechanics;',
      link: 'https://www.figma.com/proto/PDWMj7v0Nq4nYCd4wRXxp9/GreenPlates-IMK?page-id=280%3A14166&type=design&node-id=1362-12927&viewport=-14927%2C-5163%2C1.37&t=9EQK6ka9SVid2UKC-1&scaling=scale-down&starting-point-node-id=1362%3A12927&show-proto-sidebar=1&mode=design',
      github: '',
    },
  ]

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className='container mx-auto'>
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Latest Projects</h2>
                <p className='subtitle mb-8'>Here are some of my projects during my study.</p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{640: {
                    slidesPerView: 2
                }}} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work