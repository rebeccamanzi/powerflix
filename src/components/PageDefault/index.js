import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  /* variáveis que foram definidas no reset do index */
`;

function PageDefault({ children }) {
  return (
    <>
    <Menu />
      <Main>
        {children}
      </Main>
    <Footer />
    </>
  );
}

export default PageDefault;

// {children} -> desconstrução do props
// renderiza o que for adicionado dentro do componente

// styled components -> css dentro do js
// padroniza o estilo em todas as utilizações deste componente

// <> </> ou <React.Fragment> </React.Fragment>
// pega o fragmento que está dentro do React