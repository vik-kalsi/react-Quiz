
function Question1({ correctAnswer, wrongAnswer }) {

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 1: What continent is Brazil located in? </h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> South America </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Europe </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Africa </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Asia </button>
            </div>
        </>
    )
}


export default Question1