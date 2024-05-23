import React from 'react'
import { FavouritesIcon } from '../../../assets/icons'

function ReleatedItems() {

  const list = [
    {
      id: 1,
      title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
      image: '/recommendedList/list-img5.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 2,
      title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
      image: '/recommendedList/list-img6.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 3,
      title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
      image: '/recommendedList/list-img7.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 4,
      title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
      image: '/recommendedList/list-img8.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 5,
      title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
      image: '/recommendedList/list-img1.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 6,
      title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
      image: '/recommendedList/list-img2.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 7,
      title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
      image: '/recommendedList/list-img4.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 8,
      title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
      image: '/recommendedList/list-img9.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 9,
      title: 'Minecraft',
      image: '/recommendedList/list-img10.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 10,
      title: 'Minecraft',
      image: '/recommendedList/list-img11.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 11,
      title: 'Minecraft',
      image: '/recommendedList/list-img12.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
    {
      id: 12,
      title: 'Minecraft',
      image: '/recommendedList/list-img3.png',
      price: 16400,
      discount: '15',
      oldprice: 16400,
    },
  ]

  return (
    <section className='my-9'>
      <div className="container">
        <div className="releated-items__wrapper">
          <div className="mb-8 max-[400px]:mb-3">
            <h3 className='font-semibold text-3xl text-white max-[574px]:text-2xl max-[400px]:text-lg'>Вам будет интересно</h3>
          </div>
          <div className="flex flex-wrap gap-5 max-[1060px]:gap-3 max-lg:flex-wrap max-[500px]:gap-5 max-[574px]:flex-col">
            {
              list.slice(0,4).map(item => (
                <div className='w-[300px] h-3/4 relative max-[1040px]:w-[235px] max-[1006px]:w-[280px] max-[955px]:w-[260px] max-[840px]:w-[240px] max-[774px]:w-[220px] max-[716px]:w-[200px] max-[654px]:w-[300px] max-[642px]:w-[280px] max-[604px]:w-[260px] max-[574px]:flex max-[574px]:w-full' key={item.id}>
                  <div className='w-full h-[400px] cursor-pointer max-[574px]:w-[250px] max-[574px]:mr-3 max-[574px]:h-[400px] max-[574px]:rounded-2xl overflow-hidden max-[500px]:h-[340px] max-[450px]:h-[250px] max-[450px]:w-[200px] max-[390px]:w-[150px] max-[390px]:h-[200px] max-[310px]:h-[180px]'>
                    <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                  </div>
                  <div className='p-4 max-[684px]:p-2 max-[574px]:p-1 max-[435px]:p-0'>
                    <div className='flex items-center gap-5 mb-2 max-[1154px]:gap-4 max-md:gap-3 max-[684px]:gap-2 max-[574px]:gap-4 max-[365px]:gap-1 max-[435px]:gap-1'>
                      <p className="text-white font-medium text-2xl max-[1218px]:text-xl max-lg:text-base max-[684px]:text-sm max-[574px]:text-base max-[435px]:text-[13px] max-[365px]:text-[12px] max-[300px]:text-[10px]">{item.price.toLocaleString()} P</p>
                      <p className="font-medium text-lg text-lime-500 max-[684px]:text-sm max-[574px]:text-sm max-[435px]:text-[13px] max-[365px]:text-[10px] max-[300px]:text-[9px]">-{item.discount}%</p>
                      <p className="font-normal text-lg text-neutral-700 line-through max-lg:text-base max-[684px]:text-sm max-[574px]:text-xs max-[435px]:text-[13px] max-[365px]:text-[10px] max-[300px]:text-[9px]">{item.oldprice.toLocaleString()} P</p>
                    </div>
                    <p className="font-normal text-base text-white mb-2 h-12 max-[574px]:w-[120px] max-[574px]:h-full max-md:text-sm max-[574px]:text-xs max-[465px]:text-[12px]">{item.title}</p>
                    <button className='hidden bg-white rounded-full p-2.5 absolute top-5 right-8 hover:block'>
                      <FavouritesIcon />
                    </button>
                    <button className='absolute bottom-1/4 h-14 border-solid border-transparent bg-lime-500 w-64 rounded-xl p-3 mb-5 ease-in-out duration-300  hover:bg-transparent hover:border-solid hover:border-white font-bold text-lg max-[1219px]:bottom-[170px] max-[1200px]:w-10/12 max-md:text-base max-md:h-10 max-md:p-1 max-[684px]:bottom-32 max-[670px]:bottom-36 max-[654px]:w-[260px] max-[642px]:bottom-44 max-[642px]:w-[250px max-[604px]:w-[220px] max-[574px]:hidden'>
                      В корзину
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReleatedItems