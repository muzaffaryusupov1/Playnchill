import React from 'react'

function ProductDescription({product}) {
  return (
    <div>
      <p className='font-normal text-lg text-neutral-500'>
        {product.desc}
      </p>
    </div>
  )
}

export default ProductDescription