import SubmitIcon from '/images/submit.svg'

export default function InputBox() {

    function getSentiment(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(event.target);
        const sentiment = formData.get("sentiment");
        console.log(sentiment);
        event.target.reset()
        return sentiment;
    }

    return (
        <section>
            <form onSubmit={getSentiment} className="flex justify-center">
                <input 
                    type="text"
                    placeholder="Write your review about this product"
                    name="sentiment"
                    className="border px-7 focus:outline-none focus:border-none w-[919px] h-[86px] rounded-[20px] shadow-lg"
                />
                <button className="ml-[-60px]" type="submit">
                    <img src={SubmitIcon} alt="Submit" className='w-[43px] h-[33px]'/>
                </button>
            </form>
        </section>
    );
}
