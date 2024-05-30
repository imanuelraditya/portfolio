import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'UI/UX Design',
    description: 'Creating visually appealing and user-friendly applications tailored to meet your brand`s unique identity. From wireframes to final designs, I ensure a seamless user experience across all devices.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description: 'Building robust and efficient websites using the latest technologies and best practices. Whether it`s a simple landing page or a complex web application, I deliver solutions that are fast, secure, and scalable.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Data Analytics',
    description: 'Transforming data into actionable insights to drive business decisions. I specialize in data visualization, statistical analysis, and predictive modeling to help you uncover trends, optimize processes, and achieve your goals.',
  },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((service, index) => {
            return (
              <Card key={index} className='w-full max-w-[424px] h-[300px] flex flex-none pt-16 pb-10 justify-center items-center relative'>
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{service.icon}</div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{service.title}</CardTitle>
                  <CardDescription className='text-lg'>{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services