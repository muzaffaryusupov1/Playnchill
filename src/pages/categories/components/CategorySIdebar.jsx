import React from 'react'

function CategorySIdebar() {
    return (
        <div className="w-80 h-full border-neutral-600 px-4 mr-10">
            <div className="flex flex-col gap-5">
                <div>
                    <h2 className="font-semibold text-xl text-white border-b-2 border-solid border-neutral-700 pb-2">Categories</h2>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i1" />
                    <label htmlFor="i1" className="font-normal text-base text-white">RPG</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i2" />
                    <label className="font-normal text-base text-white" htmlFor="i2">Adventure</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i3" />
                    <label className="font-normal text-base text-white" htmlFor="i3">Simulation video game</label>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="mt-3">
                    <h2 className="font-semibold text-xl text-white border-b-2 border-solid border-neutral-700 pb-2">Platform</h2>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i4" />
                    <label className="font-normal text-base text-white" htmlFor="i4">Windows</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i5" />
                    <label className="font-normal text-base text-white" htmlFor="i5">Mac OS</label>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="mt-3">
                    <h2 className="font-semibold text-xl text-white border-b-2 border-solid border-neutral-700 pb-2">Price</h2>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i6" />
                    <label className="font-normal text-base text-white" htmlFor="i6">Free</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i7" />
                    <label className="font-normal text-base text-white" htmlFor="i7">Under 400 P</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i8" />
                    <label className="font-normal text-base text-white" htmlFor="i8">Under 1000 P</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i9" />
                    <label className="font-normal text-base text-white" htmlFor="i9">Under 5000 P</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="i10" />
                    <label className="font-normal text-base text-white" htmlFor="i10">Under 10000+ P</label>
                </div>
            </div>
        </div>
    )
}

export default CategorySIdebar