import InputBox from "./InputBox"
import Product from "./Product"
import { useState, useEffect } from 'react';


export default function Main() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.escuelajs.co/api/v1/products');
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json()
          setData(data)
        } catch (error) {
          setError(error)
        } finally {
          setLoading(false)
        }
      };
  
      fetchData();
    }, [])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const productElements =  data && data.map(product => (
        <Product 
            key = {product.id}
            productData = {product}
        />
    ))

    return (
        <main className="flex mt-20 gap-10 items-center justify-center relative">
            {productElements[0]}
            <InputBox />
        </main>
    )
}