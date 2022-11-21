import newImg from '../pictures/home.jpg'
import Study from '../pictures/success.png';
import Practice from '../pictures/virtual-class.png';
import Grow from '../pictures/plant.png';

const Home = () => {

    return ( 
        <div className="home">
            <div className='img-welcome-container'>
                <h1>Bienvenidos a Chillona</h1>
                <img src={newImg} className="home-image" alt="Two women chatting"></img>
                <h2>Esta listo a aprender ingles?</h2>
                <h3>Usted está en el lugar correcto</h3>
                <a href="#get-started">Haga clic aquí para comenzar</a>
            </div>
            <div id="get-started" className="highlights-container">
                <div className="highlight">
                    <img src={Study} style={{ height: "100px", width: "100px"}}alt="Study"></img>
                    <h2>Estudiar</h2>
                    <p>Chillona se da todos los recursos que usted necesita para aprender los cosas basicos de ingles.</p>
                </div>
                <div className="highlight">
                    <img src={Practice} style={{ height: "100px", width: "100px"}}alt="Study"></img>
                    <h2>Practicar</h2>
                    <p>Practica que ha aprendido con todos. Repetición is lo mas importante cosa para recuarda todo que aprende.</p>
                </div>
                <div className="highlight">
                    <img src={Grow} style={{ height: "100px", width: "100px"}}alt="Study"></img>
                    <h2>Crecer</h2>
                    <p>Cada dia que usted practica es un dia mas cerca a sus metas. Chillona esta aquí para ayudarse a alcanzar sus metas asi puede hablar ingles!</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;