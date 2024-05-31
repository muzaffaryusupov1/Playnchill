import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import FilterModal from "./FilterModal";
import { useState } from "react";
import { FilterIcon } from "../../../assets/icons";

function CategoriesSidebar() {
    const { products, categories } = useSelector(state => state.products);
    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(true)
    }

    const handleClose = () => {
        setActive(false)
    }

    return (
        <div>
            <div className="w-[300px] border-neutral-600 px-4 max-[651px]:hidden">
                <div className="flex flex-col gap-5">
                    <div>
                        <h2 className="font-semibold text-xl text-white border-b-2 border-solid border-neutral-700 pb-2">Categories</h2>
                    </div>
                    {categories.list.map(item => (
                        <div key={item.id}>
                            <div key={item.id} className='flex items-center gap-2'>
                                <Link to={`/category/${item.slug}-${item.id}`} className='flex items-center gap-2 font-normal text-base text-white hover:underline'>
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-3">
                    <div className="mt-3">
                        <h2 className="font-semibold text-xl text-white border-b-2 border-solid border-neutral-700 pb-2">Price</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="i6" className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-lime-500 dark:focus:ring-lime-500 focus:bg-lime-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 appearance-none' value="price" />
                        <label className="font-normal text-base text-white" htmlFor="i6">Free</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="i7" className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-lime-500 dark:focus:ring-lime-500 focus:bg-lime-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 appearance-none' />
                        <label className="font-normal text-base text-white" htmlFor="i7">Under 400 P</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="i8" className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-lime-500 dark:focus:ring-lime-500 focus:bg-lime-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 appearance-none' />
                        <label className="font-normal text-base text-white" htmlFor="i8">Under 1000 P</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="i9" className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-lime-500 dark:focus:ring-lime-500 focus:bg-lime-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 appearance-none' />
                        <label className="font-normal text-base text-white" htmlFor="i9">Under 5000 P</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="i10" className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-lime-500 dark:focus:ring-lime-500 focus:bg-lime-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 appearance-none' />
                        <label className="font-normal text-base text-white" htmlFor="i10">Under 10000+ P</label>
                    </div>
                </div>
            </div>
            <button className="hidden max-[651px]:block p-2 mr-1 bg-lime-500 rounded-lg absolute right-0" onClick={handleActive}>
                <FilterIcon />
            </button>
            <FilterModal active={active} handleClose={handleClose} />
        </div>
    )
}

export default CategoriesSidebar