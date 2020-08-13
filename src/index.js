import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={'Pagina404'} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// A última rota (sem path) será renderizada para qlqr outra rota não declarada
// Exact -> só renderiza se for exatamente aquele path