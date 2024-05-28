import React from 'react'
import { CheckMarkIcon, HeartIcon } from '../../../assets/icons'
import { useDispatch } from 'react-redux'
import { imgModalOpen } from '../../../store/slices/imgmodal'
import { addCart } from '../../../store/slices/cart'
import { toast } from 'react-toastify'
import { addFavorite } from '../../../store/slices/favourite'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../style/main.css';
import { Navigation } from 'swiper/modules';


function ProductHeader({ product }) {
    const dispatch = useDispatch()

    const handleModal = () => {
        dispatch(imgModalOpen('imgModal'))
    }

    const handleAdd = () => {
        dispatch(addCart(product))
        toast.success('Savatga qo\'shildi')
    }

    const handleAddOrder = (product) => {
        dispatch(addFavorite(product))
        toast.success('Sevimlilarga qo\'shildi')
    }

    return (
        <div className="product-header">
            <div className="container">
                <div className="product-wrapper">
                    <div className='flex gap-16'>
                        <div className="w-[350px] h-[478px] rounded-2xl overflow-hidden">
                            <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
                        </div>
                        <div className="content">
                            <div className='flex flex-col gap-5 mb-5'>
                                <h3 className='font-extrabold text-4xl text-white'>{product.title}</h3>
                                <div className='flex items-center gap-2'>
                                    <span className={product.inStock ? "w-2 h-2 rounded-full bg-lime-500" : "w-2 h-2 rounded-full bg-red-500"}></span>
                                    <p className="font-normal text-sm text-white">{product.inStock ? 'В наличии' : 'Net'}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 mb-5'>
                                <p className='font-bold text-3xl text-white'>{product.price.toLocaleString()} Р</p>
                                <p className='font-bold text-2xl text-lime-500'>-{product.discount}%</p>
                                {product.oldPrice ? <p className='font-bold text-3xl text-neutral-700 line-through'>{product.oldPrice.toLocaleString()} Р</p> : null}
                            </div>
                            <div className='flex items-center'>
                                <button className='rounded-2xl py-6 px-9 bg-lime-500 mr-3 border border-solid border-transparent ease-in-out duration-300 hover:bg-transparent hover:border hover:border-solid hover:border-neutral-500' onClick={() => handleAddOrder(product)}>В избранное</button>
                                <button className='rounded-2xl border border-solid border-neutral-500 py-6 px-9 bg-transparent mr-5 ease-in-out duration-300 hover:bg-lime-500 hover:border-transparent' onClick={handleAdd}>В корзину</button>
                                <button className='rounded-full border border-solid border-neutral-700 p-3 hover:border-sky-500 ease-in-out duration-300 hover:svg-sky-500'><HeartIcon /></button>
                            </div>
                            <div className='flex gap-16 my-10'>
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
                    <div className="my-20 w-[75%]">
                        <Swiper slidesPerView={3} modules={[Navigation]}>
                            {
                                product.images.map((item, key) => (
                                    <SwiperSlide className='h-44' onClick={handleModal}>
                                        <div key={key} className='w-[297px] h-[167px] rounded-2xl overflow-hidden cursor-zoom-in hover:scale-105 ease-out duration-300'>
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