import useFetch from "../../useFetch";
import QuizList from './QuizList'
import Exams from '../../pictures/exams.png';

const Articles = () => {

    const { data: quiz, isPending, error } = useFetch('https://chillon-api.onrender.com/quiz')

    if(quiz) console.log(quiz)
    return ( 
        <div className="quizzes">
            <div className="quiz-header-image-container">
                <img className="quiz-header-image" src={Exams} alt="quizzes!"></img>
                <h1>Examenes</h1>
            </div>
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div>}
                { quiz && <QuizList quiz={quiz} />}
        </div>
     );
}
 
export default Articles;