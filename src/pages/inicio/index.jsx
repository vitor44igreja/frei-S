import { Link } from "react-router-dom";
import './index.scss';

import Cabecalho from "../../components/cabecalho";

export default function App() {

  function Card({ link_card, cor_card, titulo_card, exercicio_card }) {





    return (
      <Link to={link_card}>
        <div className="card">
          <div className={cor_card}></div>

          <h4>{titulo_card}</h4>
          <p>{exercicio_card}</p>
        </div>
      </Link>
    )
  }

  return (
    <div className="pagina-inicio">
      <Cabecalho />

      <h1>Escolha um treino...</h1>

      <section className="secao">

        <Card link_card='/ex1'
          cor_card='bloco dourado'
          titulo_card='Cupom de Desconto'
          exercicio_card='Exercicio 1'
        />
        <Card
          link_card='/ex2'
          cor_card='bloco verde'
          titulo_card='Converter kg/gramas'
          exercicio_card='Exercicio 02'
        />

        <Card
          link_card='/ex3'
          cor_card='bloco azul'
          titulo_card='Valor total por quantidade'
          exercicio_card='Exercicio 03'
        />

        <Card
          link_card='/ex10'
          cor_card='bloco laranja'
          titulo_card='Calculo de IMC com histórico'
          exercicio_card='Exercicio 10'
        />

        <Card
          link_card='/ex11'
          cor_card='bloco roxo'
          titulo_card='Tabuada'
          exercicio_card='Exercicio 11'
        />

      </section>
    </div>
  );
}