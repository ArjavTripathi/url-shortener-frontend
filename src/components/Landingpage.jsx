import React from 'react'

const Landingpage = () => {

  let desc = "Generate short URLs for websites you want to share. Analyse and "

  return (
    <div className='min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4'>
      <div className='lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center'>
        <div className=' flex-1'>
          <h1 className='font-bold font-roboto text-slate-800 md:text-5xl text-3xl md:leading-[55px] s:leadig-[45px] leading-10 lg:w-full md:w-[70%] w-full'>
              Linkit 
          </h1>
          <p className='text-slate-100 text-sm my-5'>
            Linkit makes sharing link easy. Try now!
          </p>

        </div>
      </div>

    </div>
  )
}

export default Landingpage