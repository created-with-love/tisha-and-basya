import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer__ThanksText">
        Маю надію, що котики вам сподобались та підняли ваш настрій
      </p>
      <p className="Footer__Donate">
        Цей маленький сайт створений з любовью. Допомагайте друзям нашим
        меньшим, донатьте у притулки для тварин та залишайтесь людьми!
      </p>
    </footer>
  );
};

export default Footer;
