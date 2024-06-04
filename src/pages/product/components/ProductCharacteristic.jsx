import React from 'react'

function ProductCharacteristic({ product }) {
  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-5 max-sm:gap-2'>
        {
          product.attributes.map((item, i) => (
            <li className="w-full flex items-center justify-between bg-gray-900 border border-solid border-gray-600 rounded-md" key={i}>
              <span className="font-medium text-base text-neutral-300 text-gray-40 p-3 max-sm:text-sm max-sm:p-2 max-[520px]:text-[12px] max-[520px]:p-1">{item.title}</span>
              <span className="font-normal text-base text-sky-500 p-3 max-sm:text-sm max-sm:p-2 max-[520px]:text-[12px] max-[520px]:p-1">{item.value}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductCharacteristic