import { useState } from 'react'
import './index.scss';
import Cabecalho from "../../components/cabecalho";
import Linha from '../../components/linha';

export default function Exercicio2() {

    const [qtdpequeno, setQtdPequeno] = useState(0)
    const [qtdmedio, setQtdMedio] = useState(0)
    const [qtdgrande, setQtdGrande] = useState(0)
    const [res, setRes] = useState(0)

    function teclaApertada(e) {
        if (e.key === "Enter") {
            calcularpedido()
        }
    }

    function calcularpedido() {

        let p = 13.5
        let m = 15
        let g = 17.5

        let pequeno = qtdpequeno
        let medio = qtdmedio
        let grande = qtdgrande

        let res = (pequeno * p) + (medio * m) + (grande * g)


        setRes(res)
    }
    return (
        <div className="pagina-ex3">
            <Cabecalho />

            <Linha
                titulo='Valor total por quantidade'
                ex='Exercicio 03'
                cor='#37FFF3'
            />

            <section className="secao">
                <div className="txt">
                    <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
                </div>

                <div className='acai'>
                <div className='acai1' onKeyUp={teclaApertada}>
                    <div className='acaicop'>
                        <h3>Quantidade pequeno</h3>
                        <input type="number" placeholder='0' value={qtdpequeno} onChange={e => setQtdPequeno(e.target.value)} />
                    </div>

                    <div className='acaicop'>
                        <h3>Quantidade médio</h3>
                        <input type="number" placeholder='0' value={qtdmedio} onChange={e => setQtdMedio(e.target.value)} />
                    </div>

                    <div className='acaicop'>
                        <h3>Quantidade grande</h3>
                        <input type="number" placeholder='0' value={qtdgrande} onChange={e => setQtdGrande(e.target.value)} />
                    </div>
                </div>
                    <button onClick={calcularpedido}>Executar</button>
                </div>
                <div className='res'>
                    <h1>Resultado: O total é {res}</h1>
                </div>
            </section>

        </div>
    )
}