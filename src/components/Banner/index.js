import React from 'react'
import Img from '../../assets/imagem.svg'
import './styles.css'


const Banner = () =>{

   return (
    <div className="main">
        <div>
            <h1>Meu Projetão</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <img src={Img} alt="Ilustração com mulher e uma tela de computador" />
    </div>
   )
       
}

export default Banner