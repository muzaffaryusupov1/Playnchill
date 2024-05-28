export const categoriesList = '/categorys'
export const bannersList = '/products?banner=true'
export const productRecommendedList = '/products?isRecommended=true'
export const cardList = '/card'
export const productsList = '/products'
export const stockList = '/products?inStock=true'

export const categoryRecommendedList = '/categorys?isRecommended=true'
export const recommendedCategoryProductsList = (arr) => `/products?${arr.map(id => `category_id[]=${id}`).join("&")}`
export const smartphonesList = `/products?category_id=1`
export const tvList = `/products?category_id=11`

export const productsFilter = (arr) => `/products?${arr.map(id => `brand_id[]=${id}`).join("&")}`
export const brandsList = '/brands'

export const productWithCategoryId = (id) => `/products?category_id=${id}`
export const productWithSlug = (slug) => `/products?_relations=brands,categorys&slug=${slug}`