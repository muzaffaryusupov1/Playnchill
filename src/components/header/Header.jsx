import { Link } from 'react-router-dom'
import { CartIcon, CartIconWhite, DownArrowIcon, FavouritesIcon, MobileSearchIcon } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { SearchResult } from './components'
import { useEffect } from 'react'
import { getCategoriesList } from '../../store/actions/homeActions'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function Header() {
    const { categories } = useSelector(state => state.home)
    const { items } = useSelector(state => state.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoriesList())
    }, [])

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
                            <Link to={'/support'} className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Поддержка</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Гарантии</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Как купить</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Накопительная</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Заработай</Link>
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
                            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="100" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                Categories
                                <DownArrowIcon />
                            </button>

                            <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">

                                    <li>
                                        {
                                            categories.list.map(item => (
                                                <Link key={item.id} to={`/category/${item.slug}-${item.id}`}>
                                                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.title}</p>
                                                </Link>
                                            ))
                                        }
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <form className='relative'>
                            <SearchResult />
                        </form>
                        <div className='flex gap-4'>
                            <Link to={'/favourites'} className='flex'>
                                <button className='max-sm:hidden'><FavouritesIcon /></button>
                            </Link>
                            <button className='hidden max-sm:block'><MobileSearchIcon /></button>
                            <Link to={'/cart'} className='flex'>
                                <button className="max-sm:hidden relative"><CartIcon />
                                    {
                                        items.length >= 1 ?
                                            <span className="ml-2 bg-black absolute top-[-10px] right-[-10px] text-lime-500 rounded-full p-1">{items.length}</span> : null
                                    }
                                </button>
                                <button className='hidden max-sm:block'><CartIconWhite />
                                    {
                                        items.length >= 1 ?
                                            <span className="ml-2 bg-black absolute top-[-10px] right-[-10px] text-lime-500 rounded-full p-1">{items.length}</span> : null
                                    }
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header