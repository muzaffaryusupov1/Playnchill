import React from 'react'

function Blog() {

    const list = [
        {
            id: 1,
            image: '/blog/blog-img1.png',
            title: 'Да как так-то борются с пиратством?',
            subtitle: 'Скримеры — только верхушка айсберга ужаса',
            date: '14 Октября 2021',
        },
        {
            id: 2,
            image: '/blog/blog-img1.png',
            title: 'Да как так-то борются с пиратством?',
            subtitle: 'Скримеры — только верхушка айсберга ужаса',
            date: '14 Октября 2021',
        },
        {
            id: 3,
            image: '/blog/blog-img1.png',
            title: 'Да как так-то борются с пиратством?',
            subtitle: 'Скримеры — только верхушка айсберга ужаса',
            date: '14 Октября 2021',
        },
    ]

    return (
        <section className='my-14'>
            <div className="container">
                <div className="blog-wrapper">
                    <div className="mb-5">
                        <h3 className="font-semibold text-3xl text-white">Свежее в блоге</h3>
                    </div>
                    <div className='flex gap-5 flex-wrap mb-10'>
                        {
                            list.map(item => (
                                <div className="w-[406px] h-[409px]" key={item.id}>
                                    <div className="w-full h-[266px] rounded-2xl">
                                        <img src={item.image} alt="blog img" className='w-full h-full object-contain' />
                                    </div>
                                    <div className='p-3'>
                                        <h3 className='font-semibold text-xl text-white mb-3'>{item.title}</h3>
                                        <p className='font-normal text-lg text-white mb-5'>{item.subtitle}</p>
                                        <p className='font-normal text-base text-left text-neutral-700'>{item.date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-center">
                        <button className='pt-6 pb-7 font-semibold border-2 border-solid border-neutral-700 rounded-2xl text-lg w-full h-full text-sky-500'>Все публикации</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog