import React from 'react'
import Skeleton from 'react-loading-skeleton'

function CardSkeleton({ cards }) {
    return (
        Array(cards)
            .fill(0).map((_, i) => (
                <div key={i}>
                    <div>
                        <Skeleton width={630} height={384} baseColor='gray' className='opacity-70' />
                    </div>
                </div>
            ))
    )
}

export default CardSkeleton