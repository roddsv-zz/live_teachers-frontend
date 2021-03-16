import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';

function Home() {
    return (
    <>
        <div>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">Com a LiveTeachers.com é possível <br /> reservar e assistir às suas aulas com  <br /> especialistas de forma online, ao vivo <br />e de onde você quiser!
                        </h1>
                        <h3 className='home-subtitle'>
                            É muito fácil apender com LiveTeachers.com:
                            <ol>
                                <li>Clique no botão abaixo.</li>
                                <li>Ao abrir a nova página, escolha a matéria que deseja estudar.</li>
                                <li>Escolha o seu instrutor.</li>
                                <li>Escolha o horário e a data.</li>
                                <br />
                            Depois é só confirmar os seus dados, <br /> efetuar pagamento e pronto! <br /> Seu aprendizado com qualidade já tem hora marcada!
                            </ol>
                        </h3>
                        <a href="classes" className="home-btn-classes">Reservar Aula</a>
                        <div className="home-image">
                            <MainImage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    );
}

export default Home;