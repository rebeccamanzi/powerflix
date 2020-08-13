import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import Button from './components/Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="Powerflix logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo 
      </Button>
    </nav>
  );
}

export default Menu;

// Button as="a" -> o botão irá se comportar como "a"
// Button as {Link} -> botão irá se comportar como Link
// Se usa o Link para que tenha comportamento de SPA (sem recarregar a pagina)
// Quando usa Link, troca o "href" por "to"