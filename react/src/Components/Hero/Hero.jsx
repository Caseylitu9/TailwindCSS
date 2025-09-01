import React from 'react'

const Hero = () => {
  return (
    <section className='relative bg-cover bg-center h-screen bg-[url("./assets/code-red.jpg")] flex items-center justify-center text-center bg-blue-500'>
        <div className='relative z-10 text-black-p-10 p-4 bg-red rounded-4xl'>
            
            <button className='cursor-pointer bg-blue-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-500'>
                Start Here
            </button>
            <hr className="mt-8 w-30 auto border-t-4 border-white-600" />
        </div>
    </section>
    
  )
}

export default Hero
