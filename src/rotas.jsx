import { BrowserRouter, Routes, Route } from "react-router-dom";


//importação das paginas
import App from "./pages/inicio";
import Sobre from "./pages/sobre";
import Exercicio1 from "./pages/exercicio-01";
import Exercicio2 from "./pages/exercicio-02";
import Exercicio3 from "./pages/exercicio-03";
import Exercicio4 from "./pages/exercicio-04";
import Exercicio5 from "./pages/exercicio-05";
import Exercicio6 from "./pages/exercicio-06";
import Exercicio7 from "./pages/exercicio-07";
import Exercicio8 from "./pages/exercicio-08";
import Exercicio9 from "./pages/exercicio-09";
import Exercicio10 from "./pages/exercicio-10";
import Exercicio11 from "./pages/exercicio-11";
import Exercicio12 from "./pages/exercicio-12";

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element = {<App /> }/> 
                <Route path="/sobre" element = {<Sobre/>}/>
                <Route path="/ex1" element = {<Exercicio1/>}/>
                <Route path="/ex2" element = {<Exercicio2/>}/>
                <Route path="/ex3" element = {<Exercicio3/>} />
                <Route path="/ex4" element = {<Exercicio4/>}/>
                <Route path="/ex5" element = {<Exercicio5/>}/>
                <Route path="/ex6" element = {<Exercicio6/>}/>
                <Route path="/ex7" element = {<Exercicio7/>}/>
                <Route path="/ex8" element = {<Exercicio8/>}/>
                <Route path="/ex9" element = {<Exercicio9/>}/>
                <Route path="/ex10" element = {<Exercicio10/>}/>
                <Route path="/ex11" element = {<Exercicio11/>}/>
                <Route path="/ex12" element = {<Exercicio12/>}/>
            </Routes>
        </BrowserRouter>


    )
}

