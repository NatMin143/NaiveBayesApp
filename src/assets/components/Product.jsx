import SampleImage from '/images/sample.jpg'
import { useState, useEffect } from 'react';

export default function Product(props) {

    const {productData } = props 
    

    return (
        <div>
            <div className='w-[250px] h-[325px] rounded-[15px] shadow-xl bg-white'>
                <img src={productData.images[0]} alt="A Product" className='w-[250px] h-[200px] rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
                <div className='p-2'>
                    <p className='font-semibold text-xs text-[#C8C8C8]'>Uniqlo</p>
                    <h2 className='text-xl font-bold'>{productData.title}</h2>
                    <p className='text-base font-extrabold text-[#104CFF] mt-2'>${productData.price}</p>
                </div>
            </div>
        </div>
    )
}