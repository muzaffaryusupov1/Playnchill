import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CartIcon, LikedIcon } from '../../assets/icons'
import { removeFavorite } from '../../store/slices/favourite'
import { addCart } from '../../store/slices/cart'
import toast from 'react-hot-toast'
import RecommendedListSkeleton from '../home/components/recommended-list/components/RecommendedListSkeleton'

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
              <div className="w-96 h-96 max-md:w-72 max-md:h-72 max-sm:w-60 max-sm:h-60">
                <img src="https://cdn-icons-png.freepik.com/256/10218/10218522.png?semt=ais_hybrid" alt="cart empty img" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <h3 className="font-bold text-xl text-white max-md:text-base">Пока нет избранных</h3>
                <button className="bg-transparent border border-solid border-neutral-500 py-3 px-5 flex items-center justify-center mb-4 rounded-lg hover:border-transparent hover:bg-white hover:text-black ease-in-out duration-200 max-sm:text-xs max-sm:py-2 max-sm:px-3 max-sm:mb-2" onClick={handleHome}>На главную</button>
              </div>
            </div>
            :
            <div>

              <div>
                <h3 className='font-bold text-4xl text-white mb-6 max-md:text-xl max-sm:text-sm max-sm:mb-2'>В избранном</h3>
              </div>

              <div className="flex gap-5 max-[1060px]:gap-3 max-[655px]:gap-3 max-[578px]:gap-2 max-[540px]:gap-3 max-[382px]:gap-5 max-[370px]:gap-3 max-[360px]:gap-2 flex-wrap">
                {
                  el.loading ? <RecommendedListSkeleton cards={2} /> : el.map(item => (
                    <div className='w-[300px] h-3/4 ease-out duration-300 transition group inline-block relative max-[863px]:w-[270px] max-[804px]:w-[240px] max-[743px]:w-[220px] max-[703px]:w-[200px] max-[663px]:w-[180px] max-[651px]:w-[280px] max-[602px]:w-[250px] max-[540px]:w-[220px] max-[484px]:w-[200px] max-[442px]:w-[170px] max-[382px]:w-[160px] max-[358px]:w-[148px]' key={item.id}>
                      <Link to={`/product/${item.slug}`}>
                        <div className='w-full h-[450px] max-[863px]:h-[400px] max-[743px]:h-[350px] max-[703px]:h-[310px] max-[663px]:h-[270px] max-[651px]:h-[400px] max-[602px]:h-[350px] max-[484px]:h-[300px] max-[442px]:h-[280px] max-[382px]:h-[250px]'>
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
                        <div className='absolute top-2 right-3 max-sm:top-0.5 max-sm:right-1'>
                          <button className='p-3 bg-slate-300 rounded-full max-sm:p-1' onClick={() => handleUnOrder(item.id)}>
                            <LikedIcon />
                          </button>
                        </div>
                        <button className='hidden transition group-hover:duration-300 group-hover:block absolute bottom-1/4 h-14 border-solid border-transparent bg-lime-500 w-64 rounded-xl p-3 mb-5 hover:bg-transparent hover:border-solid hover:border-white font-bold text-lg text-center max-[863px]:w-[240px] max-[805px]:w-[210px] max-[863px]:p-2.5 max-[743px]:w-[190px] max-[743px]:h-12 max-[743px]:text-base max-[703px]:right-[5px] max-[663px]:w-[140px] max-[663px]:h-10 max-[663px]:text-sm max-[663px]:right-[20px] max-[651px]:w-[260px] max-[651px]:right-[10px] max-[651px]:mb-0 max-[602px]:w-[230px] max-[602px]:block max-[602px]:right-[10px] max-[574px]:bottom-[80px] max-[541px]:w-[200px] max-[485px]:w-[170px] max-[485px]:h-9 max-[485px]:text-xs max-[485px]:p-0 max-[442px]:w-[150px] max-[422px]:h-8 max-[382px]:w-[130px] max-[382px]:right-[15px] max-[382px]:bottom-[65px] max-[358px]:w-[130px] max-[358px]:right-[10px]' onClick={() => handleAdd(item)}>
                          В корзину
                        </button>
                      </div>
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