import LogLabels from './LogLabels';
import LogsData from './LogsData';
export default function Logs({sentimentDatas}) {
    console.log("sentisfddsaf", sentimentDatas);
    const logsEl = sentimentDatas.map((sentiments, index) => {
        return (
            <LogsData key={index} sentiments = {sentiments}/>
        )
    })

    console.log("LogsEL", logsEl)

    return (
        <>
            <LogLabels />
            {logsEl.length != 0 && logsEl}
        </>
    )
}