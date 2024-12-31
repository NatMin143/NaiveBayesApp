import { useState, useEffect } from 'react';
export default function Result(props) {

    const [color, setColor] = useState(null)
    

    useEffect(() => {
        if (props.sentiment === 'positive') {
            setColor('text-green-600');
        } else if (props.sentiment === 'negative') {
            setColor('text-red-600');
        } else {
            setColor('text-gray-600');
        }
    })

    return (
        <div>
            <div className="flex w-[340px] h-[100px] bg-white rounded-sm justify-center items-center shadow-lg mb-2 overflow-auto p-2">
                <p className="font-medium text-center text-clip">{`"${props.text}"`}</p>
            </div>
            <div className="flex w-[340px] h-[70px] bg-white rounded-sm justify-center items-center shadow-lg">
                <p className={`${color} font-extrabold text-2xl`}>{props.sentiment}</p>
            </div>
        </div>
    )
}