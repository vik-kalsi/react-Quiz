
function Question10({ correctAnswer, wrongAnswer }) {
    

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 10: What is the capital of Croatia?</h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Dubrovnik </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Split </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> Zagreb </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Zadar </button>
            </div>
        </>
    )

}


export default Question10