// depois dos plugins instalado vamos importar
import styled from 'styled-components';
/* abaixo vamos importar o Link para poder ser utilizado como elemento pelo CSS senão só poderíamos utilizar os elementos do html como div, h1, ul, etc.*/
import { Link } from 'react-router-dom';

export const Container = styled.div `
    width: 100%;
    max-width: 991px;
    marging: 0 auto;
`

export const Title = styled.h1 `
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`;

export const List = styled.ul `
    list-style: none;
    padding: 0;
    marging: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li `
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    color: #fff;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    text-decoration: none;


`