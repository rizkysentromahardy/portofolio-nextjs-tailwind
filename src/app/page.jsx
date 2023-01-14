import { Inter } from '@next/font/google'
import Image from 'next/image'
import profil from './assets/img/profile.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section id='home' className='pt-10'>
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 lg:w-1/2 '>
              <h1 className='text-2xl font-bold text-text md:text-4xl lg:text-5xl'>
                Hi,
              </h1>
              <span className='block text-main font-bold mt-3 text-3xl lg:text-5xl'><span className='text-text'>I am</span> Rizky Sentro Mahardy</span>
              <h2 className='text-lg lg:text-xl font-semibold text-text mt-3 '>UI/UX Designer</h2>
              <p className='text-lg mt-8 font-normal text-text leading-relaxed'> Enthusiastic UI UX Designer, Research Specialist, icon design, product development and web development </p>
              <button className='mt-8 px-8 py-4 rounded-full bg-main font-semibold text-white'>
                <p>Get in touch </p>
              </button>
            </div>
            <div className='w-full px-4 lg:w-1/2'>
              <div className='mt-10 lg:right-0'>
                <Image src={profil} alt="Rizk" className='object-fit max-w-full mx-auto lg:scale-90'></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='about'>
        <div className='flex flex-wrap'>
          <div className='bg-banner self-center w-full h-auto text-white text-center pt-10 pb-10 px-6'>
            <h1 className='text-center text-2xl font-bold'>About Me</h1>
            <p className='pt-10 text-center'>
              I'm an enthusiastic UI UX Designer with 1 year experience.Skills in creating user interfaces, system design, prototyping, user research.<br></br> I use design thinking to help with product development and focus on user needs as well as being interested in technology developments</p>
            <div className='flex flex-row justify-center'>
              <div className='m-3 lg:m-6 flex flex-row pl-2'>
                <h1 className='text-4xl font-bold pl-2 text-secondary pr-2 text- m-2'>1 +</h1>
                <div className='flex-col m-1 text-left'>
                  <p className='text-base font-thin'>Work</p>
                  <p className='text-base font-thin'>Experiance</p>
                </div>
              </div>
              <div className='m-3 lg:m-6 flex flex-row pl-2'>
                <h1 className='text-4xl font-bold pl-2 text-secondary pr-2 text- m-2'>3 +</h1>
                <div className='flex-col m-1 text-left'>
                  <p className='text-base font-thin'>Project</p>
                  <p className='text-base font-thin'>Freelance </p>
                </div>
              </div>
            </div>
            <h1 className='pt-10 text-2xl font-bold'> Client Freelance</h1>
            <div className='flex flex-row justify-center space-x-8'>
              <div className='max-w-xl rounded overflow-hidden shadow-lg bg-main px-4 py-2'>p</div>
              <div className='bg-main'>p</div>
              <div className='bg-main'>p</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
