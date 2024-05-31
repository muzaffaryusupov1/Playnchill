import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getIds } from '../../utils/helpers'
import { CategoryProducts, CategorySidebar } from './components'
import { getBrands, getCategories, getProducts } from '../../store/actions/productsAction'

function CategoriesPage() {
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

  const handleFilter = () => {
    setList(products.list.filter(item => item.price >= 1000))
  }

  return (
    <div className='my-11'>
      <div className="container">
        <div className="categories-wrapper">
          <div className='flex'>
            <div>
              <CategorySidebar />
            </div>
            <div className="w-full">
              <div className='flex items-center justify-between mb-10'>
                <h2 className='font-medium text-xl text-white max-[574px]:text-base max-[651px]:hidden'>{products.list.length} товар в
                  <span className='ml-2 font-extrabold max-[574px]:text-sm'>{categories.list.find(item => item.id === categoryId)?.title}</span>
                </h2>
                <form>
                  <select className="bg-transparent cursor-pointer p-1.5 border rounded max-[574px]:p-0.5" id='select' onChange={handleAsc}>
                    <option value="ascending" className="text-black p-1.5 max-[900px]:p-1  max-[574px]:text-xs max-[574px]:p-0.5">По алфавиту</option>
                    <option value="desc" className="text-black p-1.5 max-[900px]:p-1 max-[574px]:text-xs max-[574px]:p-0.5">Сначала дешевые</option>
                    <option value="asc" className="text-black p-1.5 max-[900px]:p-1 max-[574px]:text-xs max-[574px]:p-0.5">Сначала дорогие</option>
                  </select>
                </form>
              </div>
              <CategoryProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage