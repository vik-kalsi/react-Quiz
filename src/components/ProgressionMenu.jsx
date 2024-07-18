import { useState } from 'react';


function ProgressionMenu() {


    let [FirstQuestion, setFirstQuestion] = useState('Question 1');

    let [SecondQuestion, setSecondQuestion] = useState('Question 2');

    let [ThirdQuestion, setThirdQuestion] = useState('Question 3');


    let GoToQuestion1 = () => {
        setFirstQuestion("Clicked")
    }

    let GoToQuestion2 = () => {
        setSecondQuestion("Clicked")
    }


    let GoToQuestion3= () => {
        setThirdQuestion("Clicked")
    }



    


    return (

        <>
            <div>
                <ul className="menu border-2 rounded-box w-56 bg-blue-950 text-2xl">
                    <li className="border-2 rounded-full" onClick={GoToQuestion1}><a> {FirstQuestion} </a></li>
                    <li className="border-2 rounded-full" onClick={GoToQuestion2}><a>{SecondQuestion}</a></li>
                    <li className="border-2 rounded-full" onClick={GoToQuestion3}><a>{ThirdQuestion}</a></li>
                </ul>
            </div>
        </>
    )
}



export default ProgressionMenu