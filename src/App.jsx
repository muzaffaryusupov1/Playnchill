import ScrollToTop from "react-scroll-up"
import { Footer, Header } from "./components"
import { ChevronUpIcon } from "./assets/icons"
import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/routes"
import { useSelector } from "react-redux"
import { createPortal } from "react-dom"
import ImgModal from "./components/ImgModal"
import toast, { Toaster } from 'react-hot-toast';
import CategoriesModal from "./components/CategoriesModal"

function App() {
  const { imgModal } = useSelector(state => state.imgmodal)
  const { categoriesmodal } = useSelector(state => state.categoriesmodal)

  const notify = () => toast('Here is your toast.');

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map(route => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>

        <ScrollToTop showUnder={160} duration={600}>
          <span className="fixed bottom-12 right-8 duration-[0.2s] ease-linear delay-0 border rounded-sm p-3 border-solid border-white hover:border-sky-400">
            <ChevronUpIcon />
          </span>
        </ScrollToTop>
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
        {imgModal && createPortal(<ImgModal />, document.querySelector('.wrapper'))}
        {categoriesmodal && createPortal(<CategoriesModal />, document.querySelector('.wrapper'))}
      </main>
      <Footer />
    </>
  )
}

export default App
