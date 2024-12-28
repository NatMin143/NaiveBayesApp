import naiveBayesLogo from '/images/naive-bayes-logo.png';
import LogStash from '/images/logstash.svg'

export default function Header() {
    return (
        <header className='flex justify-between items-center px-4'>
            <div className='flex justify-center items-center'>
                <img className='w-20 h-20 mt-2' src= {naiveBayesLogo} alt="Naive Bayes Logo" />
                <h1 className='text-base font-extrabold'>Naive Bayes</h1>
            </div>
            <div>
                <img className='w-18 h-18' src={LogStash} alt="Log Stash" />
                <span className='text-sm font-extrabold'>LOGS</span>
            </div>
        </header>
    )
}