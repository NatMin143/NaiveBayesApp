import InputBox from "./InputBox"
import Product from "./Product"
import Result from "./Result"
import Button from "./Button";
import { useState, useEffect } from 'react';
import Loading from './Loading'

export default function Main({setSentimentDatas}) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [textSentimentData, setTextSentimentData] = useState({
        text: '',
        sentiment: '',
    })

    const [productToShow, setProductToShow] = useState(0);
    const [inputDisable, setinputDisable] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json()
                setData(data)

                generateRandomNumber(data)

                console.log("Fetching data happens")

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        };

        console.log("This happens")
        fetchData();
    }, [])

    console.log(data)

    const generateRandomNumber = (data) => {
        if (data && data.length > 0) {
            const randomNum = Math.floor(Math.random() * data.length); // Use data.length instead of 30
            setProductToShow(randomNum);
        }

        console.log("Random")
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && textSentimentData.sentiment !== '') {
            handleClick();
        }
    };

    // Add keydown listener when the button is visible
    useEffect(() => {
        if (textSentimentData.sentiment !== '') {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [textSentimentData.sentiment]);

    useEffect(() => {
        if (textSentimentData.sentiment !== '') {
            setSentimentDatas((prevData) => {
                // If the length of prevData is 10 or more, remove the first element
                const updatedData = prevData.length >= 10 ? prevData.slice(1) : prevData;
                return [textSentimentData, ...updatedData];
            });
        }
    }, [textSentimentData]);

    // console.log("Sentiment Data", sentimentDatas)

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;


    // Safe mapping with a fallback if `data` is empty
    const productElements =
        data?.length > 0
            ? data.map((product) => (
                <Product key={product.id} productData={product} />
            ))
            : [];

    const handleClick = () => {
        setinputDisable(prevState => !prevState)
        setTextSentimentData({
            text: '',
            sentiment: '',
        })
        generateRandomNumber(data)
    }






    return (
        <main className="flex mt-10 gap-10 items-center justify-center relative">
            {data !== null && productElements[productToShow]}
            {textSentimentData.sentiment !== '' && (
                <Result
                    text={textSentimentData.text}
                    sentiment={textSentimentData.sentiment}
                />
            )}
            <InputBox
                setTextSentimentData={setTextSentimentData}
                inputDisable={inputDisable}
                setInputDisable={setinputDisable}
            />
            {textSentimentData.sentiment !== '' && (
                <Button
                    onClick={handleClick}
                />
            )}


        </main>
    )
}