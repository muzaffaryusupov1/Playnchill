import React from 'react'
import { CheckMarkIcon, HeartIcon } from '../../../assets/icons'
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

    return (
        <div className="product-header">
            <div className="container">
                <div className="product-wrapper">
                    <div className='flex gap-16 max-lg:gap-9 max-[850px]:gap-4 max-sm:flex-col max-sm:justify-center max-sm:items-center'>
                        <div className='h-full'>
                            <div className="w-[350px] h-[478px] rounded-2xl overflow-hidden max-sm:w-full max-sm:h-[400px]">
                                <img src={product.image} alt={product.title} className='w-full h-full object-cover max-sm:object-contain' />
                            </div>
                            <div className="my-20 hidden max-sm:block max-[660px]:my-7 max-[570px]:my-2">
                                <Swiper slidesPerView={3} modules={[Navigation]}>
                                    {
                                        product.images.map((item, key) => (
                                            <SwiperSlide className='h-44' onClick={handleModal}>
                                                <div key={key} className='w-[220px] h-[167px] max-[570px]:w-[155px] max-[570px]:h-[110px] rounded-2xl overflow-hidden cursor-zoom-in hover:scale-105 ease-out duration-300'>
                                                    <img src={item} alt="product img" className='w-full h-full object-cover' />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                        <div className="content">
                            <div className='flex flex-col gap-5 mb-5'>
                                <h3 className='font-extrabold text-4xl text-white'>{product.title}</h3>
                                <div className='flex items-center gap-2'>
                                    <span className={product.inStock ? "w-2 h-2 rounded-full bg-lime-500" : "w-2 h-2 rounded-full bg-red-500"}></span>
                                    <p className="font-normal text-sm text-white">{product.inStock ? 'В наличии' : 'Net'}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 mb-5 max-[710px]:flex-wrap'>
                                <p className='font-bold text-3xl text-white'>{product.price.toLocaleString()} Р</p>
                                <p className='font-bold text-2xl text-lime-500'>-{product.discount}%</p>
                                {product.oldPrice ? <p className='font-bold text-3xl text-neutral-700 line-through'>{product.oldPrice.toLocaleString()} Р</p> : null}
                            </div>
                            <div className='flex items-center max-md:flex-wrap max-[720px]:gap-3'>
                                <button className='rounded-2xl py-6 px-9 bg-lime-500 mr-3 border border-solid border-transparent ease-in-out duration-300 hover:bg-transparent hover:border hover:border-solid hover:border-neutral-500' onClick={handleAddOrder}>В избранное</button>
                                <button className='rounded-2xl border border-solid border-neutral-500 py-6 px-9 bg-transparent mr-5 ease-in-out duration-300 hover:bg-lime-500 hover:border-transparent' onClick={handleAdd}>В корзину</button>
                            </div>
                            <div className='flex gap-16 my-10 max-lg:gap-4 max-md:flex-wrap'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='font-normal text-lg text-white'>Жанр</li>
                                    <li className='font-semibold text-xl text-white'>Гонки</li>
                                </ul>
                                <ul className='flex flex-col gap-2'>
                                    <li className='font-normal text-lg text-white'>Платформа</li>
                                    <li className='font-semibold text-xl text-white'>Steam</li>
                                </ul>
                                <ul className='flex flex-col gap-2'>
                                    <li className='font-normal text-lg text-white'>Регион активации</li>
                                    <li className='font-semibold text-xl text-white'>Страны СНГ</li>
                                </ul>
                                <ul className='flex flex-col gap-2'>
                                    <li className='font-normal text-lg text-white'>Тип товара</li>
                                    <li className='font-semibold text-xl text-white'>Учетная запись</li>
                                </ul>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span><CheckMarkIcon /></span>
                                <span className='font-semibold text-lg text-white'>Гарантия качества</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-20 w-[75%] max-md:my-2 max-sm:hidden">
                        <Swiper slidesPerView={3} modules={[Navigation]}>
                            {
                                product.images.map((item, key) => (
                                    <SwiperSlide className='h-44' onClick={handleModal}>
                                        <div key={key} className='w-[297px] max-md:w-[200px] max-md:h-[130px] mr-2 h-[167px] rounded-2xl overflow-hidden cursor-zoom-in hover:scale-105 ease-out duration-300'>
                                            <img src={item} alt="product img" className='w-full h-full object-cover' />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductHeader