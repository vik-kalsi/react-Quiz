
function Question7({ correctAnswer, wrongAnswer }) {
    

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 7: What is the biggest state in India?</h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Karnataka </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Maharashtra </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Gujarat </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> Rajasthan </button>
            </div>
        </>
    )

}


export default Question7