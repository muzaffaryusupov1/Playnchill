import React, { useState } from 'react'
import { ArrowBackIcon, CheckMarkIcon, ChevronLeftIcon, ChevronRightIcon, HeartIcon, RatingIcon, WhiteRatingIcon } from '../../../assets/icons'
import { useDispatch } from 'react-redux'
import { imgModalOpen } from '../../../store/slices/imgmodal'
import { addCart } from '../../../store/slices/cart'
import { addFavorite } from '../../../store/slices/favourite'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../style/main.css';
import { Navigation } from 'swiper/modules';
import toast from 'react-hot-toast'
import { SlideshowLightbox } from 'lightbox.js-react/dist'
import ReactSlidy from 'react-slidy'
import 'react-slidy/lib/index.scss'
// import 'react-slidy/lib/styles.css'

function ProductHeader({ product }) {
    const dispatch = useDispatch()

    const handleModal = () => {
        dispatch(imgModalOpen('imgModal'))
    }

    const handleAdd = () => {
        dispatch(addCart(product))
        toast.success('Savatga qo\'shildi')
    }

    const handleAddOrder = () => {
        dispatch(addFavorite(product))
        toast.success('Sevimlilarga qo\'shildi')
    }
    const width = window.screen.width

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(true)
    }

    return (
        <div className="product-header">
            <div className="container">
                <div className="product-wrapper">
                    <div className='flex gap-16 max-lg:gap-9 max-[850px]:gap-4 max-sm:flex-col'>
                        <div className='h-full'>
                            <div className="w-[350px] h-[478px] rounded-2xl overflow-hidden max-sm:w-full max-sm:h-[400px]">
                                <img src={product.image} alt={product.title} className='w-full h-full object-cover max-sm:object-contain' />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className='flex flex-col gap-5 mb-5 max-sm:m-0'>
                                <h3 className='font-extrabold text-4xl text-white max-sm:text-lg mb-3'>{product.title}</h3>
                            </div>
                            <div className='flex items-center gap-5 mb-5 max-[710px]:flex-wrap'>
                                <p className='font-bold text-3xl text-white max-sm:text-lg'>{product.price.toLocaleString()} Р</p>
                                <p className='font-bold text-2xl text-lime-500 max-sm:text-lg'>-{product.discount}%</p>
                                {product.oldPrice ? <p className='font-bold text-3xl text-neutral-700 line-through max-sm:text-lg'>{product.oldPrice.toLocaleString()} Р</p> : null}
                            </div>
                            <div className='flex items-center mb-5 mt-7 max-sm:mb-2 max-sm:mt-4'>
                                {product.sold ?
                                    <div className='flex items-center gap-3 mr-4 max-sm:gap-1'>
                                        <span className='text-lg max-sm:text-sm'>Доступен для продажи</span>
                                        <span><CheckMarkIcon /></span>
                                    </div>
                                    : <span>В продаже нет</span>}
                                <div className='flex items-center gap-4 max-sm:gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <WhiteRatingIcon />
                                        <WhiteRatingIcon />
                                        <WhiteRatingIcon />
                                        <RatingIcon />
                                        <RatingIcon />
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <p className='text-xl font-medium text-white max-sm:text-base'>{product.rating}</p>
                                        <p className='text-xl font-medium text-white max-sm:text-base'>Рейтинги</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-3 border border-solid border-gray-500 border-t border-b-0 border-r-0 border-l-0'>
                                {
                                    product.attributes.slice(0, 2).map((i, key) => (
                                        <div className='flex gap-2 mb-5 mt-2 max-sm:mb-2' key={key}>
                                            <p className='font-normal text-lg text-white max-sm:text-base'>{i.title}:</p>
                                            <p className='font-extrabold text-xl text-white max-sm:text-base'>{i.value}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center max-md:flex-wrap max-[720px]:gap-3'>
                                <button className='rounded-2xl py-6 px-9 bg-lime-500 mr-3 border border-solid border-transparent ease-in-out duration-300 hover:bg-transparent hover:border hover:border-solid hover:border-neutral-500 max-sm:py-3 max-sm:px-5 max-sm:rounded-xl max-sm:text-base' onClick={handleAddOrder}>В избранное</button>
                                <button className='rounded-2xl border border-solid border-neutral-500 py-6 px-9 bg-transparent mr-5 ease-in-out duration-300 hover:bg-lime-500 hover:border-transparent max-sm:py-3 max-sm:px-5 max-sm:rounded-xl max-sm:text-base' onClick={handleAdd}>В корзину</button>
                            </div>
                            <div className='flex items-center gap-3 my-6'>
                                <p className='font-extrabold text-xl'>Доступен на:</p>
                                <div className='flex items-center gap-2'>
                                    {
                                        product.windows ?
                                            <div className='w-8 h-7'>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Windows_icon_logo.png" alt="windows logo" className='w-full h-full object-contain hover:scale-110 cursor-pointer' />
                                            </div> : null
                                    }
                                    {
                                        product.macOs ?
                                            <div className='w-8 h-7'>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Icon-Mac.svg/2048px-Icon-Mac.svg.png" alt="windows logo" className='w-full h-full object-contain hover:scale-110 cursor-pointer' />
                                            </div> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-20 w-full h-[175px] max-[500px]:h-[145px] max-[420px]:h-[125px] max-[380px]:h-[100px] max-md:my-2 flex overflow-hidden">
                        <SlideshowLightbox fullScreen showThumbnails className="container grid grid-cols-3 gap-2 mx-auto">
                            {
                                product.images.map((item, key) => (
                                    <img className="w-[310px] h-[175px] rounded object-cover max-[500px]:h-[145px] max-[420px]:h-[125px] max-[380px]:h-[100px]" key={key} src={item} />
                                ))
                            }
                        </SlideshowLightbox>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProductHeader