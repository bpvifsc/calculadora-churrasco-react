
export default function PainelControle({label, botoes=true, valor, setValor, unidade=''}) {

    return(
        <div class="painelControle">
            <p>{label}:</p>
            {botoes?<span class="mais botao" onClick={()=>setValor(valor+1)} >+</span>:<></>}
            <span class="quantidade">{valor}</span>
            {botoes?<span class="menos botao" onClick={()=>setValor(valor-1)} >-</span>:<></>}
            <span> {unidade}</span>
          </div>
    )    

}