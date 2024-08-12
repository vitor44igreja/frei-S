import { BrowserRouter, Routes, Route } from "react-router-dom";


//importação das paginas
import App from "./pages/inicio";
import Sobre from "./pages/sobre";
import Exercicio1 from "./pages/exercicio-01";
import Exercicio2 from "./pages/exercicio-02";
import Exercicio3 from "./pages/exercicio-03";
import Exercicio11 from "./pages/exercicio-11";

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element = {<App /> }/> 
                <Route path="/sobre" element = {< Sobre/>}/>
                <Route path="/ex1" element = {<Exercicio1/>}/>
                <Route path="/ex2" element = {<Exercicio2/>}/>
                <Route path="/ex3" element = {<Exercicio3/>} />
                <Route path="/ex11" element = {<Exercicio11/>}/>
            </Routes>
        </BrowserRouter>


    )
}

