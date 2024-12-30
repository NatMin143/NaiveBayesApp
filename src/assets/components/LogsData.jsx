import { useState, useEffect } from 'react';

export default function LogsData(props) {
    const [color, setColor] = useState(null)

    useEffect(() => {
        if(props.sentiments.sentiment === 'positive'){
            setColor('text-green-600')
        } else if (props.sentiments.sentiment === 'negative'){
            setColor('text-red-600')
        } else {
            setColor('text-gray-600')
        }
    }, [props.sentiments.sentiment])

    return (
        <div className="flex gap-9 justify-center items-center mb-2">
            <div className="flex justify-center items-center w-[819px] h-[58px] rounded-lg bg-white shadow-lg">
                <p className="font-bold text-base">{props.sentiments.text}</p>
            </div>
            <div className="flex justify-center items-center w-[291px] h-[58px] rounded-lg bg-white shadow-lg">
                <p className={`font-bold text-base ${color}`}>{props.sentiments.sentiment}</p>
            </div>
        </div>
    )
}