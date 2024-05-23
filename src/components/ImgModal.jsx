import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../style/main.css'
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { imgModalClose } from '../store/slices/imgmodal';
import { CloseWhiteIcon } from '../assets/icons';

function ImgModal() {
    const { product, loading } = useSelector(state => state.product)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(imgModalClose('imgModal'))
    }

    return (
        <div className='img-modal'>
            <div className='img-modal__bg'></div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    product.images.map((item, i) => (
                        <div className='relative' key={i}>
                            <SwiperSlide className='flex items-center justify-center cursor-pointer'>
                                <div className='w-[1300px] h-[800px]'>
                                    <img src={item} alt="img" />
                                </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
            <button className='cursor-pointer absolute p-8 top-20 right-20 border border-solid border-white z-40 flex items-center justify-center' onClick={handleClose}><CloseWhiteIcon /></button>
        </div>
    );
}

export default ImgModal