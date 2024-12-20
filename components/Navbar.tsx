"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import facebool from './assets/facebook (1).png'
import instagram from './assets/instagram (1).png'
import linkdun from './assets/linkedin-logo.png'
import github from './assets/github (1).png'

const Navbar = () => {
    const[active, setActive]= useState('Client Side')
  return (
    <header className='bg-[#6772ed] flex justify-between items-center text-white h-16  px-10'>
      <nav>
        <ul className='flex gap-6'>
          <li>
            <Link href='/' onClick={()=>setActive('Client Side')} className={`text-[20px] py-1 border-solid border-[#03fcc2] ${active==='Client Side'?'border-b-2 text-[#03fcc2]':''}`}>Client Side</Link>
          </li>
          <li>
            <Link href='/serverside' onClick={()=>setActive('Server Side')} className={`text-[20px] py-1 border-solid border-[#03fcc2] ${active==='Server Side'?'border-b-2 text-[#03fcc2]':''}`}>Server Side</Link>
          </li>
        </ul>
      </nav>
      <div className='flex flex-row  '>
            <a target='_blank' href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-6 mx-2' src={facebool.src} alt="" /></a>
            <a target='_blank' href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-6 mx-2' src={linkdun.src} alt="" /></a>
            <a target='_blank' href="https://www.instagram.com/wassay122/"><img className='h-6 mx-2' src={instagram.src} alt="" /></a>
            <a target='_blank' href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-6 mx-2' src={github.src} alt="" /></a>
        </div>
    </header>
  )
}

export default Navbar
