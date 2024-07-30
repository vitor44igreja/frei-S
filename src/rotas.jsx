import { BrowserRouter, Routes, Route } from "react-router-dom";


//importação das paginas
import App from "./pages/inicio";
import Sobre from "./pages/sobre";
import Exercicio1 from "./pages/exercicio-01"

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element = {<App /> }/> 
                <Route path="/sobre" element = {< Sobre/>}/>
                <Route path="/ex1" element = {<Exercicio1/>}/>
            </Routes>
        </BrowserRouter>


    )
}

