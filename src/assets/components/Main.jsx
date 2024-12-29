import InputBox from "./InputBox"
import Product from "./Product"
import Result from "./Result"
import Button from "./button";
import { useState, useEffect } from 'react';


export default function Main() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [textSentimentData, setTextSentimentData] = useState({
        text: '',
        sentiment: '',
    })

    const [productToShow, setProductToShow] = useState(0);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [inputDisable, setinputDisable] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=30');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json()
                setData(data)

                generateRandomNumber(data)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        };

        console.log("This happens")
        fetchData();
    }, [])

    // console.log(data)

    const generateRandomNumber = (data) => {
        if (data && data.length > 0) {
            const randomNum = Math.floor(Math.random() * data.length); // Use data.length instead of 30
            setProductToShow(randomNum);
        }

        console.log("Random")
    }

    if (loading) return <div>Loading...</div>;
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
            {textSentimentData.sentiment !==  '' && (
                <Result
                text={textSentimentData.text}
                sentiment={textSentimentData.sentiment}
            />
            )}   
            <InputBox
                setTextSentimentData={setTextSentimentData}
                inputDisable = {inputDisable}
                setInputDisable = {setinputDisable}
            />
            {textSentimentData.sentiment !== '' && (
                <Button onClick = {handleClick} />
            )}
            

        </main>
    )
}