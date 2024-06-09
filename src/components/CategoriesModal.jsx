import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesList } from '../store/actions/homeActions'
import { categoriesModalClose } from '../store/slices/categoriesmodal'
import { Link, useNavigate } from 'react-router-dom'
import { CartIcon, ChevronRightIcon, FavouritesIcon, HomeIcon } from '../assets/icons'
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/clerk-react";

function CategoriesModal() {
    const { categories } = useSelector(state => state.home)
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
        location.reload()
    }

    // Cart
    const handleCart = () => {
        navigate('/cart')
        location.reload()
    }

    // Favourite
    const handleFavourite = () => {
        navigate('/favourites')
        location.reload()
    }

    const handleCategories = () => {
        navigate('/category/survival-game-1')
        location.reload()
    }

    return (
        <div className='categories-modal'>
            <div className='absolute top-0 left-0 w-full h-full bg2 z-[1000]' onClick={handleClose}></div>
            <div className="fixed top-0 left-0 w-[400px] h-full bg-slate-800 z-[10000] max-sm:w-[230px]">
                <div className='px-7 pt-7 mb-4'>
                    <div className='flex items-center gap-2'>
                        <button onClick={handleCategories} className='font-bold text-3xl text-white max-sm:text-lg flex items-center'>Каталог
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
                <div className='px-6 hidden max-sm:flex gap-4 mt-3 items-start flex-col'>
                    <button onClick={handleHome} className='flex flex-col items-center gap-2 w-16'>
                        <HomeIcon className="fill-lime-400" />
                        Home
                    </button>
                    <button onClick={handleCart} className='flex flex-col items-center gap-2 w-16'>
                        <CartIcon />
                        Cart
                    </button>
                    <button onClick={handleFavourite} className='flex flex-col items-center gap-2 mt-1.5 w-16'>
                        <FavouritesIcon />
                        Favourite
                    </button>
                </div>
                <div className='px-6 mt-3 hidden max-md:block'>
                    <h3 className='ml-1.5 font-bold text-2xl text-white'>
                        {user ? 'Profile:' : 'SignIn:'}
                    </h3>
                    <SignedOut>
                        <SignInButton mode='modal'>
                            <h3 className='ml-1.5 font-bold text-lg text-white mt-2 max-sm:text-lg cursor-pointer'>Login</h3>
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
                <div className='hidden max-sm:flex flex-col px-6 gap-2'>
                    <Link className='ml-1.5 font-bold text-2xl text-white max-sm:text-lg' to={'/support'} reloadDocument={true}>Поддержка</Link>
                    <Link className='ml-1.5 font-bold text-2xl text-white max-sm:text-lg w-[200px]' to={'/advantages'} reloadDocument={true}>Наши преимущества</Link>
                    <Link className='ml-1.5 font-bold text-2xl text-white max-sm:text-lg' to={'/reviews'} reloadDocument={true}>Отзывы</Link>
                </div>
            </div>
        </div>
    )
}

export default CategoriesModal