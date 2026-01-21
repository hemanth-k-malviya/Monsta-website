import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function OnlineStore() {
    return (
        <>
            <div className="max-w-[1280px] h-[1000px] w-full mx-auto my-1 px-4">
                <p className='text-[40px] font-bold text-center'> Online Store</p>
                <div className='flex justify-center' >
                    <p className="text-[16px] hover:text-[#C09578]"> Home </p>
                    <p className="text-[16px] text-[#C09578] px-1"><IoIosArrowForward className='mt-1.5' /></p>
                    <p className="text-[16px] text-[#C09578]">Online Store</p>
                </div>

                {/* border */}
                <div className='border border-gray-200 m-8'></div>
                <div className="h-[400px] grid grid-cols-[25%_75%]">
                    <div className="border">
                        <div className="h-100 overflow-y-auto scrollbar-custom">
                            <p className='text-[30px] font-bold text-center my-3'>Categories</p>
                            {/* Tables */}
                            <p className='text-[20px] font-bold text-gray-600 mx-4 my-2'>Tables</p>

                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Side and End Tables</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Nest Of Tables</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Coffee Table Sets</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Coffee Tables</p>
                            </div>
                            {/* Mirror */}
                            <p className='text-[20px] font-bold text-gray-600 mx-4 my-2'>Mirror</p>

                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Wooden Mirrors</p>
                            </div>
                            {/* Living Storage/collections */}
                            <p className='text-[20px] font-bold text-gray-600 mx-4 my-2'>Living Storage/collections</p>

                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Prayer Units</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Prayer Units</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Shoe Racks</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Chest Of Drawers</p>
                            </div>
                             <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Cabinets and Sideboard</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Bookshelves</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Tv Units</p>
                            </div>
                            {/* Sofa Cum Bed */}
                            <p className='text-[20px] font-bold text-gray-600 mx-4 my-2'>Sofa Cum Bed</p>

                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Wooden Sofa Cum Bed</p>
                            </div>
                            {/* Sofa Sets */}
                            <p className='text-[20px] font-bold text-gray-600 mx-4 my-2'>Sofa Sets</p>

                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Sofa Cover</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>L Shape Sofa</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>1 Seater Sofa</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>2 Seater Sofa</p>
                            </div>
                             <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>3 Shape Sofa</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Wooden Sofa Sets</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Normal</p>
                            </div>
                            {/* Swing Jhula */}
                            <p className='text-[20px] font-bold text-gray-600 mx-4 my-2'>Swing Jhula</p>

                            <div className="flex">
                                <input type="checkbox" className='w-4 mx-4' />
                                <p className='text-[17px] text-gray-600'>Wooden Jhula</p>
                            </div>
                        </div>

                    </div>
                    <div className="border">asdasd</div>
                </div>
            </div>
        </>
    )
}
