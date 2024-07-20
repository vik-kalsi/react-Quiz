
function Question4({ correctAnswer, wrongAnswer }) {
    

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 4: How many countries are there in Oceania?</h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 13 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> 14 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 15 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 16 </button>
            </div>
        </>
    )

}


export default Question4