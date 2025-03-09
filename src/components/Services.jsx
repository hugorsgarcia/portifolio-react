import services1 from "../assets/services-1.svg";
import services2 from "../assets/services-2.svg";
import services3 from "../assets/services-3.svg";
import "../styles/Services.css";


export default function services() {
  return (
    <>
      <section class="section-3">
        <div class="services">
          <h2>Como posso ajudar seu negócio</h2>
        </div>

        <div class="services-container">

      <div class="services-icons">
        <img src={services1} alt="HTML"/>
        <h4>Websites e Aplicativos</h4>
        <p>Desenvolvimento de sites para profissionais liberais e microempresas</p>
      </div>

      <div class="services-icons">
        <img src={services2}  alt="CSS"/>
        <h4>API e banco de dados</h4>
        <p>Criação de serviços do sistema </p>
      </div>

      <div class="services-icons">
        <img src={services3}  alt="JavaScript"/>
        <h4>Manutenção de sistema e hardware</h4>
        <p>Formatação de computares, notebooks, tablets, celulares, troca de peças, etc </p>
      </div>

    </div>
      </section>
    </>
  );
}
