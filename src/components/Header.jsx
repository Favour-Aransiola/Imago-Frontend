import React, { useState } from 'react'
import image from "../assets/imago_logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { displayMyProfile } from '../redux/slices/homeSlice';

const Header = () => {

    const selectedDecoratoion = 'transform mx-5rounded-lg hover:scale-105  transition duration-300 ease-in-out bg-lime-900 text-white px-5 py-2 mx-5 rounded-lg cursor-pointer';
    const unselectedDecoration = 'transform hover:scale-105  transition duration-300 ease-in-out text-black px-5 py-2 mx-5 cursor-pointer';
    const [selection, setSelection] = useState(0)
    const dispatch = useDispatch()
    return (
        <div className='flex justify-between items-center shadow p-2 rounded mb-5'>
            <section className=' basis-1/3'>
                <img src={image} className="w-[100px]" />
            </section>
            <section className='flex basis-2/3'>
                <h2 className={selection == 0 ? selectedDecoratoion : unselectedDecoration} onClick={(e) => {
                    setSelection(value => !value)
                    dispatch(displayMyProfile(false))
                }}>Watermark an Image</h2>
                <h2 onClick={(e) => {
                    setSelection(value => !value)
                    dispatch(displayMyProfile(true))
                }} className={selection == 1 ? selectedDecoratoion : unselectedDecoration}>About Creator</h2>
            </section>
        </div>

    )
}

export default Header