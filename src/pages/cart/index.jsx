import { useSelector } from "react-redux"
import { CartCheckout, CartItems } from "./components"
import { useNavigate } from "react-router-dom"

function Cart() {
    const { items } = useSelector(state => state.cart)
    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    return (
        <div className='mb-10'>
            <div className="container">
                {
                    items.length <= 0 ?
                        <div className="flex items-center justify-center flex-col">
                            <div className="w-96 h-96 max-md:w-72 max-md:h-72 max-sm:w-60 max-sm:h-60">
                                <img src="https://cdn-icons-png.freepik.com/512/11329/11329060.png" alt="cart empty img" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3">
                                <h3 className="font-bold text-xl text-white max-md:text-base">В корзине пока нет товаров</h3>
                                <p className="font-medium text-lg text-white max-sm:text-sm max-sm:text-center">Начните с подборок на главной странице или найдите нужный товар через поиск</p>
                                <button className="bg-transparent border border-solid border-neutral-500 py-3 px-5 flex items-center justify-center mb-4 rounded-lg hover:border-transparent hover:bg-white hover:text-black ease-in-out duration-200 max-sm:text-xs max-sm:py-2 max-sm:px-3 max-sm:mb-2 max-sm:pointer-events-none" onClick={handleHome}>На главную</button>
                            </div>
                        </div>
                        :
                        <div className="cart-wrapper">
                            <div className="mb-8 max-sm:mb-2">
                                <h2 className='font-bold text-4xl text-white max-sm:text-2xl'>Корзина <span className='text-lime-500'>{items.length}</span></h2>
                            </div>
                            <div className="flex max-[980px]:flex-col">
                                <div className="mb-7">
                                    <CartItems />
                                </div>
                                <div className="cart-checkout max-[981px]:flex">
                                    <CartCheckout />
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Cart