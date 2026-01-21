import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function Login() {
    return (
        <>
            <div className="max-w-[1280px] w-full mx-auto my-1 px-4">
                <p className='text-[40px] font-bold text-center'> My Account</p>
                <div className='flex justify-center' >
                    <p className="text-[16px] hover:text-[#C09578]"> Home </p>
                    <p className="text-[16px] text-[#C09578] px-1"><IoIosArrowForward className='mt-1.5' /></p>
                    <p className="text-[16px] text-[#C09578]">My Account</p>
                </div>

                {/* border */}
                <div className='border border-gray-200 m-8'></div>
                
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-13">
                    <div className="border border-gray-300 rounded p-6">
                        <p className='text-[28px] text-center mb-4 font-bold'>Login</p>
                        <form className="max-w-sm mx-auto">
                            <div className="mb-4">
                                <label className='block text-sm font-medium mb-1'>Email *</label>
                                <input type="email" placeholder='Email Address' className='block w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C09578]' />
                            </div>
                            <div className="mb-4">
                                <label className='block text-sm font-medium mb-1'>Password *</label>
                                <input type="password" placeholder='Password' className='block w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C09578]' />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className='bg-[#C09578] hover:bg-[#ad8060] text-white rounded px-6 py-2'>Login</button>
                                <a href="#" className='text-sm text-gray-600 hover:underline'>Forgot Password?</a>
                            </div>
                        </form>
                    </div>

                    {/* Register */}
                    <div className="border border-gray-300 rounded p-6">
                        <p className='text-[28px] text-center mb-4 font-bold'>Register</p>
                        <form className="max-w-sm mx-auto">
                            <div className="mb-4">
                                <label className='block text-sm font-medium mb-1'>Email *</label>
                                <input type="email" placeholder='Email Address' className='block w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C09578]' />
                            </div>
                            <div className="mb-4">
                                <label className='block text-sm font-medium mb-1'>Password *</label>
                                <input type="password" placeholder='Password' className='block w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C09578]' />
                            </div>
                            <div className="text-center">
                                <button type="submit" className='bg-[#C09578] hover:bg-[#ad8060] text-white rounded px-6 py-2'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                <div className='border border-gray-200 my-3'></div>
        </>
    )
}
