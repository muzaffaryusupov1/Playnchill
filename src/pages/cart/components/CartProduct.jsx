import { useDispatch } from "react-redux";
import { CloseWhiteIcon, DeleteIcon, WhiteHeartIcon } from "../../../assets/icons"
import { decrement, increment, removeCart } from "../../../store/slices/cart";
import Counter from "../../../components/Counter";
import toast from "react-hot-toast";
import { addFavorite } from "../../../store/slices/favourite";


function CartProduct({ product }) {
    const { id, title, image, price, oldPrice, discount, qty, desc } = product
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeCart(id))
        toast.error('Item deleted')
    }

    const handleAddFavourite = () => {
        dispatch(addFavorite(product))
        toast.success('Item added')
    }

    const handleIncrement = () => {
        dispatch(increment(id))
    }

    const handleDecrement = () => {
        dispatch(decrement(id))
    }

    return (
        <div className="pt-7 w-[893px] max-[1160px]:w-[700px] max-[980px]:w-full flex justify-between max-[672px]:flex-col max-[672px]:justify-start max-sm:pt-2">
            <div className="flex">
                <div className="w-[200px] h-[240px] rounded-2xl overflow-hidden max-[580px]:w-[150px] max-[410px]:w-[140px] max-[410px]:h-[180px]">
                    <img src={image} alt="cart img" className='w-full h-full object-cover' />
                </div>
                <div className="flex flex-grow justify-between pl-8 max-xl:flex-grow-0 max-xl:w-10 max-[980px]:flex-grow max-sm:pl-4 max-[510px]:mb-10">
                    <div className='titles'>
                        <h3 className='font-medium text-2xl text-white mb-3 max-sm:text-lg max-[410px]:text-base'>{title}</h3>
                        <div className='flex items-center gap-5 mb-10 max-sm:gap-3 max-sm:mb-3'>
                            <p className='font-bold text-3xl text-white max-sm:text-lg max-[410px]:text-base'>{price?.toLocaleString()} Р</p>
                            <p className='font-bold text-2xl text-lime-500 max-sm:text-lg max-[410px]:text-base'>-{discount}%</p>
                            <p className='font-bold text-2xl text-neutral-500 opacity-35 line-through max-sm:text-lg max-[410px]:text-base'>{oldPrice?.toLocaleString()} Р</p>
                        </div>
                        <div className="w-[350px] max-sm:w-[200px] max-[450px]:w-full">
                            <p className="text-lg max-sm:text-sm max-[410px]:text-[10px] ">{desc?.split(' ').slice(0, 10).join(' ')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="hidden gap-2 mt-2 max-[672px]:flex">
                    <button className="p-2 cursor-pointer" onClick={handleAddFavourite}><WhiteHeartIcon /></button>
                    <button className="p-2 cursor-pointer" onClick={handleRemove}><DeleteIcon /></button>
                </div>
                <div className='flex flex-col items-end gap-y-16 max-[672px]:gap-0'>
                    <button className='p-3 max-[672px]:hidden' onClick={handleRemove}>
                        <CloseWhiteIcon />
                    </button>
                    <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={qty} />
                    <div>
                        <button className='p-3 max-[672px]:hidden' onClick={handleAddFavourite}><WhiteHeartIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct