import React, { useState } from 'react';
// axios abaixo é utilizado para consumir API
import axios from 'axios';
// import { func } from 'prop-types';
// acima dentro do parênteses estou usando o hooks, no caso acima digo o estado do usuário
import * as S from './styled';
// para mudar de página vamos importar o history
import { useHistory } from 'react-router-dom';


function App(props) {
  const [ usuario, setUsuario] = useState('');
  const history = useHistory();
  // não se usa class no html desse código pois já é uma palavra reservada, se usa ao invés disso o className
  // sempre que quiser utilizar vários elementos e não quiser os mesmos em uma tag específica de html basta usar um fragmento <> </>
  // essa propriedade dentro do return <h1>{ props.title } { props.user }</h1>
  // 
  function handlePesquisa() {
    // na função abaixo vamos pegar o respositório listar, depois pegar apenas os nomes dos repositórios e armazenar localmente no storage do navegador
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      // abaixo usamos o history e colocamos no repositório
      history.push('/repositories');
    });
    
  }
  return (
    // sempre o javascript no jsx tem que ser colocado entre chaves.
    // com componentes controlados todos os dados vão primeiro para o estado e depois para o componente, como no input abaixo
    <S.Container>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;


