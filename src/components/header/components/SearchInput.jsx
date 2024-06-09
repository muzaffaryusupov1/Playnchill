import React from 'react'
import { useState } from 'react'
import { SearchIcon } from '../../../assets/icons'
import { useNavigate } from 'react-router-dom'

function SearchInput({ active, setActive }) {
    const [input, setInput] = useState("")
    const [result, setResult] = useState([])
    const navigate = useNavigate()


    const fetchData = (value) => {
        fetch("https://1e04a877b64f672f.mokky.dev/products").then((response) => response.json()).then(json => {
            const results = json.filter((product) => {
                return (
                    value &&
                    product &&
                    product.title &&
                    product.title.toUpperCase().includes(value) || product.title.toLowerCase().includes(value) || product.title.includes(value))
            })
            setResult(results)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
        if (value === 0 || value === '') {
            fetchData({})
        }
    }

    const handleNavigate = (slug) => {
        navigate(`/product/${slug}`)
        setResult([])
        setInput([])
        location.reload()
    }

    const handleClose = () => {
        setActive(false)
    }

    return (
        <div>

            <div className='flex items-center'>
                <input type="text" id='search' placeholder='Поиск' className={active ? 'max-md:block absolute top-10 z-40 left-[-300px] w-[500px] py-6 px-7 pr-12 bg-slate-950 border border-solid border-slate-400 rounded-2xl focus:border-sky-500 ease-out duration-300 max-[510px]:w-[400px] max-[500px]:left-[-200px] max-[500px]:w-[350px] max-[400px]:w-[300px] max-[400px]:left-[-190px]' : 'w-[648px] max-[1060px]:w-96 max-[800px]:w-[300px] max-md:hidden max-[574px]:w-[200px] py-6 px-7 pr-12 bg-slate-950 border border-solid border-slate-700 rounded-2xl focus:border-sky-500 ease-out duration-300'}
                    value={input}
                    onChange={e => handleChange(e.target.value)} />
                <div className={active ? "fixed w-screen h-screen top-0 z-30 left-0 bg-black/55" : 'hidden'} onClick={handleClose}></div>
                <label htmlFor="search" className='absolute right-0 p-3 cursor-pointer max-md:hidden'>
                    <SearchIcon />
                </label>
            </div>
            <div className={result.length === 0 ? 'hidden opacity-0' : 'search-result'}>
                {
                    result.map(item => {
                        return (
                            <div onClick={() => handleNavigate(item.slug)} className='[&:not(:last-child)]:mb-3 cursor-pointer' key={item.id}>
                                <div className='flex'>
                                    <div className='w-[200px] h-[80px] overflow-hidden max-lg:w-[150px] max-lg:h-[70px] max-[500px]:w-[120px]'>
                                        <img src={item.extraimg} alt={item.slug} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='ml-5'>
                                        <p className='mb-1 font-semibold text-lg max-lg:text-sm'>{item.title}</p>
                                        <p className='font-normal text-base max-lg:text-xs'>{item.price.toLocaleString()} Р</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchInput