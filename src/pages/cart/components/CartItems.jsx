import { useSelector } from "react-redux"
import CartProduct from "./CartProduct"

function CartItems() {
    const { items } = useSelector(state => state.cart)
    return (
        <div className="max-[980px]:w-full">
            {
                items.map(item => (
                    <CartProduct product={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default CartItems