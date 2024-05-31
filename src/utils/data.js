export const alist = [
    {
        id: 1,
        image: '/advantages/advantages-img2.png',
        title: 'Реальные отзывы',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.'
    },
    {
        id: 2,
        image: '/advantages/advantages-img3.png',
        title: 'Безопасность продукта',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.'
    },
    {
        id: 3,
        image: '/advantages/advantages-img4.png',
        title: 'Быстрая доставка',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.'
    },
    {
        id: 4,
        image: '/advantages/advantages-img5.png',
        title: 'Техническая поддержка',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.'
    },
    {
        id: 5,
        image: '/advantages/advantages-img6.png',
        title: 'Безопасные платежи',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.'
    },
    {
        id: 6,
        image: '/advantages/advantages-img7.png',
        title: 'Низкие цены',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.'
    },
    {
        id: 7,
        image: '/advantages/advantages-img8.png',
        title: 'Гарантия возврата денег',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.'
    },
    {
        id: 8,
        image: '/advantages/advantages-img9.png',
        title: 'Сертификаты гарантии',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.'
    },
]
// import { CategoryProducts, CategorySidebar } from "./components"
// import { useState } from "react"
// import { useParams, useSearchParams } from "react-router-dom"
// import { getIds } from "../../utils/helpers"
// import { getCategories, getProducts } from "../../store/actions/productsAction"
// import { useEffect } from "react"

// function Categories() {
//   const { products, categories, brands } = useSelector(state => state.products)
//   const [active, setActive] = useState(false)
//   const dispatch = useDispatch()
//   const params = useParams()
//   const categoryId = +params.id.split('-').at(-1)
//   const [searchParams, setSearchParams] = useSearchParams()
//   let fitleredBrands = getIds(searchParams.get('brand_id'))
//   let sortBy = searchParams.get('sortBy')
//   const { product, loading } = useSelector(state => state.product)

//   const handleBrandDelete = (id) => {
//     searchParams.set('brand_id', fitleredBrands.filter(item => item !== id).join(','))
//     setSearchParams(searchParams)
//   }

//   const handleAsc = ({ target }) => {
//     if (target.value !== 'none') {
//       searchParams.set('sortBy', target.value)
//     } else {
//       searchParams.delete('sortBy')
//     }
//     setSearchParams(searchParams)
//   }

//   useEffect(() => {
//     dispatch(getCategories())
//   }, [])

//   useEffect(() => {
//     dispatch(getProducts({ category_id: categoryId, brand_arr: fitleredBrands, sortBy }))
//   }, [params, searchParams])

//   return (
//     <div className='categories'>
//       <div className="container">
//         <div className="categories-wrapper">
//           <div className='flex'>
//             <div>
//               <CategorySidebar />
//             </div>
//             <div className="w-full">
//               <div className='flex items-center justify-between mb-10'>
//                 <h2 className='font-semibold text-xl text-white'>{products.list.length} items in
//                   <span>{categories.list.find(item => item.id === categoryId)?.title}</span>
//                 </h2>
//                 <form>
//                   <select className="bg-transparent cursor-pointer p-1.5 border rounded" onChange={handleAsc}>
//                     <option value="1" className="text-black p-1.5 max-[900px]:p-1">Сначала дешевые</option>
//                     <option value="2" className="text-black p-1.5 max-[900px]:p-1">Сначала дорогие</option>
//                     <option value="2" className="text-black p-1.5 max-[900px]:p-1">По алфавиту</option>
//                   </select>
//                 </form>
//               </div>
//               <CategoryProducts />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Categories