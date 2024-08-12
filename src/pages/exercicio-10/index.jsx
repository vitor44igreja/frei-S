import { Link } from "react-router-dom";
//import { useState } from 'react'
import './index.scss';

export default function Exercicio10() {
    return (
        <div>
            <header className="cabecalho">

                <div className="logo">
                    <img src="/assets/images/logo.png" alt="" width={51.52} height={60} />
                    <h2>React FreiS</h2>
                </div>

                <div className="links">
                    <Link to='/'>Inicio</Link>
                    <Link to='/sobre'> Sobre</Link>
                </div>
            </header>
            <div className="exercicio">
                <div className="titulo">

                    <Link to='/'>
                        <img src="/assets/images/seta.png" alt="" width={40} />
                    </Link>
                    <h1>
                        Exercício 01 - Cupom de desconto
                    </h1>
                </div>
                <hr className="laranja" />
            </div>
        </div>
    )
}