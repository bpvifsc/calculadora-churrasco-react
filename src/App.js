import './App.css';
import logo from './imagens/logo.png';

function App() {
  return (
    <div id="conteudo">
      <img src={logo} alt='logo da calculadora de churrasco' />
      <h1>Calculadora de Churrasco</h1>
      <div id="painel">
        <div class="painelDados">
          <div class="painelControle">
            <p>Homens:</p>
            <span class="mais botao">+</span>
            <span class="quantidade">1</span>
            <span class="menos botao">-</span>
          </div>
          <div class="painelControle">
            <p>Mulheres:</p>
            <span class="mais botao">+</span>
            <span class="quantidade">1</span>
            <span class="menos botao">-</span>
          </div>
          <div class="painelControle">
            <p>Crianças:</p>
            <span class="mais botao">+</span>
            <span class="quantidade">1</span>
            <span class="menos botao">-</span>
          </div>  
        </div>
        <div class="painelDados">
          <div class="painelControle">
            <p>Carne:</p>
            <span class="quantidade">1</span>
          </div>
          <div class="painelControle">
            <p>Pão:</p>
            <span class="quantidade">1</span>
          </div>
          <div class="painelControle">
            <p>Bebidas:</p>
            <span class="quantidade">1</span>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
