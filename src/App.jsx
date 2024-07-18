import { useState } from 'react'
import Question1 from './components/Question1.jsx'
import Question2 from './components/Question2.jsx'
import Question3 from './components/Question3.jsx'
import Question4 from './components/Question4.jsx'


function App() {
  const [score, setScore] = useState(0);
  const [showQuestion1, setShowQuestion1] = useState(true)
  const [showQuestion2, setShowQuestion2] = useState(false)
  const [showQuestion3, setShowQuestion3] = useState(false)
  const [showQuestion4, setShowQuestion4] = useState(false)



  //Question 1 ######################################################
  let Q1Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion1(false)
    setShowQuestion2(true)
  }

  let Q1Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion1(false)
    setShowQuestion2(true)
  }
  //Question 1 ######################################################



  //Question 2 ######################################################
  let Q2Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion2(false)
    setShowQuestion3(true)
  }

  let Q2Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion2(false)
    setShowQuestion3(true)
  }
  //Question 2 ######################################################



  
  //Question 3 ######################################################
  let Q3Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion3(false)
    setShowQuestion4(true)
  }

  let Q3Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion3(false)
    setShowQuestion4(true)
  }
  //Question 3 ######################################################



  return (
    <>
      <div className="bg-blue-950	text-white h-screen flex items-center justify-center space-x-16">
        
        <div>
          <div className="grid justify-center text-6xl">Score is: {score}
        </div>
          
        <div className="border-2 p-6">
            {showQuestion1 && <Question1 correctAnswer={Q1Correct} wrongAnswer={Q1Wrong}/>}
            {showQuestion2 && <Question2 correctAnswer={Q2Correct} wrongAnswer={Q2Wrong}/>}
            {showQuestion3 && <Question3 correctAnswer={Q3Correct} wrongAnswer={Q3Wrong}/>}
            {showQuestion4 && <Question4 />}
          </div>
        </div>

      </div>
    </>
  )
}

export default App