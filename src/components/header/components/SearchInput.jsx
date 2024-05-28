import React from 'react'
import { useState } from 'react'
import { SearchIcon } from '../../../assets/icons'
import { useNavigate } from 'react-router-dom'

function SearchInput({ setResult, active }) {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const fetchData = (value) => {
        fetch("https://1e04a877b64f672f.mokky.dev/products").then((response) => response.json()).then(json => {
            const results = json.filter((product) => {
                return (
                    value &&
                    product &&
                    product.name &&
                    product.name.toUpperCase().includes(value) || product.name.toLowerCase().includes(value) || product.name.includes(value))
            })
            setResult(results)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    const handleSubmit = () => {
        navigate(`/product/${input}`)
    }

    return (
        <div className='flex items-center'>
            <input type="text" id='search' placeholder='Поиск' className={active ? 'max-md:block absolute top-10 z-40 left-[-300px] w-[500px] py-6 px-7 pr-12 bg-slate-950 border border-solid border-slate-400 rounded-2xl focus:border-sky-500 ease-out duration-300 max-[600px]:left-[-260px] max-[510px]:w-[450px] max-[500px]:left-[-200px] max-[500px]:w-[350px] max-[400px]:w-[250px] max-[400px]:left-[-140px]' : 'w-[648px] max-[1060px]:w-96 max-[800px]:w-[300px] max-md:hidden py-6 px-7 pr-12 bg-slate-950 border border-solid border-slate-700 rounded-2xl focus:border-sky-500 ease-out duration-300'}
                value={input}
                onChange={e => handleChange(e.target.value)} />
            <div className={active ? "fixed w-screen h-screen top-0 z-30 left-0 bg-black/55" : 'hidden'}></div>
            <label htmlFor="search" className='absolute right-0 p-3 cursor-pointer max-md:hidden' onClick={handleSubmit}>
                <SearchIcon />
            </label>
        </div >
    )
}

export default SearchInput