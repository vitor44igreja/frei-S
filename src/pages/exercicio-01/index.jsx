import { Link } from "react-router-dom";
import { useState } from 'react'
import './index.scss';

export default function Exercicio1() {

    const [valorPedido, setValorPedido] = useState(0)
    const [valorcupom, setValorcupom] = useState(0)
    const [res, setRes] = useState(0)


    function teclaApertada(e) {
        if (e.key === "Enter") {
            calcularDesconto()
        }
    }

    function calcularDesconto() {
        
        let pedido = valorPedido
        let cupom = valorcupom

        let res = pedido - cupom


        setRes(res)
    }

    return (
        <div className="pagina-ex1">
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

                <Link to ='/'>
                    <img src="/assets/images/seta.png" alt="" width={40} />
                </Link>
                <h1>
                    Exercício 01 - Cupom de desconto
                </h1>
            </div>
            <hr className="amarelo"/>
        </div>


            <section className="secao">

                <div className="txt">
                    <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                </div>

                <div className="valor-cupom" onKeyUp={teclaApertada}>
                    <h1>Informe o valor do pedido</h1>
                    <input type="number" placeholder="0" value={valorPedido} onChange={e => setValorPedido(e.target.value)}/>

                    <h1>Informe o valor do cupom</h1>
                    <input type="number" placeholder="0" value={valorcupom}  onChange={e => setValorcupom(e.target.value)} />

                    <button onClick={calcularDesconto}> Executar </button>
                </div>

                <h2> Resultado : R${res.toFixed(2)}</h2>
            </section>
        </div>
    )
}