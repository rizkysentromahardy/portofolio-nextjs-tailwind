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

      <section id='about ' className='pt-10' >
        <div className='flex flex-wrap'>
          <div className='bg-banner self-center w-full h-auto text-white text-center space-y-10 py-10'>
            <h1 className='label'>About Me</h1>
            <p className='m-6 text-center text-lg leading-relaxed'>
              I'm an enthusiastic UI UX Designer with 1 year experience. Skills in creating user interfaces, system design, prototyping, user research.<br></br> I use design thinking to help with product development and focus on user needs as well as being interested in technology developments</p>
            <div className='flex flex-row justify-center'>
              <div className='m-3 lg:m-6 flex flex-row space-x-4'>
                <h1 className='flex justify-center text-xl lg:text-4xl font-bold text-secondary m-2'>1+</h1>
                <div className='flex-col text-left'>
                  <div className='text-base m-1 font-base'>
                  <p>Work</p>
                  <p>Experiance</p>
                  </div>
                </div>
              </div>
              <div className='m-3 lg:m-6 flex flex-row space-x-4'>
                <h1 className='flex justify-center text-xl md:text-4xl font-bold text-secondary m-2'>3+</h1>
                <div className='flex-col m-1 text-left'>
                  <div className='text-base font-base'>
                  <p>Project</p>
                  <p>Freelance </p>
                  </div>
                </div>
              </div>
            </div>
            <h1 className='label'> Client Freelance</h1>
            <div className='card'>
              <div className='card-body'>
                  <div className='card-content'>
                    <Image src={profil} className='w-16 h-16 '></Image>
                  </div>
                  <p className='text-center m-6'>
                    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I </p>
              </div>
              <div className='card-body'>
                  <div className='card-content'>
                    <Image src={profil} className='w-16 h-16 '></Image>
                  </div>
                  <p className='text-center m-6'>
                    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I </p>
              </div>
              <div className='card-body'>
                  <div className='card-content'>
                    <Image src={profil} className='w-16 h-16 '></Image>
                  </div>
                  <p className='text-center m-6'>
                    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
