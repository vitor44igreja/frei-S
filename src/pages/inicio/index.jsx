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
          link_card='/ex4'
          cor_card='bloco azulclaro'
          titulo_card='leitura'
          exercicio_card='Exercicio 04'
        />
        <Card
          link_card='/ex5'
          cor_card='bloco rosa'
          titulo_card='Média de notas'
          exercicio_card='Exercicio 05'
        />
        <Card
          link_card='/ex6'
          cor_card='bloco laranja'
          titulo_card='Salário líquido'
          exercicio_card='Exercicio 06'
        />
        <Card
          link_card='/ex7'
          cor_card='bloco verdeagua'
          titulo_card='Cores primárias'
          exercicio_card='Exercicio 07'
        />
        <Card
          link_card='/ex8'
          cor_card='bloco preto'
          titulo_card='Temperatura'
          exercicio_card='Exercicio 08'
        />
        <Card
          link_card='/ex9'
          cor_card='bloco cinza'
          titulo_card='Sorveteria'
          exercicio_card='Exercicio 09'
        />
        <Card
          link_card='/ex10'
          cor_card='bloco marromclaro'
          titulo_card='Calculo de IMC com histórico'
          exercicio_card='Exercicio 10'
        />

        <Card
          link_card='/ex11'
          cor_card='bloco roxo'
          titulo_card='Tabuada'
          exercicio_card='Exercicio 11'
        />
       <Card
          link_card='/ex12'
          cor_card='bloco dourado'
          titulo_card='Comparador de pessoas'
          exercicio_card='Exercicio 12'
        />
      </section>
    </div>
  );
}