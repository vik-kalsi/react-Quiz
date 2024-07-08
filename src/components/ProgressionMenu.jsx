
function ProgressionMenu() {

    
    function GoToQuestion1() {
        alert('Question 1');
      }


    function GoToQuestion2() {
        alert('Question 2');
    }


    function GoToQuestion3() {
        alert('Question 3');
    }


    return (

        <>
            <div>
                <ul className="menu border-2 rounded-box w-56 bg-blue-950 text-2xl">
                    <li className="border-2 rounded-full" onClick={GoToQuestion1}><a>Question 1</a></li>
                    <li className="" onClick={GoToQuestion2}><a>Question 2</a></li>
                    <li className="" onClick={GoToQuestion3}><a>Question 3</a></li>
                </ul>
            </div>
        </>
    )
}



export default ProgressionMenu