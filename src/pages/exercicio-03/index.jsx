import './index.scss';
import Cabecalho from "../../components/cabecalho";
import Linha from '../../components/linha';

export default function Exercicio2(){

    return(
        <div className="pagina-ex3">
            <Cabecalho/>
            
            <Linha
                titulo='Valor total por quantidade'
                ex='Exercicio 03'
                cor='#37FFF3'
            />
            
            <section className="secao">
            <div className="txt">
                    <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
                </div>
            </section>

        </div>
    )
}