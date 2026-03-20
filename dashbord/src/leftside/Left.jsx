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
      <div className="px-4 pt-5 pb-4 border-b border-gray-700/50">
        <Link to="/dashboard" className="block">
          <div className="p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-colors ring-1 ring-white/5">
            <div className="flex items-center justify-center">
              <img
                className="w-[190px] h-[56px] object-contain bg-white rounded-md px-2 py-1 shadow-sm"
                src="/image/logo.png"
                alt="logo"
              />
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
              <span className="tracking-wide">Admin Dashboard</span>
            </div>
          </div>
        </Link>
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
