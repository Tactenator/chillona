import { useState } from "react";
import CreateQuiz from "./createQuiz";
import CreateArticle from "./createArticle";


const Create = () => {

    const [ quiz, setQuiz ] = useState(true)
    
    const handleClick = (e) => {
        if(e.target.value === "quiz")
        {
            setQuiz(true);
        }
        else{
            setQuiz(false)
        }
    }

    return ( 
    <div>
        <div className="create-select">
            <button onClick={handleClick} className={ quiz ? "quiz-create-select selected" : "quiz-create-select"} value="quiz">Quiz</button>
            <button onClick={handleClick} className={ quiz ? "quiz-create-select" : "quiz-create-select selected"} value="article">Article</button>
        </div>
        { quiz ? <CreateQuiz /> : <CreateArticle />}
    </div>
     );
}
 
export default Create;