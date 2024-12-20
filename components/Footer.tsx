import React from 'react'
import facebool from './assets/facebook (1).png'
import instagram from './assets/instagram (1).png'
import linkdun from './assets/linkedin-logo.png'
import github from './assets/github (1).png'

export default function Footer() {
  return (
    <>
      <footer className='bg-[#6772ed] flex flex-row '>
      <div className='flex flex-row  h-12 w-full items-center xs:mx-10 mx-4 justify-between'>
        <div className='flex items-center text-xs sm:text-sm '>
            Copyright © 2024 aw122598@gmail.com —@Abdul Wassay
        </div>
        
        <div className='flex flex-row  '>
            <a href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-6 mx-2' src={facebool.src} alt="" /></a>
            <a href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-6 mx-2' src={linkdun.src} alt="" /></a>
            <a href="https://www.instagram.com/wassay122/"><img className='h-6 mx-2' src={instagram.src} alt="" /></a>
            <a href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-6 mx-2' src={github.src} alt="" /></a>
        </div>
      </div>
      </footer>
    </>
  )
}
