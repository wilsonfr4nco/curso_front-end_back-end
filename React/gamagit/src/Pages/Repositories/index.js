// componente criado para exibir os repositórios do github pesquisados no componente App.js
// é sempre obrigatório importar o react com o comando abaixo
import React, { useEffect, useState } from 'react';
// abaixo vou importar tudo e associar a variável S
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);
    const history = useHistory();
     useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName !== null) {
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear(); 
        } else {
            history.push('/')
        }
    }, []);
    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
            { repositories.map(repository => {
                return (
                    <S.ListItem>Repositórios: { repository }</S.ListItem>
                )
            } ) }
            </S.List>
       {/* <a href="/">Voltar</a> o a é uma ancora no html, mas vamos utilizar um recurso do react para não ficar atualizando a página quando clicarmos em voltar */}
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

// vamos estilizar por css ou plugin chamado styled-componentes.com
// npm install styled-components
