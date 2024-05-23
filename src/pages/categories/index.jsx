import { CategoryProducts, CategorySIdebar } from "./components"

function Categories() {
  return (
    <div className='categories'>
      <div className="container">
        <div className="categories-wrapper">
          <div className='flex'>
            <>
              <CategorySIdebar />
            </>
            <div className="flex-grow">
              <div className='flex items-center justify-between mb-10'>
                <h3 className="font-semibold text-xl text-white">Каталог товаров</h3>
                <select className="bg-transparent cursor-pointer p-1.5 border rounded">
                  <option value="1" className="text-black p-1.5 max-[900px]:p-1">Сначала дешевые</option>
                  <option value="2" className="text-black p-1.5 max-[900px]:p-1">Сначала дорогие</option>
                  <option value="2" className="text-black p-1.5 max-[900px]:p-1">По алфавиту</option>
                </select>
              </div>
              <div className="flex flex-wrap gap-7">
                <CategoryProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories