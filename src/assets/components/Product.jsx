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

    // Function to handle image URL
    const getImageUrl = (url) => {
        // If the URL is in the array-like string format
        if (url.startsWith('["') && url.endsWith('"]')) {
            // Remove the surrounding brackets and quotes
            const parsedUrl = url.slice(2, -2);  // Get the string between the quotes
            return parsedUrl;
        }

        if (url.startsWith('["') && url.endsWith('"')) {
            // Remove the surrounding brackets and quotes
            const parsedUrl = url.slice(2, -1);  // Get the string between the quotes
            return parsedUrl;
        }
        return url;  // Return the URL if it's already in proper format
    }

    // Get the image URL for the first image in the product data
    const imageUrl = getImageUrl(productData.images[0]);
    
    console.log("Original Link", productData.images[0]);
    console.log("Parsed Link", imageUrl);
    console.log(titleTextSize)
    return (
        <div>
            <div className='w-[250px] h-[325px] rounded-[15px] shadow-xl bg-white cursor-pointer'>
                <img src={imageUrl} alt="I am only using a dummy API so maybe some details/images are not present" className='w-[250px] h-[200px] rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
                <div className='p-2'>
                    <p className='font-semibold text-xs text-[#C8C8C8]'>{productData.category.name !== 'Change title' ? productData.category.name : 'No Category'}</p>
                    <h2 className={`${titleTextSize} font-bold`}>{productData.title}</h2>
                    <p className='text-base font-extrabold text-[#104CFF] mt-2'>${productData.price}</p>
                </div>
            </div>
        </div>
    )
}