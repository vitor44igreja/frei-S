import './index.scss';

import { useState } from 'react'
import Cabecalho from '../../components/cabecalho/index.jsx'
import Linha from "../../components/linha/index.jsx";

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

            <Cabecalho />
            <div className="exercicio">

                <Linha 
                    titulo='Cupom de desconto'
                    ex='Exercicio 01'
                    cor='#FFCE37'
                />
                
                {/* <div className="titulo">

                    <Link to='/'>
                        <img src="/assets/images/seta.png" alt="" width={40} />
                    </Link>
                    <h1>
                        Exercício 01 - Cupom de desconto
                    </h1>
                </div>
                 */}
            </div>


            <section className="secao">

                <div className="txt">
                    <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                </div>

                <div className="valor-cupom" onKeyUp={teclaApertada}>
                    <h1>Informe o valor do pedido</h1>
                    <input type="number" placeholder="0" value={valorPedido} onChange={e => setValorPedido(e.target.value)} />

                    <h1>Informe o valor do cupom</h1>
                    <input type="number" placeholder="0" value={valorcupom} onChange={e => setValorcupom(e.target.value)} />

                    <button onClick={calcularDesconto}> Executar </button>
                </div>

                <h2> Resultado : R${res.toFixed(2)}</h2>
            </section>
        </div>
    )
}