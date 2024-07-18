
function Question3({ correctAnswer, wrongAnswer }) {
    

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 3: What country do the Canary Islands belong to?</h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Portugal </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> France </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Greece </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> Spain </button>
            </div>
        </>
    )

}


export default Question3