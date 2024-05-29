import { Link } from 'react-router-dom'
import { CartIcon, CartIconWhite, CloseWhiteIcon, DownArrowIcon, FavouritesIcon, MobileSearchIcon, SearchIcon } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCategoriesList } from '../../store/actions/homeActions'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useState } from 'react'
import SearchInput from './components/SearchInput'

function Header() {
    const { categories } = useSelector(state => state.home)
    const { items } = useSelector(state => state.cart)
    const { el } = useSelector(state => state.favourite)
    const [active, setActive] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoriesList())
    }, [])

    const handleActive = () => {
        setActive(true)
    }

    const handleClose = () => {
        setActive(false)
    }

    return (
        <header className='relative z-50'>
            <div className="container">
                <div className="header-wrapper">
                    <div className="flex items-center justify-between py-6 max-[900px]:py-3 max-md:hidden">
                        <select className='bg-transparent cursor-pointer p-1.5 border rounded'>
                            <option value="1" className='text-black p-1.5 max-[900px]:p-1'>Ru</option>
                            <option value="2" className='text-black p-1.5 max-[900px]:p-1'>Eng</option>
                        </select>
                        <nav className='header-top__nav'>
                            <button className='font-medium text-lg leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Каталог</button>
                            <Link to={'/support'} className='font-medium text-lg leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Поддержка</Link>
                            <Link to={'/advantages'} className='font-medium text-lg leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Наши преимущества</Link>
                            <Link to={'/reviews'} className='font-medium text-lg leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Отзывы</Link>
                        </nav>
                        <SignedOut>
                            <SignInButton mode='modal'>
                                <img src="/icon.png" alt="site icon" title='Sign In' className='w-9 h-9 cursor-pointer' />
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
                    <div className="flex items-center justify-between my-6">
                        <div className="flex gap-14 max-md:flex-row-reverse max-md:gap-3">
                            <Link to={'/'} className='flex items-center gap-2.5'>
                                <img src="/site.logo.png" alt="site logo" />
                                <p className="text-3xl font-bold max-md:text-xl">Playnchill</p>
                            </Link>
                        </div>
                        <form className='relative'>
                            <SearchInput active={active} />
                        </form>
                        <div className='flex gap-4'>
                            {
                                active ? null :
                                    <button onClick={handleActive} className="relative z-50 hidden max-md:block">
                                        <MobileSearchIcon />
                                    </button>
                            }
                            {
                                active ? <button onClick={handleClose} className="relative z-50 hidden max-md:block">
                                    <CloseWhiteIcon />
                                </button> : null
                            }
                            <Link to={'/favourites'} className='flex'>
                                <button className='max-sm:hidden relative'><FavouritesIcon />
                                    {
                                        el.length > 0 &&
                                        <span className="ml-2 bg-black absolute top-[-10px] right-[-10px] text-lime-500 rounded-full p-1">{el.length}</span>
                                    }
                                </button>
                            </Link>
                            <Link to={'/cart'} className='flex'>
                                <button className="relative"><CartIcon />
                                    {
                                        items.length >= 1 ?
                                            <span className="ml-2 bg-black absolute top-[-10px] right-[-10px] text-lime-500 rounded-full p-1">{items.length}</span> : null
                                    }
                                </button>
                            </Link>
                            <div className='hidden max-md:block'>
                                <SignedOut>
                                    <SignInButton mode='modal'>
                                        <img src="/icon.png" alt="site icon" title='Sign In' className='w-9 h-9 cursor-pointer' />
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
                </div>
            </div>
        </header>
    )
}

export default Header