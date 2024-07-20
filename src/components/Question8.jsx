
function Question8({ correctAnswer, wrongAnswer }) {
    

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 8: What is the capital of Bavaria? </h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> Munich </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Nuremberg </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Augsburg </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> Fürth </button>
            </div>
        </>
    )

}


export default Question8