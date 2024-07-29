import { BrowserRouter, Routes, Route } from "react-router-dom";


//importação das paginas
import App from "./pages/inicio";



export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element = {<App /> }/> 

            </Routes>
        </BrowserRouter>


    )
}

