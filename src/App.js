import { useEffect, useState } from 'react';
import './App.css';
import PainelControle from './componentes/PainelControle';
import logo from './imagens/logo.png';



function App() {

  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);

  const [carne, setCarne] = useState(0);
  const [pao, setPao] = useState(0);
  const [bebida, setBebida] = useState(0);

  useEffect(() => {
    setCarne(Math.ceil(homens*0.5 + mulheres*0.3 + criancas*0.2));
    setPao(Math.ceil(homens*0.5 + mulheres*1 + criancas*1.5));
    setBebida(Math.ceil(homens*1 + mulheres*1 + criancas*0.5));  
  }, [homens, mulheres, criancas])
  

  return (
    <div id="conteudo">
      <img src={logo} alt='logo da calculadora de churrasco' />
      <h1>Calculadora de Churrasco</h1>
      <div id="painel">
        <div class="painelDados">
          <PainelControle label='Homens' valor={homens} setValor={setHomens} />
          <PainelControle label='Mulheres' valor={mulheres} setValor={setMulheres} />
          <PainelControle label='Crianças' valor={criancas} setValor={setCriancas} />
        </div>
        <div class="painelDados">
          <PainelControle label='Carne' botoes={false} valor={carne} setValor={setCarne} unidade='kg' />
          <PainelControle label='Pão' botoes={false} valor={pao} setValor={setPao} unidade='un'/>
          <PainelControle label='Bebida' botoes={false} valor={bebida} setValor={setBebida} unidade='gf'/>
        </div>
      </div>
    </div>
  );
}

export default App;
