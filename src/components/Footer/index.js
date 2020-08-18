import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.instagram.com/codepwr/" target="blank">
        <img src="../.././public/logo_codepwr.svg" alt="Logo Code Power" />
      </a>
      <p>
        Made with 💜 by
        {' '}
        <a href="https://www.linkedin.com/in/rebeccamanzi/" target="blank">
          Rebecca Manzi
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
