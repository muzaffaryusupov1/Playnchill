import { useDispatch, useSelector } from "react-redux"
import CartProduct from "./CartProduct"
import { removeAll } from "../../../store/slices/cart"
import toast from "react-hot-toast"

function CartItems() {
    const { items } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAll(items.id))
        toast.error('Item deleted')
    }

    return (
        <div className="max-[980px]:w-full">
            {
                items.map(item => (
                    <CartProduct product={item} key={item.id} />
                ))
            }
            <div className="flex justify-end mt-3">
                <button onClick={handleRemove} className="border border-solid border-white font-bold text-base text-white p-4 rounded-2xl bg-transparent hover:bg-white hover:text-slate-800 ease-out duration-200">Удалить все</button>
            </div>
        </div>
    )
}

export default CartItems