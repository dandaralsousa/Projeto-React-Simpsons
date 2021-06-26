import Img2 from "../../assets/github_icon.png"
import Img3 from "../../assets/linkedin_icon.png"
import "./styles.css"


const Footer = () => {
    return (
    
    <div className="rodape">
        <div className="social-media">

        <a href="https://www.linkedin.com/in/dandarasousa/" >     
            <img src={Img3} alt="Imagem do logo do Linkedin" width="30px" height="30px"/>

        </a>

        <a href="https://github.com/dandaralsousa" >       
            <img src={Img2} alt="Imagem do logo do Github" width="30px" height="30px" />
        
        </a>
        
        </div>

        <div className="autora">

        <h3><strong>Dandara Sousa</strong></h3>

        <p>Publicitária e Estudande de Desenvolvimento Front-End na Reprograma</p>
        </div>

    </div>
    )
}
export default Footer