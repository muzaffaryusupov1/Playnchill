import React from 'react'

function ProductRequirements({ product }) {
    return (
        <div>
            <div className='border-2 border-neutral-500 border-b-2 pb-5 border-t-0 border-r-0 border-l-0 border-solid mb-4'>
                <div className='mb-4 max-sm:mb-2'>
                    <h2 className='font-medium text-xl max-sm:text-base max-[510px]:text-sm max-[450px]:text-[12px]'>Минимальные системные требования</h2>
                </div>
                {
                    product.minrequirements.map(item => (
                        <div key={item?.id}>
                            <div className='flex items-center justify-between py-3 max-sm:py-1'>
                                <p className='font-normal text-lg text-neutral-500 max-sm:text-sm max-[570px]:text-[10px] max-[510px]:mr-4'>{item.title}</p>
                                <p className='w-1/2 font-normal text-lg text-white max-md:w-[30%] max-sm:text-xl max-sm:w-auto max-[570px]:text-xs max-[510px]:text-[10px]'>{item.value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className='mb-4 max-sm:mb-2'>
                    <h2 className='font-medium text-xl max-sm:text-base max-[510px]:text-sm max-[450px]:text-[12px]'>Рекомендованные системные требования</h2>
                </div>
                {
                    product.maxrequirements.map(el => (
                        <div key={el.id}>
                            <div className='flex items-center justify-between py-3 max-sm:py-1'>
                                <p className='font-normal text-lg text-neutral-500 max-sm:text-sm max-[570px]:text-[10px] max-[510px]:mr-4'>{el.title}</p>
                                <p className='w-1/2 font-normal text-lg text-white max-md:w-[30%] max-sm:text-xl max-sm:w-auto max-[570px]:text-xs max-[510px]:text-[10px]'>{el.value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductRequirements