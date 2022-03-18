import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaChrome } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <div className='h-24 md:h-7'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#2a2a2a" fillOpacity="1" d="M0,32L120,42.7C240,53,480,75,720,80C960,85,1200,75,1320,69.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                    </path>
                </svg>
            </div>
            <div className='bg-theme w-screen flex justify-center'>
                <div className='md:w-full w-1/2'>
                    <div className='p-10 text-center'>
                        <p className='text-gray-100 pb-3'>Designed and Developed By</p>
                        <div className="h-1 border-2 border-gray-400 border-dotted">
                        </div>
                        <div className='flex text-gray-50 w-full justify-between py-3 '>
                            <a href="https://jaseem.vercel.app/resume"><FaChrome className='cursor-pointer' /></a>
                            <a href="https://m.facebook.com/profile.php?id=100002780076781"><FaFacebook className='cursor-pointer' /></a>
                            <a href="https://www.instagram.com/jassimjasi/?hl=en"><FaInstagram className='cursor-pointer' /></a>
                            <a href="https://www.linkedin.com/in/abdullajaseem/"><FaLinkedin className='cursor-pointer' /></a>
                            <a href="https://github.com/JassimJasi"><FaGithub className='cursor-pointer' /></a>
                        </div>
                        <div className="h-1 border-2 border-gray-400 border-dotted">
                        </div>
                        <p className='text-gray-100 pt-3'>Abdulla Jaseem</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer