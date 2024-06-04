import React from 'react'

function ProductDescription({product}) {
  return (
    <div>
      <p className='font-normal text-lg text-neutral-500 max-sm:text-sm max-[550px]:text-[11px]'>
        {product.desc}
      </p>
    </div>
  )
}

export default ProductDescription