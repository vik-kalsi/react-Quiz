
function Question5({ correctAnswer, wrongAnswer }) {
    

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 5: What is the biggest continent on Earth?</h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Africa </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> Asia </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> North America </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Europe </button>
            </div>
        </>
    )

}


export default Question5