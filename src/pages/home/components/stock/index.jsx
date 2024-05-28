import React from 'react'
import { FavouritesIcon } from '../../../../assets/icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import StockSkeleton from './StockSkeleton'

function Stock() {
  const { inStock } = useSelector(state => state.home)

  return (
    <section className='stock'>
      <div className="container">
        <div className="stock-wrapper">
          <div className="mb-5">
            <h3 className="font-semibold text-3xl text-white max-md:text-2xl max-sm:text-xl max-[574px]:mt-5 max-[574px]:text-lg">Акции и скидки
              <span className='text-lime-500'> %</span></h3>
          </div>
          <div className='flex flex-wrap gap-5 max-[710px]:gap-2'>
            {
              inStock.loading ? <StockSkeleton cards={2} /> : inStock.list.map(item => (
                <div className="mb-7 max-[710px]:mb-2 group relative" key={item.id}>
                  <Link to={`/product/${item.slug}`}>
                    <div className='w-[620px] h-[319px] rounded-2xl overflow-hidden max-[1290px]:w-[590px] max-[1230px]:w-[550px] max-[1150px]:w-[500px] max-[1050px]:w-[460px] max-[1050px]:h-[230px] max-[970px]:w-[420px] max-[970px]:h-[300px] max-[890px]:w-[380px] max-[890px]:h-[280px] max-[810px]:w-[330px] max-[810px]:h-[210px] max-[710px]:w-[300px] max-[710px]:h-[190px] max-[638px]:w-[600px] max-[638px]:h-[300px] max-[628px]:w-[550px] max-[579px]:w-[490px] max-[579px]:h-[250px] max-[519px]:w-[410px] max-[450px]:w-full max-[450px]:h-[200px]'>
                      <img src={item.extraimg} alt={item.title} className='w-full h-full object-cover' />
                    </div>
                  </Link>
                  <div className='p-8 max-[970px]:p-6 max-[970px]:pt-1 max-[710px]:p-0 max-[710px]:pt-[10px]'>
                    <div className='flex items-center gap-5 max-[970px]:gap-4'>
                      <p className="font-medium text-2xl text-white max-[970px]:text-xl">{item.price.toLocaleString()} Р</p>
                      {item.discount ? <p className="rounded-lg py-2 px-3 bg-lime-400 font-semibold text-lg text-white max-[970px]:text-base">-{item.discount}%</p> : null}
                      {item.oldPrice ? <p className="line-through font-normal text-lg text-neutral-700 max-[970px]:text-base">{item.oldPrice.toLocaleString()} Р</p> : null}
                    </div>
                    <h3 className="font-normal text-lg text-white max-[970px]:text-base">{item.title}</h3>
                  </div>
                  <button className='hidden group-hover:block bg-white rounded-full p-2.5 absolute top-5 right-3 max-[574px]:bg-transparent max-[574px]:top-[85%] max-[574px]:right-0 max-[388px]:top-[75%]'>
                    <FavouritesIcon />
                  </button>
                  <button className='hidden group-hover:block bg-lime-500 w-full py-3 rounded-2xl font-bold text-lg text-white border border-solid border-transparent absolute bottom-[33%]'>
                    В корзину
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stock