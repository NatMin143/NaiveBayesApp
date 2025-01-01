import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import Logs from './assets/components/Logs'
import LandingPage from './assets/components/LandingPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {

  const [sentimentDatas, setSentimentDatas] = useState([])

  console.log("SentimentData", sentimentDatas)



  return (
    <Router>
      <div className='h-screen bg-[#FFFAF1] p-4'>


        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/home"
            element={
              <>
                <Header />
                <Main
                  sentimentDatas={sentimentDatas}
                  setSentimentDatas={setSentimentDatas}
                />
              </>

            }
          />
          <Route
            path="/logs"
            element={
              <>
                <Header />
                <Logs sentimentDatas={sentimentDatas} />
              </>
            }
          />
        </Routes>
      </div>

    </Router>
  )
}

export default App
