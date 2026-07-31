import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BodyContent from '../Components/BodyContent'

const Home = () => {
  return (
    <div className='h-screen flex flex-col'>
        <Navbar/>
        <main className='flex-grow'>
            <BodyContent/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home