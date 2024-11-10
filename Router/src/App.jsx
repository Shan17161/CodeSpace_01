import { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <div className='bg-[#212121] w-screen h-screen'>
        <Header/>
        <div className='absolute h-[50%] left-[45%] top-[40%]'>
        <Outlet/>
        </div>

        <div className='h-[80%] w-full flex justify-center items-end'>
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
