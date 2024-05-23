import React from 'react'
import { FavouritesIcon } from '../../../../assets/icons'
import { useSelector } from 'react-redux'
import RecommendedListSkeleton from '../recommended-list/components/RecommendedListSkeleton'
import { Link } from 'react-router-dom'

function Product() {
    const { products } = useSelector(state => state.home)

    return (
        <section className='product'>
            <div className="container">
                <div className="product-wrapper">
                    <div className="mb-8 max-[400px]:mb-3">
                        <h3 className='font-semibold text-3xl text-white max-[574px]:text-2xl max-[400px]:text-lg'>Новинки</h3>
                    </div>
                    <div className="flex flex-wrap gap-5 max-[1060px]:gap-3 max-lg:flex-wrap max-[500px]:gap-5 max-[574px]:flex-col">
                        {
                            products.loading ? <RecommendedListSkeleton cards={9} /> : products.list.map(item => (
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
                                        <button className='hidden group-hover:block bg-white rounded-full p-2.5 absolute top-5 right-3 max-[574px]:bg-transparent max-[574px]:top-[85%] max-[574px]:right-0 max-[388px]:top-[75%]'>
                                            <FavouritesIcon />
                                        </button>
                                        <button className='hidden group-hover:block absolute bottom-1/4 max-[1219px]:bottom-[170px] max-[1200px]:w-10/12 max-md:text-base max-md:h-10 max-md:p-1 max-[684px]:bottom-32 max-[670px]:bottom-36 max-[654px]:w-[260px] max-[642px]:bottom-44 max-[642px]:w-[250px max-[604px]:w-[220px] max-[574px]:hidden h-14 border-solid border-transparent bg-lime-500 w-64 rounded-xl p-3 mb-5 ease-in-out duration-300  hover:bg-transparent hover:border-solid hover:border-white font-bold text-lg' >
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product