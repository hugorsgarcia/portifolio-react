import profileImg from '../assets/profile.jpg'
import htmlIcon from '../assets/HTML.svg'
import cssIcon from '../assets/CSS.svg'
import jsIcon from '../assets/JavaScript.svg'
import nodeIcon from '../assets/Node.js.svg'
import reactIcon from '../assets/React.svg'
import javaIcon from '../assets/java-icon.svg'
import arrowIcon from '../assets/caret-double-down.svg'
import '../styles/hero.css'
import { useEffect } from 'react'



const handleScroll = (e) => {
    e.preventDefault();
    const section2 = document.getElementById('section-2');
    section2.scrollIntoView({ behavior: 'smooth' });
};


export default function Hero() {
    
    useEffect(() => {
        const applyScrollEffect = (sectionClass, scrollSpeed = 10) => {
            const section = document.querySelector(sectionClass);
            if (!section) return;
        
            const sectionWidth = section.clientWidth;
            let scrollPosition = 0;
            let animationFrameId;
        
            function scrollBackground() {
                scrollPosition += scrollSpeed;
                section.style.backgroundPosition = `-${scrollPosition}px 0`;
            
                if (scrollPosition >= sectionWidth) {
                    scrollPosition = 0;
                }
            
                animationFrameId = requestAnimationFrame(scrollBackground);
            }
        
            scrollBackground();
            
            return () => {
                cancelAnimationFrame(animationFrameId);
            };
        };
    
        applyScrollEffect('.section-1', 5);
        applyScrollEffect('.section-4', 5);
    }, []);

    return (
        <>
        <section className="section-1">

        <div className="container floating-text">
          <img src={profileImg}alt="Imagem 1" />
        </div>
        <div className="tittle">
          <p className="floating-text">printf("Ola mundo!");</p>
          <p className="floating-text">Meu nome é Hugo Garcia</p>
          <h1 className="floating-text">Desenvolvedor Fullstack</h1>
          <p className="floating-text">
            Oriundo da Engenharia, hoje graduando em ciência da computação,
             apaixonado por tecnologia e programação. Atualmente estou focado em desenvolvimento web,
              com conhecimentos em HTML, CSS, JavaScript, Node.js, React e Java. Aluno do Projeto <a href="https://www.grupoenergisa.com.br/tags/rio-pomba-valley">Rio Pomba Valley.</a>
          </p>
        </div>
        <div className="icons floating-text">
          <div className="icon-container">
            <a href="#"><img src={htmlIcon} alt="HTML" /></a>
          </div>
          <div className="icon-container">
            <a href="#"><img src={cssIcon} alt="CSS"/></a>
          </div>
          <div className="icon-container">
            <a href="#"><img src={jsIcon} alt="JavaScript"/></a>
          </div>
          <div className="icon-container">
            <a href="#"><img src={nodeIcon}  alt="NodeJS"/></a>
          </div>
          <div className="icon-container">
            <a href="#"><img src={reactIcon} alt="React"/></a>
          </div>
          <div className="icon-container">
            <a href="#"><img src={javaIcon} alt="Java" width="40%"/></a>
          </div>
        </div>
    
        <div className="icon-container">
          <a href="#section-2" onClick={handleScroll}><img src={arrowIcon} alt="Arrow" /></a>
        </div>
        
    
      </section>
      </>
    )
    }