import instagramLogo from "../assets/instagram-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import githubLogo from "../assets/github-logo.svg";
import emailLogo from "../assets/email.svg";
import "../styles/contact.css";
import { useEffect } from "react";

export default function Contact() {

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
        
            applyScrollEffect('.section-4', 5);
        }, []);
  return (
    <>
      <section class="section-4">
        <div class="contact-tittle">
          <h2>Gostou do meu trabalho ? </h2>
          <p>Entre em contato ou acompanhe as minhas redes sociais!</p>
        </div>

        <div class="contact">
          <a href="https://www.instagram.com/hugorsgarcia/" target="_blank">
            <img src={instagramLogo} alt="instagram-logo" /> Instagram
          </a>
        </div>

        <div class="contact">
          <a href="https://www.linkedin.com/in/hugorsgarcia/" target="_blank">
            <img src={linkedinLogo} alt="Linkedin-logo" /> LinkedIn
          </a>
        </div>

        <div class="contact">
          <a href="https://github.com/hugorsgarcia" target="_blank">
            <img src={githubLogo} alt="github-logo" /> Github
          </a>
        </div>

        <div class="contact">
          <a href="mailto:@hhugokta@hotmail.com" target="_blank">
            <img src={emailLogo} alt="instagram-logo" /> Email
          </a>
        </div>
      </section>
    </>
  );
}
