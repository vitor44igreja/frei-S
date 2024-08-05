import { Link } from "react-router-dom";
import { useState } from 'react'

import './index.scss';

export default function Exercicio2() {


    const [valorKGrama, setValorKGrama] = useState(0)
    const [res, setRes] = useState(0)


    function teclaApertada(e) {
        if (e.key === "Enter") {
            calcularTransicao()
        }
    }

    function calcularTransicao() {

        let Kgrama = valorKGrama

        let res = Kgrama * 1000


        setRes(res)
    }


    return (
        <div className="pagina-ex2">
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
                        Exercício 02 - Converter Kg/gramas
                    </h1>
                </div>
                <hr />
            </div>

            <section className="secao">
                <div className="txt">
                    <p>Implementar um programa em Javascript para converter kilos em gramas</p>
                </div>
                <div className="valor-gramas" onKeyUp={teclaApertada}>
                    <h1>Valor em Kilogramas</h1>
                    <input type="number" placeholder="0" value={valorKGrama} onChange={e => setValorKGrama(e.target.value)} />

                    <button onClick={calcularTransicao}> Executar </button>
                </div>

                <div className="res">
                    <h2> Resultado : {res} gramas</h2>
                </div>

            </section>
        </div>
    )
}
