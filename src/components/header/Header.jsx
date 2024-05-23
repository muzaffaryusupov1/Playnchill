import { Link } from 'react-router-dom'
import { CartIcon, CartIconWhite, FavouritesIcon, MenuIcon, MobileSearchIcon, SearchIcon } from '../../assets/icons'
import { useSelector } from 'react-redux'
import { SearchResult } from './components'

function Header() {
    const { items } = useSelector(state => state.cart)

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
                            <Link className='font-medium text-base leading-5 hover:underline mr-16 max-[1075px]:mr-6 max-[900px]:mr-8 max-[910px]:text-[12px] max-lg:mr-6'>Накопительный счет</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Отзывы</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Гарантии</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Как купить</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Накопительная</Link>
                            <Link className='font-medium text-base leading-5 hover:underline mr-8 max-[1050px]:mr-5 max-lg:mr-3 max-lg:text-sm max-[910px]:text-[12px]'>Заработай</Link>
                        </nav>
                        <div className='flex items-center gap-6 mr-8 max-lg:mr-4 max-[910px]:flex-col-reverse max-[910px]:gap-2'>
                            <p className='cursor-pointer font-medium text-base leading-5 max-[900px]:text-sm'>Hanzed Rules</p>
                            <button className='header-top__btn'>
                                <img src="/icon.svg" alt="profile icon" />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between my-6">
                        <div className="flex gap-14 max-md:flex-row-reverse max-md:gap-3">
                            <Link to={'/'} className='flex items-center gap-2.5'>
                                <img src="/site.logo.png" alt="site logo" />
                                <p className="text-3xl font-bold max-md:text-xl">Playnchill</p>
                            </Link>
                            <Link to={'/categories'} className='flex'>
                                <button className="mr-3 hover:border hover:border-solid hover:border-sky-500 p-2 ease-in-out duration-300 border rounded-lg border-solid border-transparent">
                                    <MenuIcon />
                                </button>
                            </Link>
                        </div>
                        <form className='relative'>
                            <SearchResult />
                        </form>
                        <p className="font-medium text-base leading-5 text-lime-500 cursor-pointer hover:underline max-sm:hidden">Бесплатно</p>
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