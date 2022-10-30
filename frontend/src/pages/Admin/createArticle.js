import { useState } from "react";
import { Convert } from 'mongo-image-converter';

const CreateArticle = () => {

    const [ title, setTitle ] = useState('New Quiz');
    const [ file, setFile ] = useState('')
    const [ icon, setIcon ] = useState('');
    const [ color, setColor ] = useState('')
    const [ image, setImage ] = useState('')
    const [ english, setEnglish ] = useState('')
    const [ spanish, setSpanish ] = useState('')
    const [ sounds, setSounds ] = useState('')
    const [ englishArray, setEnglishArray ] = useState([])
    const [ spanishArray, setSpanishArray ] = useState([])
    const [ soundsArray, setSoundsArray ] = useState([])
    const [ error, setError ] = useState('');

    const englishArr = [];
    const spanishArr = [];
    const soundsArr = [];

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const article = { title, file, color, image, englishArray, spanishArray, soundsArray };

        console.log('Added!')

    }

    const handleFile = async (e) =>
    {
        const newFile = e.target.files; 
        setIcon(URL.createObjectURL(newFile[0]));
        setFile(newFile[0]);
        

        try{
            const convertedImage = await Convert(file)
            if( convertedImage ) {
                setFile(convertedImage);
                console.log(convertedImage)
            }
            else{
                console.log("This is not an image");
            }
        }
        catch (error) {
            console.warn(error.message)
        }
        
    }

    const addWords = (e) => {
        e.preventDefault()
        addWordsDiv(english, spanish, sounds);
        englishArr.push(english)
        spanishArr.push(spanish);
        soundsArr.push(sounds)
        setEnglishArray(englishArr => [...englishArr, english]);
        setSpanishArray(spanishArr => [...spanishArr, spanish]); 
        setSoundsArray(soundsArr => [...soundsArr, sounds]); 
        resetInputs();
    }

    const addWordsDiv = (english,spanish,sounds) =>
    {
        //find show-words div and then create new div container for elemetns
        const quizDiv = document.querySelector('.show-words');
        const newDiv = document.createElement('div');

        //display question h2
        const h2E = document.createElement('h2')
        h2E.innerHTML = english;

        const h3Sp = document.createElement('h3')
        h3Sp.innerHTML = spanish;

        const h3So = document.createElement('h3')
        h3So.innerHTML = sounds;


        //append each item
        newDiv.appendChild(h2E);
        newDiv.appendChild(h3Sp);
        newDiv.appendChild(h3So);
        quizDiv.appendChild(newDiv);
    }

    const resetInputs = () => 
    {
        setSpanish('');
        setEnglish('');
        setSounds('');
    }

    return ( 
        <div>
            <div className="create-container">
            <div className="create">
                <form>
                    <h2>Add New Article</h2>

                    <label>Title:</label>
                    <input type="text"
                    onChange={((e) => setTitle(e.target.value))}
                    value={title}>
                    </input>

                    <div className="icon-container">
                        <label>Icon:</label>
                        
                        <div className="icon">
                            <img src={icon} style={{ height: "50px", width: "50px"}}alt="Quiz Icon Here"></img>
                        </div>
                        <input type="file" onChange={handleFile}></input>
                    </div>
                    

                    <div className="color-container">
                        <label>Color:</label>
                        <input type="text"
                        onChange={((e) => setColor(e.target.value))}
                        value={color}>
                        </input>
                        <div className="color" style={{ backgroundColor: color}}></div>
                    </div>

                     <label>Image</label>
                    <input type="text"
                    onChange={((e) => 
                        setImage(e.target.value)
                        )}
                    value={image}>
                    </input>

                    
                    <label>English:</label>
                    <input type="text"
                    onChange={(e) => {
                        setEnglish( e.target.value );
                    }}
                    value={english}>
                    </input>
                    
                    <label>Spanish:</label>
                    <input type="text"
                    onChange={((e) => 
                        setSpanish(e.target.value)
                        )}
                    value={spanish}>
                    </input>

                    <label>Sounds Like:</label>
                    <input type="text"
                    onChange={((e) => 
                        setSounds(e.target.value)
                        )}
                    value={sounds}>
                    </input>
                    
                    <div className="create-button">
                    <button onClick={ addWords }>Add Words</button>
                    
                    </div> 
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="show-words">
                <h2>{title}</h2>
                
            </div>
        </div>
        </div>
     );
}
 
export default CreateArticle;