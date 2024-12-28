import SampleImage from '/images/sample.jpg'

export default function Product() {
    return (
        <div>
            <div className='w-[250px] h-[325px] rounded-[15px] shadow-xl bg-white'>
                <img src={SampleImage} alt="A Product" className='w-[250px] h-[200px] rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
                <div className='p-2'>
                    <p className='font-semibold text-xs text-[#C8C8C8]'>Uniqlo</p>
                    <h2 className='text-xl font-bold'>Silver Chronograph Watch</h2>
                    <p className='text-base font-extrabold text-[#104CFF] mt-2'>$ 100.00</p>
                </div>
            </div>
        </div>
    )
}