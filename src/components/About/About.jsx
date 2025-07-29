import React from 'react'
// import { TypeAnimation } from 'react-type-animation'
import ReactTypingEffect from 'react-typing-effect'
import profileImage from '../../assets/profile.jpg'
import Tilt from 'react-parallax-tilt';
import CV from '../../assets/Subhajit_Guchhait.pdf'


export default function About() {
  return (
    <section id='about' className='py-4 pb-5 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-22 lg:mt-18'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
        {/* Left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight'>
            Subhajit Guchhait
          </h2>
          {/* Skill heading with typeffect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
             {/* <ReactTypingEffect
              text={[
                "Frontend Developer",
                "Wordpress Developer",
                "UI/UX Designer"
              ]}

              speed={100}
              eraseSpeed={50}
              eraseDelay={500}
              typingDelay={500}
              cursorRenderer={(cursor)=>(
                <span className='text-[#8245ec]'>{cursor}</span>
              )}
            
            />    */}

            {/* <TypeAnimation
  sequence={['Hello', 1000, 'World', 1000]}
  speed={50}
  repeat={Infinity}
/> */}

{/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /> */}
             
          </h3>



          {/* About me paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-19 mt-8 leading-relaxed'>Enthusiastic and detail-oriented Frontend Developer with 2+ years of experience creating responsive, user
friendly web applications. Skilled in backend development using 
CodeIgniter. Adept at collaborating with cross-functional teams, contributing to technical documentation, and 
participating in client meetings. Committed to building intuitive interfaces and delivering seamless digital 
experiences across devices.</p>
            <a href={CV} target='_blank' rel='noopener noreferrer' className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 '  style={{background:'linear-gradient(90deg, #8245ec,#a855f7)'}}>Download CV</a>
        </div>

        <div className='md:w-1/2 flex justify-center md:justify-end'>
        <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full' 

          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          gyroscope={true}

        >
          <img src={profileImage} alt='Subhajit Guchhait' className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'  />
          </Tilt>
          
        </div>

      </div>
    </section>
  )
}
