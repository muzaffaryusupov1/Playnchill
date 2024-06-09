import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../../style/main.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { addCart } from '../../../../store/slices/cart';
import toast from 'react-hot-toast';
import { addFavorite } from '../../../../store/slices/favourite';

function Banner() {
    const { banners } = useSelector(state => state.home)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
        toast.success("Товар успешно добавлен")
    }

    const handleAddFavourite = (item) => {
        dispatch(addFavorite(item))
        toast.success("Добавлено в избранное")
    }


    return (
        <div className='banner'>
            <div className="container">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    className="mySwiper">
                    <div className='relative flex items-end'>
                        {
                            banners.loading ? <Skeleton width={1260} baseColor='gray' className='opacity-70 h-[700px] rounded-2xl overflow-hidden max-md:h-[400px] max-sm:h-[300px] max-[450px]:h-[250px]' /> :
                                banners.list.map(item => (
                                    <SwiperSlide className='two' key={item.id}>
                                        <div className="w-full h-[700px] rounded-2xl overflow-hidden max-md:h-[500px] max-sm:h-[300px] max-[390px]:h-[240px]">
                                            <img src={item.bannerimg} alt={item.title} className="w-full h-full max-[450px]:object-cover" />
                                        </div>

                                        <div className="absolute pl-28 max-lg:pl-10 max-lg:pb-12 pb-32 max-md:pb-5 max-sm:pb-0 max-sm:pl-5 flex-col">
                                            <div className="mb-5 mr-10 w-[151px] h-[100px] max-lg:mb-2 max-lg:w-40 max-md:w-24 max-sm:w-20 max-sm:h-8 ">
                                                <img src={item.bannerlogo} alt='img' className='banner-content__img' />
                                            </div>
                                            <p className="w-3/6 h-28 max-lg:h-20 max-md:h-16 font-normal text-2xl text-white max-lg:text-lg max-md:text-base max-sm:text-sm max-[543px]:w-9/12 max-[543px]:text-[12px] max-[378px]:w-[90%] max-[378px]:mb-10 max-[378px]:text-[10px]">
                                                {item.desc.split(' ').slice(0, 17).join(' ')}
                                            </p>
                                            <div className="flex items-end gap-4 my-10 max-lg:my-6 max-md:my-9 max-sm:my-12 max-[450px]:gap-2 max-[550px]:my-8 max-[450px]:my-4">
                                                <p className="font-extrabold text-3xl text-white max-lg:text-xl max-md:text-base max-[450px]:text-[12px]">{item.price ? `${item.price.toLocaleString()} Р` : 'Бесплатно играть'}</p>
                                                {item.discount ? <p className="font-extrabold text-xl text-lime-500 max-md:text-sm max-[450px]:text-[10px]">-{item.discount}%</p> : null}
                                                {item.oldPrice ? <p className="font-semibold text-xl text-gray-500 max-md:text-sm max-[450px]:text-[10px]">{item.oldPrice.toLocaleString()} Р</p> : null}
                                            </div>
                                            {
                                                item.price === 0 ? null :
                                                    <div className="flex items-center gap-2.5">
                                                        <button className="rounded-2xl border h-16 border-transparent border-solid hover:border-white hover:bg-transparent hover:text-white py-5 max-lg:py-2 max-md:hidden w-40 bg-white font-semibold text-base text-black ease-in duration-300" onClick={() => handleAdd(item)}>В корзину</button>
                                                        <button className="border h-16 border-white border-solid rounded-2xl py-5 max-lg:py-2 max-md:hidden w-40 font-semibold text-base text-white hover:bg-white hover:text-black hover:border-white ease-in duration-300" onClick={() => handleAddFavourite(item)}>В избранное</button>
                                                    </div>
                                            }
                                        </div>
                                    </SwiperSlide>

                                ))
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default Banner