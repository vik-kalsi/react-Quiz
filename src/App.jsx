import { useState } from 'react'
import Question1 from './components/Question1.jsx'
import Question2 from './components/Question2.jsx'
import Question3 from './components/Question3.jsx'


function App() {
  const [score, setScore] = useState(0);
  const [showQuestion1, setShowQuestion1] = useState(true)
  const [showQuestion2, setShowQuestion2] = useState(false)
  const [showQuestion3, setShowQuestion3] = useState(false)

  

  return (
    <>
      <div className="bg-blue-950	text-white h-screen grid items-center justify-center">
        <div className="grid justify-center text-6xl">Score is: {score}</div>
        
        <div className="border-2 p-6">
          {showQuestion1 && <Question1 />}
          {showQuestion2 && <Question2 />}
          {showQuestion3 && <Question3 />}



          
        </div>

      </div>
    </>
  )
}

export default App