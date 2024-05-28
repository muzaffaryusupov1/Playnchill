import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeCart } from '../../store/slices/cart'
import Counter from '../../components/Counter'
import { CloseWhiteIcon, WhiteHeartIcon } from '../../assets/icons'

function Favourites() {
  const { items } = useSelector(state => state.favourite)



  return (
    <div className='container'>
      {
        items.map(item => (
          <div className="pt-7 w-[893px] flex" key={item.id}>
            <div className="w-[200px] h-[240px] rounded-2xl overflow-hidden">
              <img src={item.image} alt="cart img" className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-grow justify-between pl-8">
              <div className='titles'>
                <h3 className='font-medium text-2xl text-white mb-3'>{item.title}</h3>
                <div className='flex items-center gap-5 mb-10'>
                  <p className='font-bold text-3xl text-white'>{item.price.toLocaleString()} Р</p>
                  <p className='font-bold text-2xl text-lime-500'>-{item.discount}%</p>
                  <p className='font-bold text-2xl text-neutral-500 opacity-35 line-through'>{item.oldPrice.toLocaleString()} Р</p>
                </div>
                <div className="w-[350px]">
                  <p>{item.desc.split(' ').slice(0, 10).join(' ')}</p>
                </div>
              </div>
              <div className='flex flex-col items-end justify-between'>
                <button className='p-3'>
                  <CloseWhiteIcon />
                </button>
                <Counter />
                <div>
                  <button className='p-3'><WhiteHeartIcon /></button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Favourites