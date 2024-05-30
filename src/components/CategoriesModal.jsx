import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesList } from '../store/actions/homeActions'
import { categoriesModalClose } from '../store/slices/categoriesmodal'
import { Link, useNavigate } from 'react-router-dom'
import { CartIcon, FavouritesIcon, HomeIcon } from '../assets/icons'
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
        navigate('/favourite')
        location.reload()
    }

    return (
        <div className='categories-modal'>
            <div className='absolute top-0 left-0 w-full h-full bg2 z-[1000]' onClick={handleClose}></div>
            <div className="fixed top-0 left-0 w-[400px] h-full bg-slate-800 z-[10000] max-sm:w-[230px]">
                <div className='px-7 pt-7 mb-4'>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-bold text-3xl text-white max-sm:text-lg'>Каталог</h3>
                    </div>
                </div>
                <div className='px-6'>
                    <ul className='flex flex-col gap-2'>
                        {
                            categories.list.map(item => (
                                <Link key={item.id} to={`/category/${item.slug}-${item.id}`} onClick={handleClose}>
                                    <li className='font-medium text-lg text-white p-1 border border-solid border-transparent hover:border-neutral-500 transition-all max-sm:text-sm'>{item.title}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='px-6 hidden max-sm:flex gap-4 mt-3'>
                    <button onClick={handleHome}>
                        <HomeIcon className="fill-lime-400" />
                    </button>
                    <button onClick={handleCart}>
                        <CartIcon />
                    </button>
                    <button onClick={handleFavourite}>
                        <FavouritesIcon />
                    </button>
                </div>
                <div className='px-6 mt-3 hidden max-md:block'>
                    <h3 className='ml-1.5 font-bold text-2xl text-white max-sm:text-lg'>
                        {user ? 'Profile' : 'SignIn'}
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
            </div>
        </div>
    )
}

export default CategoriesModal