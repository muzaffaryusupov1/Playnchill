import React from 'react'
import { CartIcon, FavouritesIcon, HomeIcon } from '../assets/icons'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

function MobileModal() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

    const handleCart = () => {
        navigate('/cart')
    }

    const handleFavourite = () => {
        navigate('/favourites')
    }

    return (
        <div className='hidden max-[430px]:block fixed bottom-0 right-0 w-full z-[100000]'>
            <div className='w-full bg-neutral-600 flex items-center justify-center gap-6 h-10 rounded-3xl overflow-hidden backdrop-blur-[100px] max-[345px]:gap-2 max-[345px]:w-200px'>
                <div className='flex p-4 w-3 h-3 items-center justify-center rounded-full'>
                    <button onClick={handleNavigate}><HomeIcon /></button>
                </div>
                <div className='flex p-4 w-3 h-3 items-center justify-center rounded-full'>
                    <button onClick={handleCart}><CartIcon /></button>
                </div>
                <div className='flex p-4 w-3 h-3 items-center justify-center rounded-full'>
                    <button onClick={handleFavourite}><FavouritesIcon /></button>
                </div>
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
    )
}

export default MobileModal