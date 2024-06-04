import React from 'react'
import { CartIcon, FavouritesIcon } from '../../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../../../store/slices/cart'
import { addFavorite } from '../../../store/slices/favourite'
import toast from 'react-hot-toast'

function ReleatedItems() {
  const { recommended } = useSelector(state => state.product)
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
    <section className='my-9'>
      <div className="container">
        <div className="releated-items__wrapper">
          <div className="mb-8 max-[400px]:mb-3">
            <h3 className='font-semibold text-3xl text-white max-sm:text-2xl max-[574px]:text-xl max-[400px]:text-sm'>Вам будет интересно</h3>
          </div>
          <div className='w-full scroll'>
            <div className="flex gap-5">
              {
                recommended.list.slice(0, 4).map(item => (
                  <div className='w-[300px] h-3/4 ease-out duration-300 transition group inline-block relative ' key={item.id}>
                    <Link to={`/product/${item.slug}`}>
                      <div className='w-[300px] h-[450px] max-sm:w-[230px] max-sm:h-[300px]'>
                        <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                      </div>
                    </Link>
                    <div className='p-4 max-[810px]:p-3 max-[684px]:p-2 max-[574px]:p-1 max-[435px]:p-1'>
                      <div className='flex items-center gap-5 mb-2 max-[1154px]:gap-4 max-[810px]:gap-2 max-[684px]:gap-2 max-[574px]:gap-4 max-[365px]:gap-1 max-[435px]:gap-1 max-[442px]:mb-0'>
                        {<p className="text-white font-medium text-2xl max-[1218px]:text-xl max-lg:text-base max-[684px]:text-sm max-[574px]:text-base max-[442px]:text-[10px] max-[365px]:text-[12px] max-[300px]:text-[10px]">{item.price ? `${item.price.toLocaleString()} Р` : 'Бесплатно'}</p>}
                        {item.discount ? <p className="font-medium text-lg text-lime-500 max-lg:text-base max-[684px]:text-sm max-[574px]:text-sm max-[442px]:text-[10px] max-[365px]:text-[10px] max-[300px]:text-[9px]">-{item.discount}%</p> : null}
                        {item.oldPrice ? <p className="font-normal text-lg text-neutral-700 line-through max-lg:text-base max-[684px]:text-sm max-[574px]:text-xs max-[442px]:text-[10px] max-[365px]:text-[10px] max-[300px]:text-[9px]">${item.oldPrice?.toLocaleString()} Р</p> : null}
                      </div>
                      <div>
                        <p className="font-normal text-base text-white mb-2 h-12 max-[574px]:w-2/4 max-[574px]:h-full max-md:text-sm max-[574px]:text-xs max-[465px]:text-[12px] max-[465px]:w-full max-[442px]:text-[10px]">{item.title.split(' ').slice(0, 3).join(' ')}</p>
                      </div>
                      <button className='hidden group-hover:block bg-white rounded-full p-2.5 absolute top-5 right-3 max-[602px]:block' onClick={() => handleAddOrder(item)}>
                        <FavouritesIcon />
                      </button>
                      <button className='hidden transition group-hover:duration-300 group-hover:block absolute bottom-1/4 h-14 border-solid border-transparent bg-lime-500 w-64 rounded-xl p-3 mb-5 hover:bg-transparent hover:border-solid hover:border-white font-bold text-lg text-center max-[810px]:bottom-[110px] max-[810px]:right-[20px] max-sm:w-[200px]' onClick={() => handleAdd(item)}>
                        В корзину
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReleatedItems