import useFetch from '../../useFetch';
import ArticleList from './ArticleList';
import Article from '../../pictures/articles.png';

const Articles = () => {

    const { data: article, isPending, error } = useFetch('http://localhost:4000/articles')

    return ( 
        <div className="articles">
            <div className="quiz-header-image-container">
                <img className="quiz-header-image" src={Article} alt="Articles!"></img>
                <h1>Articulos</h1>
            </div>
            <div>
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div>}
                { article && 
                    <div className="articles">
                        <ArticleList articles={article} />
                    </div>}
            </div>
        </div>
     );
}
 
export default Articles;