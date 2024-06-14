import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategoriesList } from '../store/actions/homeActions'
import { categoriesModalClose } from '../store/slices/categoriesmodal'
import { useNavigate } from 'react-router-dom'
import { CartIcon, ChevronRightIcon, FavouritesIcon, HomeIcon } from '../assets/icons'
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/clerk-react";

function CategoriesModal() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useAuth()

    useEffect(() => {
        dispatch(getCategoriesList())
    }, [])

    const handleClose = () => {
        dispatch(categoriesModalClose('categoriesmodal'))
    }

    // Home
    const handleHome = () => {
        navigate('/')
        dispatch(categoriesModalClose('categoriesmodal'))
    }

    // Cart
    const handleCart = () => {
        dispatch(categoriesModalClose('categoriesmodal'))
        navigate('/cart')
    }

    // Favourite
    const handleFavourite = () => {
        navigate('/favourites')
        dispatch(categoriesModalClose('categoriesmodal'))
    }

    // Categories
    const handleCategories = () => {
        navigate('/category/survival-game-1')
        dispatch(categoriesModalClose('categoriesmodal'))
    }

    // Advantages
    const handleAdvantages = () => {
        navigate('/advantages')
        dispatch(categoriesModalClose('categoriesmodal'))
    }

    // Reviews
    const handleReviews = () => {
        navigate('/reviews')
        dispatch(categoriesModalClose('categoriesmodal'))
    }

    // Support
    const handleSupport = () => {
        navigate('/support')
        dispatch(categoriesModalClose('categoriesmodal'))
    }

    return (
        <div className='categories-modal'>
            <div className='absolute top-0 left-0 w-full h-full bg2 z-[1000]' onClick={handleClose}></div>
            <div className="fixed top-0 left-0 w-[400px] h-full bg-slate-900 z-[10000] max-sm:w-[230px]">
                <div className='px-7 py-2 mt-5 mb-4 bg-slate-700 rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <button onClick={handleCategories} className='font-bold text-3xl text-white max-sm:text-lg flex items-center'>Каталог
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
                <div className='px-6 py-4 hidden max-sm:flex gap-5 mt-3 items-start flex-col bg-slate-700 rounded-lg'>
                    <button onClick={handleHome} className='flex items-center gap-2'>
                        <HomeIcon className="fill-lime-400" />
                        Home
                    </button>
                    <button onClick={handleCart} className='flex items-center gap-2'>
                        <CartIcon />
                        Cart
                    </button>
                    <button onClick={handleFavourite} className='flex items-center gap-2'>
                        <FavouritesIcon />
                        Favourite
                    </button>
                </div>
                <div className='px-6 mt-3 hidden max-md:block  bg-slate-700 rounded-lg mb-4'>
                    <h3 className='font-bold text-2xl text-white'>
                        {user ? 'Profile:' : 'SignIn:'}
                    </h3>
                    <SignedOut>
                        <SignInButton mode='modal'>
                            <h3 className='font-bold text-lg text-white mt-2 max-sm:text-lg cursor-pointer'>Signin and Login</h3>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn >
                        <UserButton showName appearance={{
                            elements: {
                                avatarBox: 'w-9 h-9',
                            }
                        }} />
                    </SignedIn>
                </div>
                <div className='hidden max-sm:flex flex-col items-start px-6 py-3 gap-2 bg-slate-700 rounded-lg'>
                    <button onClick={handleSupport} className='font-bold text-xl text-white max-sm:text-lg'>Поддержка</button>
                    <button onClick={handleAdvantages} className='font-bold text-xl text-white max-sm:text-lg text-start'>Наши преимущества</button>
                    <button onClick={handleReviews} className='font-bold text-xl text-white max-sm:text-lg'>Отзывы</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesModal