import { Link } from 'react-router-dom';

const QuizList = ({ quiz }) => {
    
    return ( 
        <div className="article-list">
        {quiz.map(quizzes => ( 
            <div key={quizzes._id}>
                <Link to={`/quiz/${quizzes._id}`}>
                    <div style={{backgroundColor: `${quizzes.color}` }} className="articles-preview">
                        <div style={{backgroundColor: `${quizzes.color}` }} className="article-image-container">
                            <img style={{backgroundColor: `${quizzes.color}` }}className="article-icon" src={ quizzes.file }  alt="article"></img>
                        </div>
                        <div style={{backgroundColor: `${quizzes.color}` }} className="article-title-container">
                            { quizzes.title }
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
     );
}
 
export default QuizList;