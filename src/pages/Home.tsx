import React from 'react'
import Background from '../assets/images/GinBarrell.jpg'


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-9 bg-blue-300 bg-opacity-70 text-white '>Welcome to your Gin Library!</h3>
        </div>
    </div>
  )
}


export default Home