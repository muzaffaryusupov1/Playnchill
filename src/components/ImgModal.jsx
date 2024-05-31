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
                                <div className='w-[1100px] h-[600px] max-[1100px]:w-[900px] max-[1100px]:h-[500px] max-[915px]:w-[700px] max-[915px]:h-[400px] max-[720px]:w-[580px] max-[720px]:h-[300px] max-[550px]:w-[440px]'>
                                    <img src={item} alt="img" />
                                </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
            <button className='cursor-pointer absolute p-4 rounded-lg top-5 max-md:top-14 max-md:right-3 max-sm:p-2 max-sm:top-20 right-10 border border-solid border-white z-40 flex items-center justify-center' onClick={handleClose}><CloseWhiteIcon /></button>
        </div>
    );
}

export default ImgModal