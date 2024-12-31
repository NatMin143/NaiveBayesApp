import { useState, useEffect } from 'react';

export default function LogsData(props) {
    const [color, setColor] = useState(null)
    const [textDivHeight, setTextDivHeight] = useState('h-[58px]')

    useEffect(() => {
        if(props.sentiments.sentiment === 'positive'){
            setColor('text-green-600')
        } else if (props.sentiments.sentiment === 'negative'){
            setColor('text-red-600')
        } else {
            setColor('text-gray-600')
        }

        (props.sentiments.text).length > 100 ? setTextDivHeight('h-auto') : setTextDivHeight('h-[58px]')
        
    }, [props.sentiments.sentiment])

    return (
        <div className="flex gap-9 justify-center items-center mb-2">
            <div className={`flex justify-center items-center w-[819px] ${textDivHeight} rounded-lg bg-white shadow-lg p-2`}>
                <p className="font-bold text-base text-center">{props.sentiments.text}</p>
            </div>
            <div className="flex justify-center items-center w-[291px] h-[58px] rounded-lg bg-white shadow-lg">
                <p className={`font-bold text-base ${color}`}>{props.sentiments.sentiment}</p>
            </div>
        </div>
    )
}