export default function Result(props) {

    return (
        <div>
            <div className="flex w-[340px] h-[100px] bg-white rounded-sm justify-center items-center shadow-lg mb-2">
                <p className="font-medium text-center">{`"${props.text}"`}</p>
            </div>
            <div className="flex w-[340px] h-[70px] bg-white rounded-sm justify-center items-center shadow-lg">
                <p className="text-green-600 font-extrabold text-2xl">{props.sentiment}</p>
            </div>
        </div>
    )
}