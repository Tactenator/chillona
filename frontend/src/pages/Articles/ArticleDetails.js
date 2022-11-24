import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';

const ArticleDetails = () => {

    const { id } = useParams();

    const { data: lessons, error, isPending} = useFetch('https://chillon-api.onrender.com/articles/' + id);

    if(lessons) console.log(lessons)

    return ( <div>
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div>}
        {lessons && 
        <div className="lessons-container">
            <div style={{textAlign: "center"}} className="lessons-title">
                <h2>{lessons.title}</h2>
                <img style={{ margin: "auto", height: "100%", width: "100%", marginTop: 50}}src={ lessons.image } alt="Conversaciones"></img>
            </div>
            <div className="vocab-grid">
                <h3>Espanol</h3>
                <h3>Ingles</h3>
                <h3>Como Suena</h3>
            </div>
            <div className="vocab-flex">
                <div className="vocab-spanish vocab">
                { lessons.spanishArray.map(vocab => ( 
                            <div className="vocab">
                                { vocab }
                            </div>
                        ))}
                </div>
                <div className="vocab-word vocab">
                { lessons.englishArray.map(vocab => ( 
                            <div className="vocab">
                                { vocab }
                            </div>
                        ))}
                </div>
                <div className="vocab-sounds ">
                { lessons.soundsArray.map(vocab => ( 
                            <div className="vocab">
                                { vocab }
                            </div>
                        ))}
                </div>
            </div>
          
        </div>
        }
    </div> );
}
 
export default ArticleDetails;