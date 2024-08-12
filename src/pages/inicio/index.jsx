import { Link } from "react-router-dom";
import './index.scss';


export default function App() {
  return (
    <div className="pagina-inicio">

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

      <h1>Escolha um treino...</h1>

      <section className="secao">

        <Link to='/ex1'>
          <div className="card">
            <div className="bloco dourado"></div>

            <h4>Cupom de desconto</h4>
            <p>Exercício 01</p>
          </div>
        </Link>

        <Link to='/ex2'>
          <div className="card">
            <div className="bloco verde"></div>

            <h4>Converter Kg/gramas</h4>
            <p>Exercício 02</p>
          </div>
        </Link>

        <Link to='/ex3'>
          <div className="card">
            <div className="bloco azul"></div>
            
            <h4>Valor total por quantidade</h4>
            <p>Exercício 03</p>
          </div>
        </Link>
        <Link to='/ex11'>
          <div className="card">
            <div className="bloco roxo"></div>
            
            <h4>Tabuada</h4>
            <p>Exercício 11</p>
          </div>
        </Link>
        <Link to='/ex10'>
          <div className="card">
            <div className="bloco laranja"></div>           
            <h4>Calculo de IMC com histórico</h4>
            <p>Exercício 10</p>
          </div>
        </Link>
      </section>

    </div>
  );
}
