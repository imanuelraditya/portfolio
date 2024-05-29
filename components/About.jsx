import DevImg from './DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Imanuel Raditya',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+62 818 0620 8617',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'aditsuryajaya@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 28 August, 2003',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'BE in Information System and Technology (Expected)',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Jl. Lauser No. 44, Gunung, Kebayoran Baru, Jakarta Selatan',
    },    
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Institut Teknologi Bandung',
                qualification: 'Bachelor of Engineering in Information System and Technology (Expected)',
                years: '2021 - Present',
            },
            {
                university: 'SMA Negeri 34 Jakarta',
                qualification: 'High School (Science Major)',
                years: '2018 - 2021',
            },
            {
                university: 'SMP Negeri 19 Jakarta',
                qualification: 'Junior High School (Science Major)',
                years: '2015 - 2018',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Astra Credit Companies',
                role: 'Project Management IT Infrastructure Intern',
                years: 'Jun 2023 - Oct 2023',
            },
            {
                company: 'Himpunan Mahasiswa Informatika (HMIF) ITB',
                role: 'Career Development Staff',
                years: 'Jul 2023 - May 2024',
            },
            {
                company: 'Kementerian Museum Data Kabinet KM ITB',
                role: 'Data Operations Staff',
                years: 'Sep 2023 - Present',
            },
        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS, JavaScript, TypeScript',
            },
            {
                name: 'React, Bootstrap, TailwindCSS',
            },
            {
                name: 'Node.js, Express.js, NextJS',
            },
            {
                name: 'MongoDB, MySQL, PostgreSQL',
            },
            {
                name: 'Python, Java, C',
            },
            {
                name: 'Git, Docker, Azure',
            },
            {
                name: 'Jupyter Notebook, Tableau, Google Colab',
            }
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/gitlab.svg',
            },
            {
                imgPath: '/about/postman.svg',
            },
        ]
    },
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find(data => data.title === title)
    }

    return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
            <div className='flex flex-col xl:flex-row'>
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
                </div>
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className='text-lg mt-12 xl:mt-8'>
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>Keen Interest in Software</h3>
                                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>I am a third-year student majoring in Information System and Technology who is eager to learn and explore new things especially in the software engineering field backed with a background in data, technology, and business.</p>
                                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((data, index) =>  {
                                            return (
                                                <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                                                    <div className='text-primary'>{data.icon}</div>
                                                    <div>{data.text}</div>
                                                </div>
                                            )
                                        }
                                        )
                                    }
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='text-primary'>Language Skill</div>
                                        <div className='border-b border-border'></div>
                                        <div>English, Indonesia</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                                    <div className='grid md:grid-cols-2 gap-y-8'>
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <Briefcase />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'experience').data.map((data, index) => {
                                                    const {company, role, years} = data
                                                    return (
                                                        <div key={index} className='flex gap-x-8 group'>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                <div className='tex-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                <div className='text-base font-medium'>{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <GraduationCap size={28} />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'education').data.map((data, index) => {
                                                    const {university, qualification, years} = data
                                                    return (
                                                        <div key={index} className='flex gap-x-8 group'>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                <div className='tex-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                <div className='text-base font-medium'>{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='skills'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                                    <div className='mb-16'>
                                        <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        <div>
                                            {getData(skillData, 'skills').data.map((data, index) => {
                                                const {name} = data
                                                return (
                                                    <div key={index} className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'>
                                                        <div className='font-medium'>{name}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                                            {getData(skillData, 'tools').data.map((data, index) => {
                                                const {imgPath} = data
                                                return (
                                                    <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt='' priority />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About