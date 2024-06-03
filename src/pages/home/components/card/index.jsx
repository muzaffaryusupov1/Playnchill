import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../style/main.css'
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import CardSkeleton from './components/CardSkeleton';
import { Link } from 'react-router-dom';
import { addCart } from '../../../../store/slices/cart';
import toast from 'react-hot-toast';
import { addFavorite } from '../../../../store/slices/favourite';

function Card() {
  const width = window.screen.width
  const { card } = useSelector(state => state.home)
  const dispatch = useDispatch()

  const handleAdd = (item) => {
    dispatch(addCart(item))
    toast.success('Savatga qo\'shildi')
  }

  const handleAddOrder = (item) => {
    dispatch(addFavorite(item))
    toast.success('Sevimlilarga qo\'shildi')
  }

  return (
    <section className='mt-14 mb-20'>
      <div className="container">
        <Swiper slidesPerView={width >= 770 ? 2 : 1} navigation={true} modules={[Navigation]} className="mySwiper ">
          <div className="flex items-center gap-5">
            {
              card.loading ? <CardSkeleton cards={2} /> : card.list.map(item => (
                <SwiperSlide className='w-1/2 h-96 rounded-xl p-10 relative flex flex-col justify-between mr-3 max-[450px]:h-80' key={item.id}>
                  <div className='absolute top-0 left-0 w-full h-full'>
                    <img src={item.cardimg} className='w-full h-full object-cover' />
                  </div>
                  <div>
                    <div className='relative z-10'>
                      <Link to={`/product/${item.slug}`}>
                        <p className='font-extrabold text-3xl w-96 mb-5 max-[970px]:text-xl max-[830px]:ml-0 max-[830px]:text-base max-[830px]:w-auto'>{item.title}</p>
                        <div className='flex items-end gap-5'>
                          <p className='font-extrabold text-2xl text-white max-[970px]:text-base'>{item.price.toLocaleString()} Р</p>
                          <p className='font-extrabold text-lg text-yellow-300 max-[970px]:text-base'>-{item.discount}%</p>
                          <p className='font-extrabold text-lg text-neutral-600 line-through max-[970px]:text-base'>{item.oldPrice.toLocaleString()} Р</p>
                        </div>
                      </Link>
                    </div>
                    <div className='flex items-center gap-2'>
                      <button className='mt-5 py-3 px-10 relative z-40 bg-transparent font-extrabold text-lg text-white border-transparent border-solid border-slate-500 hover:bg-white hover:border-white hover:text-black rounded-lg ease-in duration-300 max-[970px]:px-5 max-[970px]:py-2 max-[970px]:text-base max-[388px]:p-2 max-[388px]:text-xs' onClick={() => handleAdd(item)}>Купить</button>
                      <button className='mt-5 py-3 px-10 relative z-40 border-solid border-white bg-white font-extrabold text-lg text-black rounded-lg hover:bg-transparent hover:border-solid hover:text-white ease-in duration-300 max-[970px]:px-5 max-[970px]:py-2 max-[970px]:text-base max-[388px]:p-2 max-[388px]:text-xs' onClick={() => handleAddOrder(item)}>В избранное</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Card