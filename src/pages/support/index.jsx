import React from 'react'
import { CopyIcon, MinusIcon, PlusIcon } from '../../assets/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

function SupportPage() {
    const [copy, setCopy] = useState(false)
    const [copy2, setCopy2] = useState(false)
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    let text = 'theyusupov@gmail.com'

    // Active One
    const handleActive = () => {
        setActive(true)
    }

    const handleNonActive = () => {
        setActive(false)
    }

    // Active Two
    const handleActive2 = () => {
        setActive2(true)
    }

    const handleNonActive2 = () => {
        setActive2(false)
    }

    // Active three
    const handleActive3 = () => {
        setActive3(true)
    }

    const handleNonActive3 = () => {
        setActive3(false)
    }

    const handleCopy = () => {
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 700);
    }

    const handleCopy2 = () => {
        setCopy2(true)
        setTimeout(() => {
            setCopy2(false)
        }, 700);
    }

    return (
        <div className='my-10'>
            <div className="container">
                <div className='support-page__wrapper'>
                    <div className='relative'>
                        <div className='bg-[url(/support/support-img2.png)] opacity-15 h-[450px]'></div>
                        <div>
                            <h2 className='absolute top-[160px] ml-5 font-extrabold text-5xl leading-[130%] z-30'>Контакты и поддержка</h2>
                            <img src="/support/support-img1.png" alt="support page img" className='absolute top-0 right-[-130px]' />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='w-[49%] flex items-center justify-between p-10'>
                            <div>
                                <p className='font-medium text-xl text-[#ffffffb3]'>Техническая поддержка</p>
                                <p className="font-semibold text-4xl text-white email">theyusupov@gmail.com</p>
                            </div>
                            <CopyToClipboard text={text} onCopy={(text, result) => console.log(result)}>
                                <button onClick={handleCopy} className='relative ease-in-out transition-all duration-300'>
                                    <CopyIcon />
                                    {copy ? <p className='absolute top-[-25px] left-[-7px] ease-in-out transition-all duration-300 bg-[#ffffffb3] text-black p-0.5'>Скопировано</p> : null}
                                </button>
                            </CopyToClipboard>
                        </div>
                        <div className='w-[49%] flex items-center justify-between p-10'>
                            <div>
                                <p className='font-medium text-xl text-[#ffffffb3]'>Техническая поддержка</p>
                                <p className="font-semibold text-4xl text-white email">theyusupov@gmail.com</p>
                            </div>
                            <CopyToClipboard text={text} onCopy={(text, result) => console.log(result)}>
                                <button onClick={handleCopy2} className='relative ease-in-out transition-all duration-300'>
                                    <CopyIcon />
                                    {copy2 ? <p className='absolute top-[-25px] left-[-7px] ease-in-out transition-all duration-300 bg-[#ffffffb3] text-black p-0.5'>Скопировано</p> : null}
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='mb-7'>
                                <h3 className='font-semibold text-5xl text-white'>FAQ</h3>
                            </div>
                            <div className='flex flex-col gap-9'>
                                <div className='flex items-center justify-between py-6 px-10 border border-solid border-[#252132] rounded-2xl relative'>
                                    <div>
                                        <p className='font-extrabold text-2xl text-white'>Как купить игру, если нет денег?</p>
                                        <p className={active ? "block font-medium text-xl text-white mt-8" : "hidden"}>
                                            На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в 19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться ему.
                                        </p>
                                    </div>
                                    <div>
                                        {
                                            active ? null :
                                                <button className='p-2' onClick={handleActive}>
                                                    <PlusIcon />
                                                </button>
                                        }
                                        {
                                            active ?
                                                <button className='absolute top-0 p-2 mt-10 right-10' onClick={handleNonActive}>
                                                    <MinusIcon />
                                                </button> : null
                                        }
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-6 px-10 border border-solid border-[#252132] rounded-2xl relative'>
                                    <div>
                                        <p className='font-extrabold text-2xl text-white'>ЧТО ВЫ ПРОДАЕТЕ, И КАК Я ПОЛУЧУ КУПЛЕННУЮ ИГРУ?</p>
                                        <p className={active2 ? "block font-medium text-xl text-white mt-8" : "hidden"}>
                                            Сразу отметим, что мы не продаем аккаунты других людей или физические товары. Мы магазин цифровых ключей PC-игр, но также у нас в продаже можно найти карточки пополнения и продления различных подписок — как для консолей (PlayStation и Xbox), так и для онлайн-кинотеатров (Okko, START и других). Покупая ключ, вы получаете его в ваш личный кабинет на сайте в течение 5 минут (мы не отправляем цифровые ключи на почту). После этого вам нужно активировать его по инструкции, которая есть на странице каждого товара. Если это ключ на игру, то сама она устанавливается на ваш компьютер из библиотеки игровой платформы (Steam, EA App, Ubisoft Connect и тому подобным).
                                        </p>
                                    </div>
                                    <div>
                                        {
                                            active2 ? null :
                                                <button className='p-2' onClick={handleActive2}>
                                                    <PlusIcon />
                                                </button>
                                        }
                                        {
                                            active2 ?
                                                <button className='absolute top-0 p-2 mt-10 right-10' onClick={handleNonActive2}>
                                                    <MinusIcon />
                                                </button> : null
                                        }
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-6 px-10 border border-solid border-[#252132] rounded-2xl relative'>
                                    <div>
                                        <p className='font-extrabold text-2xl text-white'>Как купить игру, если нет денег?</p>
                                        <p className={active3 ? "block font-medium text-xl text-white mt-8" : "hidden"}>
                                            На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в 19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться ему.
                                        </p>
                                    </div>
                                    <div>
                                        {
                                            active3 ? null :
                                                <button className='p-2' onClick={handleActive3}>
                                                    <PlusIcon />
                                                </button>
                                        }
                                        {
                                            active3 ?
                                                <button className='absolute top-0 p-2 mt-10 right-10' onClick={handleNonActive3}>
                                                    <MinusIcon />
                                                </button> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportPage