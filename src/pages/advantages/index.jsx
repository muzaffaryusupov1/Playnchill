import React from 'react'
import { alist } from '../../utils/data'

function AdvantagesPage() {
  return (
    <div className='my-6'>
      <div className='container'>
        <div>
          <div className='flex items-center justify-between my-6'>
            <div className='mb-10 ml-8 max-md:mb-4 max-md:ml-3'>
              <h3 className='font-extrabold text-5xl max-md:text-2xl max-sm:text-lg'>Наши преимущества</h3>
            </div>
            <div className='w-[455px] h-[431px] max-md:w-[300px] max-md:h-[200px]'>
              <img src="/advantages/advantages-img1.png" alt="advantages img" className='w-full h-full object-contain' />
            </div>
          </div>
          <div className='flex flex-wrap gap-8 max-[812px]:gap-y-20 max-[572px]:gap-y-10 max-[572px]:gap-2'>
            {
              alist.map(item => (
                <div className='py-14 p-6 w-[370px] flex flex-col items-center max-[812px]:py-4 max-[812px]:p-4 max-[812px]:w-auto max-[793px]:p-0' key={item.id}>
                  <div className='flex items-center gap-4 mb-7 max-[793px]:mb-4 max-[793px]:gap-2'>
                    <div className='w-[70px] h-[70px] max-[812px]:w-60px max-[812px]:h-60px max-[793px]:w-[50px] max-[793px]:h-[50px] max-sm:w-[30px] max-[408px]:w-6'>
                      <img src={item.image} alt={item.title} className='w-full h-full object-contain' />
                    </div>
                    <p className='w-[120px] font-bold text-xl text-white] max-[812px]:w-[90px] max-[812px]:text-base max-[793px]:text-sm max-[544px]:text-xs max-[408px]:text-[11px]'>{item.title}</p>
                  </div>
                  <div>
                    <p className='font-normal text-base text-white opacity-60 text-center max-[812px]:text-sm max-[812px]:w-[300px] max-[793px]:w-[250px] max-[793px]:text-sm max-[572px]:text-xs max-[544px]:w-[230px] max-[508px]:w-[180px] max-[408px]:text-[9px] max-[408px]:w-[160px] max-[369px]:text-[8px] max-[369px]:w-[150px]'>{item.subtitle}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvantagesPage