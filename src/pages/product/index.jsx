import React, { useEffect } from 'react'
import { ProductHeader, ReleatedItems, TabMenu } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productGet } from '../../store/actions/productActions'
import PageLoading from '../../components/PageLoading'

function ProductPage() {
    const { product, loading } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const { slug } = useParams()

    useEffect(() => {
        dispatch(productGet(slug))
    }, [slug])

    if (loading || !product.id) {
        return <PageLoading />
    }

    return (
        <div className='mt-10'>
            <ProductHeader product={product} />
            <TabMenu product={product} />
            <ReleatedItems />
        </div>
    )
}

export default ProductPage