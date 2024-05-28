import React from 'react'

function ReviewsPage() {
    return (
        <div className='my-10'>
            <div className='container'>
                <div>
                    <div className='relative'>
                        <div className='w-full h-[600px] rounded-3xl overflow-hidden'>
                            <img src="/reviews/reviews-img1.png" alt="reviews image" />
                        </div>
                        <div className='absolute top-[50%] left-72 '>
                            <img src="/reviews/reviews-img3.png" alt="stars" />
                        </div>
                        <div className='backdrop-blur-[100px] bg absolute bottom-[-30px] left-80 rounded-3xl'>
                            <h2 className='font-extrabold text-5xl text-center text-white my-8 mx-14'>Отзывы о магазине</h2>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center mt-8'>
                        <div>
                            <img src="/reviews/reviews-img2.png" alt="no reviews" />
                        </div>
                        <div>
                            <h3 className='font-extrabold text-6xl text-white'>пока нет отзывов</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsPage