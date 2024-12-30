import SampleImage from '/images/sample.jpg'
import { useState, useEffect } from 'react';

export default function Product(props) {
    const {productData } = props;
    const [titleTextSize, setTitleTextSize] = useState('text-xl');

    useState (() => {
        if (productData.title.length > 40) {
            setTitleTextSize('text-sm');
        } else if (productData.title.length > 30) {
            setTitleTextSize('text-lg')
        } else {
            setTitleTextSize('text-xl');
        }
    }, [props.productData.title])
    
 
    console.log(titleTextSize)
    return (
        <div>
            <div className='w-[250px] h-[325px] rounded-[15px] shadow-xl bg-white cursor-pointer'>
                <img src={productData.images[0]} alt="I am only using a dummy API so maybe some details/images are not present" className='w-[250px] h-[200px] rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
                <div className='p-2'>
                    <p className='font-semibold text-xs text-[#C8C8C8]'>{productData.category.name !== 'Change title' ? productData.category.name : 'No Category'}</p>
                    <h2 className={`${titleTextSize} font-bold`}>{productData.title}</h2>
                    <p className='text-base font-extrabold text-[#104CFF] mt-2'>${productData.price}</p>
                </div>
            </div>
        </div>
    )
}