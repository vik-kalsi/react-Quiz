import { useState } from 'react'
import Question1 from './components/Question1.jsx'
import Question2 from './components/Question2.jsx'
import Question3 from './components/Question3.jsx'
import Question4 from './components/Question4.jsx'
import Question5 from './components/Question5.jsx'
import Question6 from './components/Question6.jsx'
import Question7 from './components/Question7.jsx'
import Question8 from './components/Question8.jsx'
import Question9 from './components/Question9.jsx'
import Question10 from './components/Question10.jsx'
import TotalScoreComponent from './components/TotalScoreComponent.jsx'


function App() {
  const [score, setScore] = useState(0);
  const [showScore, setshowScore] = useState(true);
  const [showQuestion1, setShowQuestion1] = useState(true)
  const [showQuestion2, setShowQuestion2] = useState(false)
  const [showQuestion3, setShowQuestion3] = useState(false)
  const [showQuestion4, setShowQuestion4] = useState(false)
  const [showQuestion5, setShowQuestion5] = useState(false)
  const [showQuestion6, setShowQuestion6] = useState(false)
  const [showQuestion7, setShowQuestion7] = useState(false)
  const [showQuestion8, setShowQuestion8] = useState(false)
  const [showQuestion9, setShowQuestion9] = useState(false)
  const [showQuestion10, setShowQuestion10] = useState(false)
  const [showTotalScoreComponent, setTotalScoreComponent] = useState(false)



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



  //Question 4 ######################################################
  let Q4Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion4(false)
    setShowQuestion5(true)
  }

  let Q4Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion4(false)
    setShowQuestion5(true)
  }
  //Question 4 ######################################################


  //Question 5 ######################################################
  let Q5Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion5(false)
    setShowQuestion6(true)
  }

  let Q5Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion5(false)
    setShowQuestion6(true)
  }
  //Question 5 ######################################################


  //Question 6 ######################################################
  let Q6Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion6(false)
    setShowQuestion7(true)
  }

  let Q6Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion6(false)
    setShowQuestion7(true)
  }
  //Question 6 ######################################################



  //Question 7 ######################################################
  let Q7Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion7(false)
    setShowQuestion8(true)
  }

  let Q7Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion7(false)
    setShowQuestion8(true)
  }
  //Question 7 ######################################################



  //Question 8 ######################################################
  let Q8Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion8(false)
    setShowQuestion9(true)
  }

  let Q8Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion8(false)
    setShowQuestion9(true)
  }
  //Question 8 ######################################################



  //Question 9 ######################################################
  let Q9Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion9(false)
    setShowQuestion10(true)
  }

  let Q9Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion9(false)
    setShowQuestion10(true)
  }
  //Question 9 ######################################################



  //Question 10 ######################################################
  let Q10Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion10(false)
    setTotalScoreComponent(true)
    setshowScore(false)
  }

  let Q10Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion10(false)
    setTotalScoreComponent(true)
    setshowScore(false)
  }
  //Question 10 ######################################################


  return (
    <>
      <div className="bg-blue-950	text-white h-screen flex items-center justify-center space-x-16">
        
        <div>
          {showScore && <div className="grid justify-center text-6xl pb-8">Score is {score} </div> }
          
        <div className="border-2 p-6">
            {showQuestion1 && <Question1 correctAnswer={Q1Correct} wrongAnswer={Q1Wrong}/>}
            {showQuestion2 && <Question2 correctAnswer={Q2Correct} wrongAnswer={Q2Wrong}/>}
            {showQuestion3 && <Question3 correctAnswer={Q3Correct} wrongAnswer={Q3Wrong}/>}
            {showQuestion4 && <Question4 correctAnswer={Q4Correct} wrongAnswer={Q4Wrong}/>}
            {showQuestion5 && <Question5 correctAnswer={Q5Correct} wrongAnswer={Q5Wrong}/>}
            {showQuestion6 && <Question6 correctAnswer={Q6Correct} wrongAnswer={Q6Wrong}/>}
            {showQuestion7 && <Question7 correctAnswer={Q7Correct} wrongAnswer={Q7Wrong}/>}
            {showQuestion8 && <Question8 correctAnswer={Q8Correct} wrongAnswer={Q8Wrong}/>}
            {showQuestion9 && <Question9 correctAnswer={Q9Correct} wrongAnswer={Q9Wrong}/>}
            {showQuestion10 && <Question10 correctAnswer={Q10Correct} wrongAnswer={Q10Wrong}/>}
            {showTotalScoreComponent && <TotalScoreComponent finalScore={score}/>}
          </div>
        </div>

      </div>
    </>
  )
}

export default App