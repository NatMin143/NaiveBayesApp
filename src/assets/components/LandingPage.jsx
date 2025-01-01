import {Link} from 'react-router-dom';
import naiveBayesLogo from '/images/naive-bayes-logo.png';
import linkLogo from '/images/link.svg'
import arrowLogo from '/images/arrow.svg'

export default function LandingPage() {

    function goToLink(link) {
        window.location.href = link
    }
    return (
        <div className=' flex flex-col justify-center items-center pt-6'>
            <div className='flex justify-center items-center flex-col gap-2 mb-2'>
                <img src={naiveBayesLogo} alt="Naive Bayes Logo" className='w-[180px] h-[180px] object-cover' />
                <h1 className='font-extrabold text-4xl'>NAIVE BAYES</h1>
            </div>
            <div>
                <p className='font-medium text-base text-[#4B4B4B]'>Discover our project featuring the implementation of the Naive Bayes Algorithm for sentiment analysis in e-commerce.</p>
            </div>

            {/*---This Contains Different Links---*/}
            <div className='grid grid-cols-2 gap-4 mt-8 gap-x-24'>

                <div className='flex bg-white w-[386px] h-[68px] justify-between rounded-lg shadow-md'>
                    <div className='flex justify-center items-center w-[314px]'>
                        <p className='font-medium text-base text-[#707070]'>Research Overview Video</p>
                    </div>
                    <div className='flex justify-center items-center bg-[#FFC663] w-[72px] h-full p-4  rounded-tr-lg rounded-br-lg hover:bg-yellow-600 cursor-pointer'>
                        <img src={linkLogo} alt="linkLogo" />
                    </div>
                </div>

                <div className='flex bg-white w-[386px] h-[68px] justify-between rounded-lg shadow-md'>
                    <div className='flex justify-center items-center w-[314px]'>
                        <p className='font-medium text-base text-[#707070]'>Research Paper</p>
                    </div>
                    <div className='flex justify-center items-center bg-[#FFC663] w-[72px] h-full p-4  rounded-tr-lg rounded-br-lg hover:bg-yellow-600 cursor-pointer'>
                        <img src={linkLogo} alt="linkLogo" />
                    </div>
                </div>

                <div className='flex bg-white w-[386px] h-[68px] justify-between rounded-lg shadow-md'>
                    <div className='flex justify-center items-center w-[314px]'>
                        <p className='font-medium text-base text-[#707070]'>Github Front-End</p>
                    </div>
                    <div className='flex justify-center items-center bg-[#FFC663] w-[72px] h-full p-4  rounded-tr-lg rounded-br-lg hover:bg-yellow-600 cursor-pointer' onClick={() => goToLink("https://github.com/NatMin143/NaiveBayesApp.git")}>
                        <img src={linkLogo} alt="linkLogo" />
                    </div>
                </div>

                <div className='flex bg-white w-[386px] h-[68px] justify-between rounded-lg shadow-md'>
                    <div className='flex justify-center items-center w-[314px]'>
                    <p className='font-medium text-base text-[#707070]'>Github Back-End</p>
                    </div>
                    <div className='flex justify-center items-center bg-[#FFC663] w-[72px] h-full p-4  rounded-tr-lg rounded-br-lg hover:bg-yellow-600 cursor-pointer' onClick={() => goToLink("https://github.com/NatMin143/naivebayesbackend.git")}>
                        <img src={linkLogo} alt="linkLogo" />
                    </div>
                </div>

            </div>
            
            <div>
            <div className='flex bg-black w-[386px] h-[68px] justify-between rounded-lg shadow-md mt-8'>
                    <div className='flex justify-center items-center w-[314px] cursor-pointer'>
                        <p className='font-medium text-base text-white'>Explore the Website</p>
                    </div>

                    <Link to='/home'>
                    <div className='flex justify-center items-center bg-[#FFC663] w-[72px] h-full p-4  rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-yellow-600'>
                        <img src={arrowLogo} alt="linkLogo" />
                    </div>
                    </Link>
                </div>
            </div>

            <footer className='mt-6'>
                <p className='text-gray-600 font-medium'>Note: The results may not be correct due to the limited datasets</p>
            </footer>
        </div>
    )
}