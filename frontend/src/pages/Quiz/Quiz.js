import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Thumbsup from '../../pictures/thumbs-up.gif';
import Celebrate from '../../pictures/celebrate.gif';
import { Howl } from 'howler';
import correctSound from '../../sounds/correct.mp3';
import incorrectSound from '../../sounds/incorrect.mp3';
import end from '../../sounds/end.mp3';

const Quiz = () => {

    useEffect(() => {
        let ignore = false;  
        
        if (!ignore)  handleQuestion()  
        return () => { ignore = true; }
        },[]);

    const [ question, setQuestion ] = useState('');
    const [ options, setOptions ] = useState([]);
    const [ isCorrect, setCorrect] = useState('');
    const [ selected, setSelected ] = useState('');
    const [ count, setCount ] = useState(0);
    const [ length, setLength ] = useState(0); 
    const [ displayed, setDisplayed ] = useState(false);
    const [ right, setRight ] = useState(0);


    const { id } = useParams();
   

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/quiz/' + id);
        const data = await response.json(); 
        console.log(data);
        setLength(data.correctArray.length);
        return data; 
    }

    const handleOptions = () => { 
        fetchData()
       .then(data => {
            let newAnswers = data.answersArray[count].split(',');
            setOptions(newAnswers);
       });
    }

    const handleQuestion = () => { 
        setCount(count + 1);
        handleOptions();
        fetchData()
       .then(data => {
           setQuestion(data.questionsArray[count]);
           setCorrect(data.correctArray[count]);
       });
    }

    const handleClick = () => 
    {
       if(selected === isCorrect)
       {
           setRight(right + 1)
           callMySound(correctSound);
           document.querySelector(".selected").style.backgroundColor = "#45f248";
           
       }
       else 
       {
           document.querySelector(".selected").style.backgroundColor = "red";
           let radioOptions = document.querySelectorAll(".radio-options");
           let radioArr = Array.from(radioOptions);
           callMySound(incorrectSound);
           radioArr.forEach(option => {
            if(option.value === isCorrect)
            {
                option.style.backgroundColor = "#45f248";
                
            }
            setTimeout(
                function() {
                    option.style.backgroundColor = "";
                }, 2000);
           })
       } 

       if(count === length)
       {
        setTimeout(
            function() {
                setDisplayed(true);
                callMySound(end);
            }, 2000);
       
       }
       else{
        resetQuestion(); 
       }
       
    }

    const resetQuestion = () =>
    {
        setTimeout(
            function() {
                document.querySelector(".selected").style.backgroundColor = "";
                handleQuestion(); 
                setSelected('');
            }, 2000);
        
    }

    const handleChange = (e) => {
        if(e.target.value !== selected)
        {
            setSelected(e.target.value);
        }
        else{
            setSelected('');
        }
    }

    const callMySound = (src) => {

        const sound = new Howl({
            src: [`${src}`, `${src}`], 
            html5: true
        });
        sound.play();
    }

    return ( 
        <div className="quiz">
            <div style={{ display: displayed ? 'none' : 'block' }} className="quiz-test-word">
                <div>
                    Que significa es... <br></br><br></br>
                    { question }
                </div>
                <div className="radio-options-div">
                    <div className="radio-options-flex">
                        <input className={selected === options[0] ? "radio-options selected" : "radio-options"} onClick={handleChange} 
                        name="options-group" type="button" value={ options[0] } /> 
                    </div>
                    <div className="radio-options-flex">
                        <input className={selected === options[1] ? "radio-options selected" : "radio-options"} onClick={handleChange}
                        name="options-group" type="button" value={ options[1] } /> 
                    </div>
                    <div className="radio-options-flex">
                        <input className={selected === options[2] ? "radio-options selected" : "radio-options"} onClick={handleChange}
                        name="options-group" type="button" value={ options[2] } /> 
                    </div>
                    <div className="radio-options-flex">
                        <input className={selected === options[3] ? "radio-options selected" : "radio-options"} onClick={handleChange} 
                        name="options-group" type="button" value={ options[3] } /> 
                    </div>
                </div>
                <button onClick={ handleClick }>Submit</button>
            </div>
            <div className="score-container">
                {right > (length * 0.7) && 
                <div>
                    <img style={{ display: displayed ? 'block' : 'none'}} className="score-image" src={Celebrate} alt="thumbs-up"></img>
                    <div className="score-text">
                        <span style={{ display: displayed ? 'block' : 'none' }}>Has anotado {right}/{length}</span>
                        <span style={{ display: displayed ? 'block' : 'none' }}>Muy bien! Felicidades!</span>
                    </div>
                </div>
                }
                
                {right < (length * 0.7) && 
                <div>
                    <img style={{ display: displayed ? 'block' : 'none'}} className="score-image" src={Thumbsup} alt="thumbs-up"></img>
                    <div className="score-text">
                        <span style={{ display: displayed ? 'block' : 'none' }}>Has anotado {right}/{length}</span>
                        <span style={{ display: displayed ? 'block' : 'none' }}>Muy bien! Practica más para una mejor puntuación!</span>
                    </div>
                </div>
                }
            </div>        
        </div>
     );
}
 
export default Quiz;