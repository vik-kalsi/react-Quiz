
function Question6({ correctAnswer, wrongAnswer }) {
    

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 6: What is the capital of Australia?</h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> Canberra </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Sydney </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Melbourne </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Brisbane </button>
            </div>
        </>
    )

}


export default Question6