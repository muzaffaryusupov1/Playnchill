import React from 'react'

function ProductRequirements({ product }) {
    return (
        <div>
            <div className='border-2 border-neutral-500 border-b-2 pb-5 border-t-0 border-r-0 border-l-0 border-solid mb-4'>
                <div className='mb-4'>
                    <h2 className='font-medium text-xl'>Минимальные системные требования</h2>
                </div>
                {
                    product.minrequirements.map(item => (
                        <div key={item?.id}>
                            <div className='flex items-center justify-between py-3'>
                                <p className='font-normal text-lg text-neutral-500'>{item.title}</p>
                                <p className='w-1/2 font-normal text-lg text-white'>{item.value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className='mb-4'>
                    <h2 className='font-medium text-xl'>Рекомендованные системные требования</h2>
                </div>
                {
                    product.maxrequirements.map(el => (
                        <div key={el.id}>
                            <div className='flex items-center justify-between py-3'>
                                <p className='font-normal text-lg text-neutral-500'>{el.title}</p>
                                <p className='w-1/2 font-normal text-lg text-white'>{el.value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductRequirements