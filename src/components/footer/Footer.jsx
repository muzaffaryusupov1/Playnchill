import { Link } from "react-router-dom"
import { DiscordIcon, InstagramIcon, TwitterIcon, VKontaktIcon } from "../../assets/icons"

function Footer() {
  const img = [
    {
      id: 1,
      image: '/footer/footer-img1.png',
    },
    {
      id: 2,
      image: '/footer/footer-img2.png',
    },
    {
      id: 3,
      image: '/footer/footer-img3.png',
    },
    {
      id: 4,
      image: '/footer/footer-img4.png',
    },
    {
      id: 5,
      image: '/footer/footer-img5.png',
    },
    {
      id: 6,
      image: '/footer/footer-img6.png',
    },
    {
      id: 7,
      image: '/footer/footer-img7.png',
    },
  ]

  const list = [
    {
      id: 1,
      title: 'О компании',
      link: 'О нас',
      link1: 'Вакансии',
      link2: 'Реквизиты',
    },
    {
      id: 2,
      title: 'Договор оферты',
      link: 'Каталог',
      link1: 'Акции',
      link2: 'Личный кабинет',
    },
    {
      id: 3,
      title: 'Договор оферты',
      link: 'Каталог',
      link1: 'Акции',
      link2: 'Личный кабинет',
    },
  ]

  return (
    <footer className="py-20 border-t border-solid border-zinc-800 max-md:py-14 max-sm:py-6 max-sm:mt-11">
      <div className="container">
        <div className="footer-wrapper">
          <div className="flex items-center gap-[51px] mb-14 max-md:mb-6 max-sm:mb-3 max-[550px]:hidden">
            {
              img.map(item => (
                <div key={item.id}>
                  <img src={item.image} alt="footer-images" />
                </div>
              ))
            }
          </div>
          <div className="flex items-center gap-[120px] max-[980px]:gap-20 max-[860px]:mb-12 max-[860px]:gap-12 mb-20 max-[760px]:flex-wrap">
            {
              list.map(item => (
                <div className="flex flex-col w-full max-[760px]:w-[130px]" key={item.id}>
                  <h3 className="font-semibold text-xl text-white mb-3 max-sm:text-xs">{item.title}</h3>
                  <Link className="font-normal text-lg text-zinc-300 mb-2 max-sm:text-xs">{item.link}</Link>
                  <Link className="font-normal text-lg text-zinc-300 mb-2 max-sm:text-xs">{item.link1}</Link>
                  <Link className="font-normal text-lg text-zinc-300 max-sm:text-xs">{item.link2}</Link>
                </div>
              ))
            }
            <div className="flex items-center gap-8 max-[820px]:gap-5">
              <div className="flex items-center gap-2">
                <span className="w-11 h-12">
                  <img src="/footer/footer-subtrack.png" alt="img" className="w-full h-full object-contain" />
                </span>
                <div className="w-full">
                  <p className="font-normal text-sm text-white max-sm:text-xs">verified</p>
                  <h4 className="font-bold text-sm text-white max-sm:text-xs">WebMoney</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-11 h-12">
                  <img src="/footer/footer-save-browsing.png" alt="img" className="w-full h-full object-cover" />
                </span>
                <div className="w-32 max-[390px]:w-10">
                  <p className="font-normal text-sm text-white max-sm:text-xs">Safe Browsing</p>
                  <h4 className="font-bold text-sm text-white max-sm:text-xs">Google</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-11">
              <p className="font-normal text-base text-zinc-500 max-sm:text-xs">Все продаваемые ключи закупаются у официальных дистрибьюторови издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza</p>
            </div>
            <div className="flex items-center justify-between max-[760px]:flex-wrap max-[760px]:gap-3">
              <Link className="font-normal text-lg text-sky-500 max-sm:text-xs">Правовая информация</Link>
              <p className="font-normal text-lg text-neutral-500 max-sm:text-xs">Интернет-магазин игр «Playnchill» © 2022   </p>
              <div className="flex items-center">
                <select className='bg-transparent cursor-pointer p-1.5 border rounded'>
                  <option value="1" className='text-black p-1.5 max-[900px]:p-1 max-sm:text-xs'>Ru</option>
                  <option value="2" className='text-black p-1.5 max-[900px]:p-1 max-sm:text-xs'>Eng</option>
                </select>
                <div className="flex items-center gap-4 ml-6 max-sm:gap-2 max-sm:ml-2">
                  <span><VKontaktIcon /></span>
                  <span><DiscordIcon /></span>
                  <span><TwitterIcon /></span>
                  <span><InstagramIcon /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer