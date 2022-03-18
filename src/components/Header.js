import React, { useState  } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Header() {
    const [showMenu, setShowMenu] = useState('md:hidden')
    const menuItems = [
        {
            title: 'Home',
            key: '/'
        },
        {
            title: 'Projects',
            key: '/projects'
        },
        {
            title: 'Resume',
            key: '/resume'
        },
        {
            title: 'Contact',
            key: '/contact'
        },
    ]
    const pathname = window.location.pathname
    return (
        <>
        <div className='text-white font-mont fixed top-0 left-0 right-0 z-50'>
            <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu === '' && 'md:flex-col'}`}>
                <div className='flex justify-between items-center w-full'>
                    <Link to="/"><h1 className='text-4xl font-semibold cursor-pointer hover:text-blue-500'>Jaseem</h1></Link>

                    <FaBars onClick={() => {
                        if (showMenu === 'md:hidden') {
                            setShowMenu('')
                        } else {
                            setShowMenu('md:hidden')
                        }
                    }}
                        className='lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer' />
                </div>

                <div className='flex md:hidden'>
                    {menuItems.map((item,index1) => {
                        return (
                            <li key={index1} className={`list-none mx-5 p-1 ${item.key === pathname && 'bg-white text-black rounded-md'} `}>
                                <Link to={`${item.key}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                </div>

                <div className={`md:flex items-start mt-5 w-full flex-col 2xl:hidden ${showMenu}`}>
                    <div className='m-auto'>
                    {menuItems.map((item, index2) => {
                        return (
                            <li key={index2} className={`list-none py-1 ${item.key === pathname && 'bg-white text-black rounded-md px-5'} `}>
                                <Link to={`${item.key}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header