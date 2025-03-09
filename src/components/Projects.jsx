import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.png'
import project6 from '../assets/project-6.png'
import '../styles/Projects.css';


export default function Projects() {
  return (
    <>
      <section className="section-2" id="section-2">
        <div className="div-projects">
          <h2>Meus principais projetos</h2>
        </div>
        <div className="container-projects">
          <div className="project-cards">
            <img src={project1} alt="Imagem 1" />
            <h3>Projeto 1</h3>
            <p>EM BREVE</p>
          </div>
          <div className="project-cards">
            <img src={project2}alt="Imagem 1" />
            <h3>Projeto 2</h3>
            <p>EM BREVE</p>
          </div>
          <div className="project-cards">
            <img src={project3}alt="Imagem 1" />
            <h3>Projeto 3</h3>
            <p>EM BREVE</p>
          </div>
          <div className="project-cards">
            <img src={project4} alt="Imagem 1" />
            <h3>Projeto 4</h3>
            <p>EM BREVE</p>
          </div>
          <div className="project-cards">
            <img src={project5} alt="Imagem 1" />
            <h3>Projeto 5</h3>
            <p>EM BREVE</p>
          </div>
          <div className="project-cards">
            <img src={project6} alt="Imagem 1" />
            <h3>Projeto 6</h3>
            <p>EM BREVE</p>
          </div>
        </div>
      </section>
    </>
  );
}
