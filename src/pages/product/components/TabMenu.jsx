import React from 'react'
import ProductDescription from './ProductDescription'
import ProductRequirements from './ProductRequirements'
import { useSearchParams } from 'react-router-dom';
import ProductCharacteristic from './ProductCharacteristic';

function TabMenu({ product }) {
  const [params, setPrams] = useSearchParams()
  let isActiveTab = params.get('tab') ? params.get('tab') : 'description';

  function handleTab(tabName) {
    setPrams((prev) => {
      prev.set('tab', tabName)
      return prev
    })
  }

  const list = [
    {
      id: 1,
      name: 'Описание товара',
      tabName: 'description',
    },
    {
      id: 2,
      name: 'Системные требования',
      tabName: 'requirements',
    },
    {
      id: 3,
      name: 'Об этой игре',
      tabName: 'characteristic',
    },
  ]

  let tabContent = {
    'description': <ProductDescription product={product} />,
    'requirements': <ProductRequirements product={product} />,
    'characteristic': <ProductCharacteristic product={product} />,
  }

  return (
    <section className="mt-16">
      <div className="container">
        <div className="tab-menu__wrapper">
          <div className='w-220px'>
            {
              list.map(item => (
                <button
                  key={item.id}
                  className={isActiveTab === item.tabName ? "border-2 border-white border-b-2 pb-5 border-t-0 border-r-0 border-l-0 border-solid font-normal text-xl text-white mr-6 py-5 max-sm:text-base max-[510px]:text-xs max-[510px]:mr-2 max-[510px]:py-2" : "py-5 font-normal text-xl text-white mr-6 max-sm:text-base max-[510px]:text-xs max-[510px]:py-2"}
                  onClick={() => handleTab(item.tabName)}
                >
                  {item.name}
                </button>
              ))
            }
          </div>
          <div className="py-5 max-sm:py-2">
            {tabContent[isActiveTab]}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TabMenu