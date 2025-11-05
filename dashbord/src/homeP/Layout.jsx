import React from 'react'
import Header from '../Comman/Header'
import Left from '../leftside/Left'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
      
      <div className='flex'>
        {/* Sidebar */}
        <div className='w-[280px] fixed h-screen shadow-lg'>
          <Left />
        </div>

        {/* Main Content */}
        <div className='flex-1 ml-[280px]'>
          <div className='sticky top-0 z-10'>
            <Header />
          </div>
          
          <main className='p-6'>
            <div className='bg-white rounded-lg shadow-sm'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

