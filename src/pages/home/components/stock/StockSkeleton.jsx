import React from 'react'
import Skeleton from 'react-loading-skeleton'

function StockSkeleton({ cards }) {
    return (
        Array(cards)
            .fill(0).map((_, i) => (
                <div key={i} className='my-14'>
                    <div className='rounded-2xl overflow-hidden'>
                        <Skeleton width={600} height={319} baseColor='gray' className='opacity-70' />
                    </div>
                    <div>
                        <Skeleton className='mt-5 ml-1 opacity-70' width={255} height={15} baseColor='gray' />
                        <Skeleton className='mt-3 ml-1 opacity-70' width={90} height={15} baseColor='gray' />
                    </div>
                </div>
            ))
    )
}

export default StockSkeleton