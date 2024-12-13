import React from 'react'

function Hero() {
  return (
    <section className='py-12'>
        <h1 className='text-4xl font-bold text-center'>
            Find Your Next <br/> <i>DREAM JOB</i>
        </h1>
        <form className='flex gap-2 mt-5 max-w-xl mx-auto'>
            <input 
                type='search'
                className='border border-gray-400 w-full py-2 px-3 rounded-md'
                placeholder='Search Phrase...'
            />
            <button className='bg-blue-600 text-white py-2 px-4 rounded-md'> Search </button>
        </form>
    </section>
  )
}

export default Hero
