import { useSelector } from "react-redux"
import CartProduct from "./CartProduct"

function CartItems() {
    const { items } = useSelector(state => state.cart)
    return (
        <div>
            <div>
                {
                    items.map(item => (
                        <CartProduct product={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default CartItems