// criando as rotas
// vamos precisar instalar o router dom: "npm install react-router-dom"
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';

import Repositories from './Pages/Repositories';

export default function Routes() {
    return (
        // abaixo a palavra "exact" é para a url na raiz não puxar tudo que tenha "/" contido no texto
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        
        </BrowserRouter>
    )
}