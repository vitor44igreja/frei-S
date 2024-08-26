import { Link } from "react-router-dom";
import { useState } from 'react'

import './index.scss';
import Cabecalho from "../../components/cabecalho";

export default function Exercicio2(){

    return(
        <div className="pagina-ex3">

            <Cabecalho/>
            <div className="exercicio">
                <div className="titulo">

                    <Link to='/'>
                        <img src="/assets/images/seta.png" alt="" width={40} />
                    </Link>
                    <h1>
                        Exercício 03 -  Valor total por quantidade
                    </h1>
                </div>
                <hr className="azul"/>
            </div>
            <section className="secao">
            <div className="txt">
                    <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
                </div>
            </section>

        </div>
    )
}