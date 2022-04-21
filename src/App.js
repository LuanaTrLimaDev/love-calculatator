import React, { useState } from 'react';
import './App.css';
import { Heart } from "phosphor-react";
import { getPercentage } from './services/actions';


function App() {
  const [nomeCasal,setNomeCasal] = useState({
    fname: "",
    sname: ""
  })
  const [resultado,setResultado] =useState(null)
  async function calcular() {
    const resposta=await getPercentage(nomeCasal)
    setResultado(resposta.data)
  }
 
  return (
    <>
      <div className='card-rosa-cinza'>
        <div className='card-rosa'>
          <h3 className='nome-casal'> {resultado?.sname ||""} {resultado ?"e":""} {resultado?.fname || ""} </h3>
          <span className='coracao1'>
            <Heart size={450} weight="thin" />
            <h4 className='resultado-love'>{resultado?.percentage||""}% </h4>
            <span className='coracao2'>
              <Heart size={450} weight="thin" />
            </span>
          </span>
          <p className='msg-resultado'>{resultado?.result||""} </p>
        </div>
        <div className='card-nomes-casal'>
          <h1 className='titulo-love'>Love</h1>
          <h2 className='titulo-calculator'>Calculator</h2>
          <div className='engloba-form-nome'>
            <input
              id="NomeEla"
              name="sname"
              placeholder="Seu nome:"
              type="email"
              value={nomeCasal.sname} 
              onChange={(e)=>setNomeCasal({...nomeCasal,[e.target.name]:[e.target.value]})}/>
            <input
              id="nomeEle"
              name="fname"
              placeholder="Nome do seu crush:"
              type="nome" 
              value={nomeCasal.fname}
              onChange={(e)=>setNomeCasal({...nomeCasal,[e.target.name]:[e.target.value]})}/>
          </div>
          <button className='btn-calcular' onClick={()=>calcular()}>Calcular</button>
        </div>
      </div>
    </>
  );
}

export default App;
