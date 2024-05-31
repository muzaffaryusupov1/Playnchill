import React from 'react'
import { CheckMarkIcon } from '../../../assets/icons'
import { useSelector } from 'react-redux'

function CartCheckout() {
    const { items } = useSelector(state => state.cart)

    const total = items.reduce((a, b) => a + (b.price * b.qty), 0)

    return (
        <>
            <div className="border-2 border-solid border-neutral-500 rounded-3xl p-7 flex flex-col items-center ml-12 max-[1200px]:ml-3 max-[490px]:p-3 max-[490px]:m-0">
                <p className="font-medium text-xl text-white mb-6 max-sm:text-lg">{items.length} товаров</p>
                <p className="font-semibold text-4xl text-white max-sm:text-lg">{total.toLocaleString()} Р</p>
                <button className="w-full py-5 bg-lime-950 font-medium text-lg text-lime-500 my-7 rounded-2xl max-sm:text-sm max-sm:py-3">Оформить заказ</button>
                <div className="flex gap-1">
                    <span><CheckMarkIcon /></span>
                    <p className="font-medium text-lg text-neutral-500 max-md:text-base max-sm:text-sm">Покупая данный товар, я подтверждаю,что ознакомился и согласен с <span className="text-sky-500 cursor-pointer">условиями</span> и <span className="text-sky-500 cursor-pointer">условия магазина</span></p>
                </div>
            </div>
            <div className="border-2 border-solid border-neutral-500 rounded-3xl p-7 flex flex-col items-center ml-12 mt-5 max-[981px]:mt-0 max-[981px]:h-[100%] max-[490px]:p-3 max-[490px]:ml-3">
                <p className="font-normal text-lg text-white max-md:text-base max-sm:text-sm">
                    <span className="font-medium text-lime-500 mr-2">%</span> Если у вас есть купон на скидку, Вы сможете ввести его на следующем этапе
                </p>
            </div>
        </>
    )
}

export default CartCheckout