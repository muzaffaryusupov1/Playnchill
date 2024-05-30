import React from 'react'
import Skeleton from 'react-loading-skeleton'

function RecommendedListSkeleton({ cards }) {

    const width = window.screen.width

    return (
        Array(cards)
            .fill(0).map((_, i) => (
                <div key={i} className='max-[575px]:flex'>
                    <div>
                        <Skeleton width={width >= 575 ? 250 : 300} height={width >= 575 ? 300 : 450} baseColor='gray' className='opacity-70' />
                    </div>
                    <div>
                        <Skeleton className='mt-3 ml-1 opacity-70' width={95} height={15} baseColor='gray' />
                        <Skeleton className='mt-3 ml-1 opacity-70' width={80} height={15} baseColor='gray' />
                    </div>
                </div>
            ))
    )
}

export default RecommendedListSkeleton