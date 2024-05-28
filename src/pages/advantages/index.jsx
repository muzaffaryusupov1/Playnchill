import React from 'react'
import { alist } from '../../utils/data'

function AdvantagesPage() {
  return (
    <div className='my-6'>
      <div className='container'>
        <div>
          <div className='flex items-center justify-between my-6'>
            <div className='mb-10 ml-8'>
              <h3 className='font-extrabold text-5xl'>Наши преимущества</h3>
            </div>
            <div className='w-[455px] h-[431px]'>
              <img src="/advantages/advantages-img1.png" alt="advantages img" className='w-full h-full object-contain' />
            </div>
          </div>
          <div className='flex flex-wrap gap-8'>
            {
              alist.map(item => (
                <div className='py-14 p-6 w-[370px] flex flex-col items-center' key={item.id}>
                  <div className='flex items-center gap-4 mb-7'>
                    <div className='w-[70px] h-[70px]'>
                      <img src={item.image} alt={item.title} className='w-full h-full object-contain' />
                    </div>
                    <p className='w-[120px] font-bold text-xl text-white]'>{item.title}</p>
                  </div>
                  <div>
                    <p className='font-normal text-base text-white opacity-60 text-center'>{item.subtitle}</p>
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