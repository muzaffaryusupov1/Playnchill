import React from 'react'
import { useState } from 'react'
import { SearchIcon } from '../../../assets/icons'

function SearchInput({ setResult }) {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("https://1e04a877b64f672f.mokky.dev/products").then((response) => response.json()).then(json => {
            const results = json.filter((product) => {
                return (
                    value &&
                    product &&
                    product.name &&
                    product.extraimg &&
                    product.price &&
                    product.name.toUpperCase().includes(value) || product.name.toLowerCase().includes(value) || product.title.includes(value))
            })
            setResult(results)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    const handleSubmit = () => {
        console.log(input);
    }

    return (
        <div className='flex items-center'>
            <input type="text" id='search' placeholder='Поиск' className='w-[648px] max-[1060px]:w-96 max-[800px]:w-60 max-md:hidden py-6 px-7 pr-12 bg-slate-950 border border-solid border-slate-700 rounded-2xl focus:border-sky-500 ease-out duration-300'
                value={input}
                onChange={(e) => handleChange(e.target.value)} />
            <label htmlFor="search" className='absolute right-0 p-3 cursor-pointer max-md:hidden' onClick={handleSubmit}>
                <SearchIcon />
            </label>
        </div>
    )
}

export default SearchInput