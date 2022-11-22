import { Link } from 'react-router-dom';

const QuizList = ({ quiz }) => {
    
    return ( 
        <div className="article-list">
        {quiz.map(quizzes => ( 
            <div key={quizzes._id}>
                <Link to={`/quiz/${quizzes._id}`}>
                    <div style={{backgroundColor: `${quizzes.style}` }} className="articles-preview">
                        <div style={{backgroundColor: `${quizzes.style}` }} className="article-image-container">
                            <img style={{backgroundColor: `${quizzes.style}` }}className="article-icon" src={ quizzes.icon }  alt="article"></img>
                        </div>
                        <div style={{backgroundColor: `${quizzes.style}` }} className="article-title-container">
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