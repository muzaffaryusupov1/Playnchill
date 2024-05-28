import React from 'react'
import SearchInput from './SearchInput'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchResult({ active }) {
    const [result, setResult] = useState([])
    return (
        <>
            <SearchInput setResult={setResult} active={active} />
            <div className={result.length <= 0 ? 'hidden opacity-0' : 'w-[500px] bg-slate-800 flex flex-col rounded-xl mt-4 max-h-[300px] absolute z-30 p-3 opacity-100 overflow-y-scroll max-lg:w-[400px] max-md:right-[-100px] max-md:top-24 max-sm:left-[-200px]'}>
                {
                    result.map((results, id) => {
                        return (
                            <Link key={id} to={`product/${results.slug}`} className='[&:not(:last-child)]:mb-3'>
                                <div className='flex'>
                                    <div className='w-[200px] h-20 overflow-hidden max-lg:w-[150px]'>
                                        <img src={results.extraimg} alt={results.slug} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='ml-5'>
                                        <p className='mb-1 font-semibold text-lg max-lg:text-sm'>{results.title}</p>
                                        <p className='font-normal text-base max-lg:text-xs'>{results.price.toLocaleString()} Р</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SearchResult