export const bannersList = '/banner'
export const productRecommendedList = '/products?isRecommended=true'
export const cardList = '/card'
export const productsList = '/products'
export const stockList = '/products?inStock=true'

export const productWithCategoryId = (id) => `/products?category_id=${id}`
export const productWithSlug = (slug) => `/products?_relations=brands,categorys&slug=${slug}`