import { Link } from "react-router-dom";
import { useState } from 'react'
import './index.scss';

export default function Exercicio11() {

    const [valor, setValor] = useState(0)
    const [res, setRes] = useState([])
    
    
    function teclaApertada(e) {
        if (e.key === "Enter") {
            calcularTabuada()
        }
    }
    
    function calcularTabuada() {
        
        let num = valor
        let res = []
        
        for (let i = 1; i <= 10; i++) {
            res[i] = `${num} X ${i} = ${num*i}`
            
        }
        
        
        setRes(res)
    }
    return (
        <div className="pagina-ex11">
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
                <hr className="roxo"/>
            </div>
            <section className="secao">
            <div className="txt">
                    <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
                </div>

                <div className="tabuada" onKeyUp={teclaApertada}>
                    <h1>Tabuada do:</h1>
                    <input type="text" placeholder="0" value={valor} onChange={e => setValor(e.target.value)} />
                    <button onClick={calcularTabuada}>Executar</button>
                </div>
                <div className="res">
                {res.map(r => <p>{r}</p>)}
                </div>
            </section>
        </div>
    )
}