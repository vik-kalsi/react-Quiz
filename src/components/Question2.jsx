
function Question2({ correctAnswer, wrongAnswer }) {

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 2: How many states are there in USA? </h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 48 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 52 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> 50 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 56 </button>
            </div>
        </>
    )
}


export default Question2