import { useDispatch, useSelector } from "react-redux"
import { CategoryProducts, CategorySIdebar } from "./components"
import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getIds } from "../../utils/helpers"
import { getBrands, getCategories, getProducts } from "../../store/actions/productsAction"
import { useEffect } from "react"

function Categories() {
  const { products, categories, brands } = useSelector(state => state.products)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const params = useParams()
  const categoryId = +params.id.split('-').at(-1)
  const [searchParams, setSearchParams] = useSearchParams()
  let fitleredBrands = getIds(searchParams.get('brand_id'))
  let sortBy = searchParams.get('sortBy')
  const { product, loading } = useSelector(state => state.product)

  const handleBrandDelete = (id) => {
    searchParams.set('brand_id', fitleredBrands.filter(item => item !== id).join(','))
    setSearchParams(searchParams)
  }

  const handleAsc = ({ target }) => {
    if (target.value !== 'none') {
      searchParams.set('sortBy', target.value)
    } else {
      searchParams.delete('sortBy')
    }
    setSearchParams(searchParams)
  }

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getBrands())
  }, [])

  useEffect(() => {
    dispatch(getProducts({ category_id: categoryId, brand_arr: fitleredBrands, sortBy }))
  }, [params, searchParams])

  return (
    <div className='categories'>
      <div className="container">
        <div className="categories-wrapper">
          <div className='flex'>
            <div>
              <CategorySIdebar />
            </div>
            <div className="w-full">
              <CategoryProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories