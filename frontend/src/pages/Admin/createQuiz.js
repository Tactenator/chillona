import { useState } from "react";
import { Convert } from 'mongo-image-converter';

const CreateQuiz = () => {

    const [ title, setTitle ] = useState('New Quiz');
    const [ file, setFile ] = useState('')
    const [ icon, setIcon ] = useState('');
    const [ color, setColor ] = useState('')
    const [ questions, setQuestions ] = useState('')
    const [ answersArray, setAnswersArray ] = useState([])
    const [ questionsArray, setQuestionsArray ] = useState([])
    const [ correctArray, setCorrectArray ] = useState([])
    const [ answers, setAnswers ] = useState('')
    const [ correct, setCorrect ] = useState('')
    const [ error, setError ] = useState(false);

    const questionsArr = [];
    const answersArr = [];
    const correctArr = [];

     const handleSubmit = (e) => {
        e.preventDefault(); 

        const quiz = { title, file, color, questionsArray, answersArray, correctArray };

        console.log('Added!')
    }

    const addQuestion = (e) => {
        e.preventDefault()
        const splitAnswers = answers.split(',');
        addQuiz(questions, splitAnswers);
        questionsArr.push(questions)
        correctArr.push(correct);
        answersArr.push(answers)
        setAnswersArray(answersArr => [...answersArr, answers]);
        setQuestionsArray(questionsArr => [...questionsArr, questions]); 
        setCorrectArray(correctArr => [...correctArr, correct]); 
        resetInputs();
    }

    const resetInputs = () => 
    {
        setQuestions('');
        setAnswers('');
        setCorrect('');
    }

    //create means of being able to display the quiz words that will be added ** Add means to delete as well! **
    const addQuiz = (question, answers) =>
    {
        //find show-words div and then create new div container for elemetns
        const quizDiv = document.querySelector('.show-words');
        const newDiv = document.createElement('div');

        //display question h2
        const h2 = document.createElement('h2')
        h2.innerHTML = question;

        //create list of words
        const ul = document.createElement('ul');
        answers.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item
            ul.appendChild(li);
        })
        newDiv.className = 'quiz-word'; 

        //append each item
        newDiv.appendChild(h2);
        newDiv.appendChild(ul);
        quizDiv.appendChild(newDiv);
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
    return ( 
        <div className="create-container">
            <div className="create">
                <form>
                    <h2>Add New Word</h2>
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

                    <label>Question</label>
                    <input type="text"
                    onChange={((e) => 
                        setQuestions(e.target.value)
                        )}
                    value={questions}>
                    </input>

                    <label>Answers:</label>
                    <input type="text"
                    onChange={(e) => {
                        let newAnswers; 
                        newAnswers = e.target.value; 
                        setAnswers( newAnswers );
                    }}
                    value={answers}>
                    </input>
                    <label>Correct Answer</label>
                    <input type="text"
                    onChange={((e) => 
                        setCorrect(e.target.value)
                        )}
                    value={correct}>
                    </input>
                    
                    <div className="create-button">
                    <button onClick={ addQuestion }>Add Question</button> 
                    
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="show-words">
                <h2>{title}</h2>
                
            </div>
        </div>
     );
}
 
export default CreateQuiz;