import React from 'react'

function ReviewsPage() {
    return (
        <div className='my-10'>
            <div className='container'>
                <div className='flex flex-col items-center justify-center mt-8'>
                    <div className='max-sm:w-[300px] max-sm:h-[200px] mb-4 max-[430px]:w-[200px] max-[430px]:h-[150px]'>
                        <img src="/reviews/reviews-img2.png" alt="no reviews" />
                    </div>
                    <div className='my-4'>
                        <h3 className='font-extrabold text-6xl text-white max-md:text-lg max-sm:text-3xl max-[430px]:text-xl'>пока нет отзывов</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsPage