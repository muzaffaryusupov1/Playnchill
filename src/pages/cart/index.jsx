import { useSelector } from "react-redux"
import { CartCheckout, CartItems } from "./components"
import { useNavigate } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

function Cart() {
    const { items } = useSelector(state => state.cart)
    const navigate = useNavigate()
    const { user } = useUser();

    const handleHome = () => {
        navigate('/')
    }

    return (
        <div className='cart'>
            <div className="container">
                {
                    items.length <= 0 ?
                        <div className="flex items-center justify-center flex-col">
                            <div className="w-96 h-96 max-md:w-72 max-md:h-72 max-sm:w-60 max-sm:h-60 max-[400px]:w-[100px] max-[400px]:h-[100px]">
                                <img src="https://cdn-icons-png.freepik.com/512/2762/2762885.png" alt="cart empty img" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3">
                                <h3 className="font-bold text-xl text-white max-md:text-base">В корзине пока нет товаров</h3>
                                <p className="font-medium text-lg text-white max-sm:text-sm max-sm:text-center">Начните с подборок на главной странице или найдите нужный товар через поиск</p>
                                <button className="bg-transparent border border-solid border-neutral-500 py-3 px-5 flex items-center justify-center mb-4 rounded-lg hover:border-transparent hover:bg-white hover:text-black ease-in-out duration-200 max-sm:text-xs max-sm:py-2 max-sm:px-3 max-sm:mb-2" onClick={handleHome}>На главную</button>
                            </div>
                        </div>
                        :
                        <div className="cart-wrapper">
                            <div className="mb-8">
                                <h2 className='font-bold text-4xl text-white'>Корзина <span className='text-lime-500'>{items.length}</span></h2>
                            </div>
                            <div className="flex">
                                <div className="cart-main">
                                    {
                                        user ? null :
                                            <div className="mb-7">
                                                <div className="relative w-[893px]">
                                                    <div className="absolute z-0 w-[893px] h-[244px] rounded-2xl">
                                                        <img src="/cart/cart-img1.png" alt="cart img" className='w-full h-full object-contain' />
                                                    </div>
                                                    <div className='relative z-10 p-8'>
                                                        <h3 className='font-extrabold text-3xl text-white'>Войдите или зарегистрируйтесь</h3>
                                                        <p className='font-medium text-xl text-white w-[603px] mt-3 mb-7'>
                                                            Вы сможете накапливать <span className='font-extrabold'>бонусные рубли </span>
                                                            и использовать их при оплате до <span className='font-extrabold'>50% </span> стоимости товаров.
                                                        </p>
                                                        <SignedOut>
                                                            <SignInButton mode='modal'>
                                                                <button className='bg-white rounded-xl py-3 px-7 font-light text-base text-black hover:bg-transparent hover:text-white border border-solid border-transparent hover:border-white ease-in duration-200'>Войти</button>
                                                            </SignInButton>
                                                        </SignedOut>
                                                        <SignedIn >
                                                            <UserButton appearance={{
                                                                elements: {
                                                                    avatarBox: 'w-9 h-9',
                                                                }
                                                            }} />
                                                        </SignedIn>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                    <div className="mb-7">
                                        <CartItems />
                                    </div>
                                </div>
                                <div className="cart-checkout">
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