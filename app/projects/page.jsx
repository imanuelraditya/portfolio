'use client'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../../components/ui/tabs'
import ProjectCard from '../../components/ProjectCard'

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

const uniqueCategories = ['all-projects', ...new Set(projectData.map(project => project.category))]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all-projects')

  const filteredProjects = projectData.filter(project => {
    return category === 'all-projects' ? project : project.category === category
  }
  )

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger key={index} value={category} className='capitalize w-[162px] md:w-auto' onClick={() => setCategory(category)}>
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects