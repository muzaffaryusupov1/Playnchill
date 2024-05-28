import { Cart, Categories, Favourites, HomePage, NotFoundPage, ProductPage, SupportPage } from "../pages";

export const routes = [
    {
        id: 1,
        component: <HomePage />,
        path: '/'
    },
    {
        id: 2,
        component: <ProductPage />,
        path: '/product/:slug'
    },
    {
        id: 3,
        component: <NotFoundPage />,
        path: '*'
    },
    {
        id: 4,
        component: <Cart />,
        path: '/cart'
    },
    {
        id: 5,
        component: <Categories />,
        path: '/category/:id'
    },
    {
        id: 6,
        component: <Favourites />,
        path: '/favourites'
    },
    {
        id: 7,
        component: <SupportPage />,
        path: '/Support'
    },
]