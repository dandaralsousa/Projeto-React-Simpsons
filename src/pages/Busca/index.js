import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import Axios from 'axios'
import './styles.css'


const Busca = () => {
     const [repositorio, setRepositorio] = useState([])
     const [busca, setBusca] = useState('')
     const [filtraRepositorio, setFiltraRepositorio] = useState([])
     const [usuario, setUsuario] = useState([])
     

     useEffect(()=> {
         getUser()
         const executaDados = async ()=> {
            const resposta = await Axios.get('https://api.github.com/users/dandaralsousa/repos')
            setRepositorio(resposta.data)
    
        }
         executaDados()

     },[])


     useEffect(()=>{
         setFiltraRepositorio(
             repositorio.filter(repo => {
                 return repo.name.includes(busca)
             })
         )
     },[busca,repositorio])


     async function getUser () {
        const resposta = await Axios.get('https://api.github.com/users/dandaralsousa')
        setUsuario(resposta.data)
      
    } 
     
     return (
        <>
            <Menu/>
          
           
            <div className="main">
            
           
            <ul className="repositorios">
                 {filtraRepositorio.map(repo => {
                 return(
                         <li className="repos" key={repo.id}>{repo.name}</li>
                    )
                })} 
                </ul>
                <div className="avatar">
                <img src={usuario.avatar_url} alt="imagem usuaria"/>
                <p>{usuario.name}</p>
                </div>
            
               <input placeholder="Encontre um repositório do GitHub"  onChange={e=>{setBusca(e.target.value)}}/>
          
            
           
               
            </div>
             <Footer/>
        </>
     
        )
}

export default Busca