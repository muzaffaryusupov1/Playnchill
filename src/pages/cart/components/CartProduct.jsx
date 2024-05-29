import { useDispatch } from "react-redux";
import { CloseWhiteIcon, WhiteHeartIcon } from "../../../assets/icons"
import { decrement, increment, removeAll, removeCart } from "../../../store/slices/cart";
import { useNavigate } from "react-router-dom";
import Counter from "../../../components/Counter";
import toast from "react-hot-toast";


function CartProduct({ product }) {
    const { id, title, image, price, oldPrice, discount, qty, desc } = product
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeCart(id))
        toast.error('Item deleted')
    }

    const handleIncrement = () => {
        dispatch(increment(id))
    }

    const handleDecrement = () => {
        dispatch(decrement(id))
    }

    return (
        <div className="pt-7 w-[893px] flex">
            <div className="w-[200px] h-[240px] rounded-2xl overflow-hidden">
                <img src={image} alt="cart img" className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-grow justify-between pl-8">
                <div className='titles'>
                    <h3 className='font-medium text-2xl text-white mb-3'>{title}</h3>
                    <div className='flex items-center gap-5 mb-10'>
                        <p className='font-bold text-3xl text-white'>{price?.toLocaleString()} Р</p>
                        <p className='font-bold text-2xl text-lime-500'>-{discount}%</p>
                        <p className='font-bold text-2xl text-neutral-500 opacity-35 line-through'>{oldPrice?.toLocaleString()} Р</p>
                    </div>
                    <div className="w-[350px]">
                        <p>{desc?.split(' ').slice(0, 10).join(' ')}</p>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-between'>
                    <button className='p-3' onClick={handleRemove}>
                        <CloseWhiteIcon />
                    </button>
                    <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={qty} />
                    <div>
                        <button className='p-3'><WhiteHeartIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct