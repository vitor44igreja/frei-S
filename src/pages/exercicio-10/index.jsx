import { Link } from "react-router-dom";
//import { useState } from 'react'
import './index.scss';
import Cabecalho from "../../components/cabecalho";

export default function Exercicio10() {
    return (
        <div>

            <Cabecalho/>
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