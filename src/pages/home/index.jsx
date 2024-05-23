import React, { useEffect } from 'react'
import { Banner, Blog, Card, Product, RecommendedList, Stock } from './components'
import { useDispatch } from 'react-redux'
import { getBannersList, getCardList, getProductRecommendedList, getProductsList, getStockList } from '../../store/actions/homeActions'

function HomePage() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getBannersList())
        dispatch(getProductRecommendedList())
        dispatch(getCardList())
        dispatch(getProductsList())
        dispatch(getStockList())
    }, [])

    return (
        <div>
            <Banner />
            <RecommendedList />
            <Card />
            <Product />
            <Stock />
            <Blog />
        </div>
    )
}

export default HomePage