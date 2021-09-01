// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// axios abaixo é utilizado para consumir API
import axios from 'axios';
// import { func } from 'prop-types';
// acima dentro do parênteses estou usando o hooks, no caso acima digo o estado do usuário
function App(props) {
  const [ usuario, setUsuario] = useState('');
  // não se usa class no html desse código pois já é uma palavra reservada, se usa ao invés disso o className
  // sempre que quiser utilizar vários elementos e não quiser os mesmos em uma tag específica de html basta usar um fragmento <> </>
  // essa propriedade dentro do return <h1>{ props.title } { props.user }</h1>
  // 
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
    
  }
  return (
    // sempre o javascript no jsx tem que ser colocado entre chaves.
    // com componentes controlados todos os dados vão primeiro para o estado e depois para o componente, como no input abaixo
    <>
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;


// aqui temos JSX é um html dentro de javascript.
// código removido do return
//{/* <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          React do Wilson
//        </p>
//    
//      </header>
//    </div> */}