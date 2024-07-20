
function Question9({ correctAnswer, wrongAnswer }) {
    

    return (
        <>

            <div>
                <h1 className="text-4xl"> Question 9: How many countries are in Scandinavia?</h1>
            </div>

            <div className="grid space-y-6 mt-8 text-3xl">
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 2 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={correctAnswer}> 3 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 4 </button>
                <button className="border-2 p-2 transition hover:scale-105" onClick={wrongAnswer}> 5 </button>
            </div>
        </>
    )

}


export default Question9