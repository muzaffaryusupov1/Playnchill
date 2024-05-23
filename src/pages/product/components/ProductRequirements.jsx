import React from 'react'

function ProductRequirements({ product }) {
  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-2'>
        {
          product.attributes.map((item, i) => (
            <li className="w-full flex items-center justify-between bg-gray-900 border border-solid border-gray-600 rounded-md" key={i}>
              <span className="font-medium text-base text-neutral-300 text-gray-40 p-3">{item.title}</span>
              <span className="font-normal text-base text-sky-500 p-3">{item.value}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductRequirements