"use client"
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className="w-full ">

                {/* Top Bar */}
                <div className="max-w-[1280px] w-full mx-auto my-1 px-4">
                    <div className="flex justify-between items-center py-2 w-full ">
                        <div className="text-sm">
                            <p> Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com</p>
                        </div>
                        <div className="text-sm">
                            <p className='hover:text-[#C09578]'> <Link href={'/login-register'}>
                            Login / Register
                            </Link></p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-200 m-1'></div>
                {/* Middle Part */}
                <div className="max-w-[1280px] h-[80px] mx-auto py-5 w-full px-5 ">
                    <div className="flex items-center w-full ">

                        <div className="">
                            <Link href={'/'}><img src="./images/logo.png" alt="logo" className='w-[150px] ml-3 ' /></Link>
                        </div>

                        <div className="text-sm flex border border-gray-200 p-1 ml-[550px]">
                            <input type="text" placeholder='Search product...' className=' p-[5px_25px] outline-none' />
                            <IoIosSearch className='text-[23px] mt-1' />
                        </div>

                        <div className="text-sm flex border border-gray-200 ml-2 p-[3.5px] ">
                            <FaHeart className='text-[23px] m-1 hover:text-[#C09578]' />
                        </div>

                        <div className="text-sm w-[150px] flex border border-gray-200 ml-7 p-[3.5px_10] relative hover:text-[#C09578]">
                            <div className='w-[23px] h-[23px] rounded-[30px] bg-[#C09578] absolute bottom-[8px] left-[-11px]'>
                                <div className=' text-[15px] m-[0px_7px] text-white hover:text-[white]'>
                                    <p>0</p>
                                </div>
                            </div>
                            <IoCart className='text-[23px] mx-2 my-1' />
                            <div className='border-r border-gray-200 my-1 mx-2'></div>
                            <p className='text-[15px] mx-1 my-1 font-semibold'>
                                Rs. 5,500
                            </p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-200 m-1'></div>
            </header>

            <div className="max-w-[1280px] mx-auto w-full px-4 font-semibold my-5">
                <div className='flex justify-center gap-8 text-[15px]'>
                    <div className='flex  '>
                        <p className=' text-[#C09578]'> HOME</p>
                    </div>

                    <div className='group relative'>
                        <div className="flex hover:text-[#C09578]">
                            <p> LIVING</p>
                            <IoIosArrowDown className='m-[3px]' />
                        </div>
                        <div className="absolute top-full left-0 w-[480px] h-[300px] bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out pt-2 z-50 grid grid-cols-3 gap-2">
                            <div className="">
                                <p className='hover:text-[#C09578] text-center mt-4 mb-3'>Tables</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>Side and End Tables</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>Nest Of Tables</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>Coffee Table Sets</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>Coffee Tables</p>
                            </div>
                            <div className="">
                                <p className='hover:text-[#C09578] text-center mt-4  mb-3'>Mirror</p>
                                <p className='text-[13px] text-center text-gray-400 mb-3 hover:text-[#C09578]'>Wooden Mirrors</p>

                            </div>
                            <div className="mx-1 ">
                                <p className='hover:text-[#C09578] mx-2 mt-4 mb-3'>Living <br /> Storage/collections</p>
                                <p className='text-[13px] text-left hover:text-[#C09578] text-gray-400 mb-3'>Prayer Units</p>
                                <p className='text-[13px] text-left hover:text-[#C09578] text-gray-400 mb-3'>Display Unit</p>
                                <p className='text-[13px] text-left hover:text-[#C09578] text-gray-400 mb-3'>Shoe Racks</p>
                                <p className='text-[13px] text-left hover:text-[#C09578] text-gray-400 mb-3'>Chest Of Drawers</p>
                                <p className='text-[13px] text-left hover:text-[#C09578] text-gray-400 mb-3'>Cabinets and Sideboard</p>
                                <p className='text-[13px] text-left hover:text-[#C09578] text-gray-400 mb-3'> Bookshelves</p>
                                <p className='text-[13px] text-left hover:text-[#C09578] text-gray-400 mb-3'> Tv Units</p>
                            </div>
                        </div>

                    </div>

                    <div className=' group relative'>
                        <div className='flex hover:text-[#C09578]'>
                            SOFA
                            <IoIosArrowDown className='m-[3px]' />
                        </div>
                        <div className="absolute top-full left-0 w-[500px] h-[300px] bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out pt-2 z-50 grid grid-cols-3 gap-2">
                            <div className="">
                                <p className='hover:text-[#C09578] text-center mt-4 mb-3'> Sofa Cum Bed</p>
                                <p className='text-[13px] text-center text-gray-400 mb-3 hover:text-[#C09578]'> Wooden Sofa Cum Bed</p>
                            </div>

                            <div className="">
                                <p className='hover:text-[#C09578] text-center mt-4  mb-3'>Sofa Sets</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>Sofa Cover</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>L Shape Sofa</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>1 Seater Sofa</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>2 Seater Sofa</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>3 Seater Sofa</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>Wooden Sofa Sets</p>
                                <p className='text-[13px] text-center hover:text-[#C09578] text-gray-400 mb-3'>Normal</p>

                            </div>
                            <div className="">
                                <p className='hover:text-[#C09578]  text-center mx-6 mt-4 mb-3'>Swing Jhula</p>
                                <p className='text-[13px] text-center text-gray-400 mb-3 hover:text-[#C09578]'>Wooden Jhula</p>
                            </div>
                        </div>
                    </div>
                    <div className='group relative'>
                        <div className='flex hover:text-[#C09578] cursor-pointer'>
                            PAGES
                            <IoIosArrowDown className='m-[3px]' />
                        </div>

                        <div className="absolute top-full left-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out pt-2 z-50">
                            <Link href={'/about-us'}><p className='text-[13px] text-left text-gray-400 mb-3 mx-5 hover:text-[#C09578]'>About Us</p></Link>
                            <Link href={'/'}><p className='text-[13px] text-left text-gray-400 mb-3 mx-5 hover:text-[#C09578]'>Cart</p></Link>
                            <Link href={'/'}><p className='text-[13px] text-left text-gray-400 mb-3 mx-5  hover:text-[#C09578]'>Checkout</p></Link>
                            <Link href={'/faqs'}><p className='text-[13px] text-left text-gray-400 mb-3 mx-5 hover:text-[#C09578]'>Frequently Questions</p></Link>
                        </div>
                    </div>




                    <div className='flex hover:text-[#C09578]'>
                        <Link href={'/contact-us'}> CONTACT US</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


