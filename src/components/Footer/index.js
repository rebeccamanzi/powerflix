import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      {/* <a href="https://www.instagram.com/codepwr/" target="blank">
        <img src="../../assets/img/logo_codepwr.png" alt="Logo Code Power" />
      </a> */}
      <p>
        {/* eslint-disable-next-line */}
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
