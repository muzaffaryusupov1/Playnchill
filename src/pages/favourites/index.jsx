import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CartIcon, LikedIcon } from '../../assets/icons'
import { removeFavorite } from '../../store/slices/favourite'
import { addCart } from '../../store/slices/cart'
import toast from 'react-hot-toast'

function Favourites() {
  const { el } = useSelector(state => state.favourite)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  const handleAdd = (item) => {
    dispatch(addCart(item))
    toast.success('Товар успешно добавлен')
  }

  const handleUnOrder = (id) => {
    dispatch(removeFavorite(id))
    toast.error('Item deleted')
  }

  return (
    <div className='mb-6'>
      <div className='container'>
        {
          el.length <= 0 ?
            <div className="flex items-center justify-center flex-col">
              <div className="w-96 h-96">
                <img src="https://cdn-icons-png.freepik.com/256/10218/10218522.png?semt=ais_hybrid" alt="cart empty img" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <h3 className="font-bold text-xl text-white">Пока нет избранных</h3>
                <button className="bg-transparent border border-solid border-neutral-500 py-3 px-5 flex items-center justify-center mb-4 rounded-lg hover:border-transparent hover:bg-white hover:text-black ease-in-out duration-200" onClick={handleHome}>На главную</button>
              </div>
            </div>
            :
            <div>

              <div>
                <h3 className='font-bold text-4xl text-white mb-6'>В избранном</h3>
              </div>

              <div className="flex flex-wrap gap-5 max-[1060px]:gap-3 max-lg:flex-wrap max-[500px]:gap-5 max-[574px]:flex-col">
                {
                  el.loading ? <RecommendedListSkeleton cards={2} /> : el.map(item => (
                    <div className='w-[300px] h-3/4 group relative max-[1040px]:w-[235px] max-[1006px]:w-[280px] max-[955px]:w-[260px] max-[840px]:w-[240px] max-[774px]:w-[220px] max-[716px]:w-[200px] max-[654px]:w-[300px] max-[642px]:w-[280px] max-[604px]:w-[260px] max-[574px]:flex max-[574px]:w-full' key={item.id}>
                      <Link to={`/product/${item.slug}`}>
                        <div className='w-full h-[400px] rounded-2xl cursor-pointer max-[574px]:w-[250px] max-[574px]:mr-3 max-[574px]:h-[400px] max-[574px]:rounded-2xl overflow-hidden max-[500px]:h-[340px] max-[450px]:h-[250px] max-[450px]:w-[200px] max-[390px]:w-[150px] max-[390px]:h-[200px] max-[310px]:h-[180px]'>
                          <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                        </div>
                      </Link>
                      <div className='p-4 max-[684px]:p-2 max-[574px]:p-1 max-[435px]:p-0'>
                        <div className='flex items-center gap-5 mb-2 max-[1154px]:gap-4 max-md:gap-3 max-[684px]:gap-2 max-[574px]:gap-4 max-[365px]:gap-1 max-[435px]:gap-1'>
                          <p className="text-white font-medium text-2xl max-[1218px]:text-xl max-lg:text-base max-[684px]:text-sm max-[574px]:text-base max-[435px]:text-[13px] max-[365px]:text-[12px] max-[300px]:text-[10px]">{item.price.toLocaleString()} Р</p>
                          <p className="font-medium text-lg text-lime-500 max-[684px]:text-sm max-[574px]:text-sm max-[435px]:text-[13px] max-[365px]:text-[10px] max-[300px]:text-[9px]">-{item.discount}%</p>
                          {item.oldPrice ? <p className="font-normal text-lg text-neutral-700 line-through max-lg:text-base max-[684px]:text-sm max-[574px]:text-xs max-[435px]:text-[13px] max-[365px]:text-[10px] max-[300px]:text-[9px]">{item.oldPrice.toLocaleString()} Р</p> : null}
                        </div>
                        <p className="font-normal text-base text-white mb-2 h-12 max-[574px]:w-[120px] max-[574px]:h-full max-md:text-sm max-[574px]:text-xs max-[465px]:text-[12px]">{item.title}</p>
                      </div>
                      <div className='absolute top-2 right-3'>
                        <button className='p-3 bg-neutral-400 rounded-full' onClick={() => handleUnOrder(item.id)}>
                          <LikedIcon />
                        </button>
                      </div>
                      <button className='hidden group-hover:block absolute bottom-1/4 right-5 max-[1219px]:bottom-[170px] max-[1200px]:w-10/12 max-[895px]:w-[90%] max-[895px]:bottom-[25%] max-[790px]:bottom-[30%] max-[790px]:p-0 max-md:text-base max-md:h-10 max-md:p-1 max-[654px]:w-[260px] max-[648px]:bottom-[100px] max-[642px]:w-[250px max-[604px]:w-[220px] max-[574px]:bottom-0 h-14 border-solid border-transparent bg-lime-500 w-64 rounded-xl p-3 mb-5 ease-in-out duration-300 hover:bg-transparent hover:border-solid hover:border-white font-bold text-lg max-[574px]:block max-[574px]:w-auto max-[574px]:bg-transparent max-[574px]:hover:border-transparent max-[574px]:right-10 max-[500px]:m-0 max-[500px]:mb-[10px] max-[450px]:mb-0' onClick={() => handleAdd(item)}>
                        <span className='max-[574px]:hidden'>В корзину</span>
                        <span className='max-[574px]:block'><CartIcon /></span>
                      </button>
                    </div>
                  ))
                }
              </div>

            </div>
        }

      </div>
    </div>
  )
}

export default Favourites