import SubmitIcon from '/images/submit.svg';
import { useState, useEffect } from 'react';

export default function InputBox(props) {
  // console.log("Props",props)

  const [placeholder, setPlaceHolder] = useState("Write your review about this product")

  // Update placeholder when inputDisable changes
  useEffect(() => {
    if (props.inputDisable) {
      setPlaceHolder("Review is disabled");
    } else {
      setPlaceHolder("Write your review about this product");
    }
  }, [props.inputDisable]);

  async function getSentiment(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const sentiment = { text: formData.get("sentiment") };

    if (!sentiment) {
      console.error('Sentiment is empty');
      return;
    }

    console.log("The sentiment is", sentiment);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicating that we are sending JSON data
        },
        body: JSON.stringify(sentiment),
      })

      if (!response.ok) {
        console.log("Error fetching Data from the server");
      }

      const data = await response.json();
      console.log("Data", data);

      props.setTextSentimentData({
        text: sentiment.text,
        sentiment: data.prediction
      })

      props.setInputDisable(prevState => !prevState);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      event.target.reset();
    }
  }

  
  


  return (
    <section className='absolute top-[350px]'>
      <form onSubmit={getSentiment} className="flex justify-center">
        <input
          type="text"
          placeholder={placeholder}
          name="sentiment"
          className="border px-7 focus:outline-none focus:border-none w-[919px] h-[86px] rounded-[20px] shadow-lg"
          autoComplete='off'
          disabled={props.inputDisable}
        />
        <button className="ml-[-60px]" type="submit">
          <img src={SubmitIcon} alt="Submit" className="w-[43px] h-[33px]" />
        </button>
      </form>
    </section>
  );
}
