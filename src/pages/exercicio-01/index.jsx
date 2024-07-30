import { Link } from "react-router-dom";
import './index.scss';

export default function Exercicio1() {
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

            <section className="secao">
                <div className="titulo">
                    <img src="/assets/images/seta.png" alt="" width={40} />
                    <h1>
                        Exercício 01 - Cupom de desconto
                    </h1>
                </div>
                    <hr />

                <div className="txt">
                    <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais terá de desconto.</b></p>
                </div>

                <div className="valor-cupom">
                    <h1>Informe o valor do pedido</h1>
                    <input type="number" placeholder="0" />

                    <h1>Informe o valor do cupom</h1>
                    <input type="number" placeholder="0" />

                    <input type="button" value="executar" />
                </div>

                <h2>Resultado: O total é R$ 0,00</h2>
            </section>
        </div>
    )
}