import React, { useState } from 'react'
import { Nav } from '../Comman/NavData'
import { RiArrowDownSLine, RiArrowUpSLine, RiPieChart2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Left() {
  const [model, setModel] = useState(false)
  const ACC = (id) => {
    setModel(model === id ? null : id)
  }
  
  return (
    <div className='w-full overflow-y-auto h-screen bg-gradient-to-br from-gray-800 to-gray-900 scrollbar-hide'>
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-700/50">
        <img 
          className="w-[220px] h-[80px] object-contain mx-auto hover:opacity-90 transition-opacity" 
          src="https://mastercoach.in/wp-content/uploads/2021/09/header_logo.png" 
          alt="logo" 
        />
      </div>

      {/* Navigation Section */}
      <div className='w-full px-4 py-6'>
        <Link to='/dashboard'>
          <div className='flex items-center p-3 mb-6 rounded-lg hover:bg-gray-700/50 transition-all duration-200'>
            <RiPieChart2Fill className='text-xl text-blue-400' />
            <h3 className='ml-3 font-medium text-white'>Dashboard</h3>
          </div>
        </Link>

        {Nav.map((item, index) => (
          <div 
            key={index}
            className='mb-4 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-all duration-200'
          >
            <div className='flex justify-between items-center p-3 cursor-pointer'
                 onClick={() => ACC(item.id)}>
              <div className='flex items-center'>
                <item.icon className='text-xl text-blue-400' />
                <h3 className='ml-3 font-medium'>{item.title}</h3>
              </div>
              <span className='text-xl transition-transform duration-200'>
                {model === item.id ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </span>
            </div>
            
            <div className={`transition-all duration-300 ease-in-out ${model === item.id ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <ul className="py-2">
                {item.subMenu.map((subItem, i) => (
                  <Link key={i} to={subItem.link}>
                    <li className='flex items-center px-8 py-2.5 text-sm hover:bg-gray-600/50 hover:text-white transition-colors'>
                      {subItem.subIcon && 
                        <subItem.subIcon className="mr-2 text-blue-400" />
                      }
                      {subItem.subTitle}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
