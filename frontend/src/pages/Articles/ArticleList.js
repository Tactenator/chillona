import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
    return ( 
        <div className="article-list">
            {articles.map(article => ( 
                <div key={article._id}>
                    <Link to={`/articles/${article._id}`}>
                        <div style={{backgroundColor: `${article.color}` }} className="articles-preview">
                            <div style={{backgroundColor: `${article.color}` }} className="article-image-container">
                                <img style={{backgroundColor: `${article.color}` }}className="article-icon" src={ article.file }  alt="article"></img>
                            </div>
                            <div style={{backgroundColor: `${article.color}` }} className="article-title-container">
                                { article.title }
                            </div>
                        </div>
                        
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ArticleList;