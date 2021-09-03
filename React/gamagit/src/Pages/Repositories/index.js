// componente criado para exibir os repositórios do github pesquisados no componente App.js
// é sempre obrigatório importar o react com o comando abaixo
import React, { useEffect, useState } from 'react';
// abaixo vou importar tudo e associar a variável S
import * as S from './styled';


export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);
    
     useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
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
       
        </S.Container>
    )
}

// vamos estilizar por css ou plugin chamado styled-componentes.com
// npm install styled-components
