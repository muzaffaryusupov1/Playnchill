import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/icons/index/'
import FavouritesIcon from '../../../assets/icons/FavouritesIcon'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { addCart } from '../../../store/slices/cart'
import { addFavorite } from '../../../store/slices/favourite'
import { CartIcon } from '../../../assets/icons'

function CategoryProducts() {
    const { products } = useSelector(state => state.products)
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
        <div className="flex gap-5 max-[1060px]:gap-3 max-[655px]:gap-3 max-[578px]:gap-2 max-[540px]:gap-3 max-[382px]:gap-5 max-[370px]:gap-3 max-[360px]:gap-2 flex-wrap">
            {
                products.list.map(item => (
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
                            {/* <button className='hidden group-hover:block bg-white rounded-full p-2.5 absolute top-5 right-3 max-[574px]:block max-[574px]:top-3 max-[574px]:right-3 max-[450px]:top-[84%] max-[388px]:top-[81%]' onClick={() => handleAddOrder(item)}>
                                <FavouritesIcon />
                            </button>
                            <button className='hidden transition group-hover:duration-300 group-hover:block absolute bottom-1/4 max-[1219px]:bottom-[170px] max-[1200px]:w-10/12 max-[895px]:w-[90%] max-[895px]:bottom-[25%] max-[790px]:bottom-[30%] max-[790px]:p-0 max-md:text-base max-md:h-10 max-md:p-1 max-[654px]:w-[260px] max-[648px]:bottom-[100px] max-[642px]:w-[250px max-[604px]:w-[220px] h-14 border-solid border-transparent bg-lime-500 w-64 rounded-xl p-3 mb-5 hover:bg-transparent hover:border-solid hover:border-white font-bold text-lg max-[574px]:block max-[574px]:bottom-14 max-[574px]:right-3 max-[500px]:m-0 max-[500px]:mb-[10px] max-[450px]:mb-0' onClick={() => handleAdd(item)}>
                                В корзину
                            </button> */}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryProducts