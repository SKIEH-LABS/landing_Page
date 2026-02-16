import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Work from './Components/Work'


import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Statement from './Components/Statement'
import Credentials from './Components/Credentials'
import Services from './Components/Services'
import Loader from './Components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis()

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => lenis.destroy()
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div className={`min-h-screen w-full relative bg-[#f2f0f8] text-[#1a1a1a] overflow-x-hidden selection:bg-purple-200 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>


        {/* Sidebar: Logo Icon + Dots - Hidden on Mobile */}
        <div className="hidden pt-[2px] items-start justify-start sm:flex md:flex fixed border-r border-neutral-500 left-0 top-0 h-full w-20 flex-col  z-50">
          {/* Top Icon */}
          <img className='p-2 border-b border-neutral-500' src="./photos/logo.svg" alt="" />
        </div>

        <div className="max-w-[1600px] mx-auto relative border-l-0 md:border-l border-gray-200 min-h-screen ml-0 md:ml-20">
          <Navbar />

          <main className="pb-20">
            <Hero />



            {/* Separator Dots */}


            <Work />
            <Statement />
            <Credentials />

            <Services />
          </main>
        </div>
      </div>
    </>
  )
}

export default App

