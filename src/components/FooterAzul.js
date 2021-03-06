import React from 'react';
import { Link } from 'react-router-dom';

const FooterAzul =  (props) => {  
    return (
      <div>
        <section className="bg-footer-azul">
          <div className="container">
            <h1 className="conteudo-title conteudo-title-laranja">Acreditamos no acesso a oportunidades</h1>
            <p className="txt-footer">
              Conforme o mundo evolui, também evolui a maneira como trabalhamos. Ao juntar-se
               a <span className="logo-text logo-text-smaller">Hire</span> é gerado milhares
              de novas oportunidades de emprego, enquanto você resolve o seu problema com segurança e economia.
          </p>
            {props.isWithButton ? 
            <div>
              <Link to="/cadastro" className="grid-7 btn-footer">Quero me cadastrar</Link>
              <Link to="/busca" className="grid-7 btn-footer bg-footer-azul-direito ">Quero contratar</Link>
            </div>  :
              "" }
          </div>
        </section>
        <footer className="bg-rodape">
          <div className="container">
            <p className="txt-rodape">
              <span className="logo-text logo-text-smaller logo-text-smaller-blue">Hire</span> - alguns direitos reservados
            </p>
          </div>
        </footer>
      </div>
    );
  }

export default FooterAzul;