import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../api/AuthService';
import FooterAzul from './FooterAzul'



class Home extends Component {  
  render() {
    return (
      <div>
        <section>
          {AuthService.isAuthenticated() ? 
          <div className="introducao-home-primeiro">
              <h1 className="introducao-title">Precisa de uma ajuda?</h1>
              <h2 className="introducao-sub-title">Encontre na <span className="logo-text">Hire</span> </h2>
              <Link to="/busca" className="btn btn-introducao">Começar</Link>
          </div> :
          <ul data-slide="principal">
            <li className="introducao-home-primeiro" key="1">
              <h1 className="introducao-title">Precisa de uma ajuda?</h1>
              <h2 className="introducao-sub-title">Encontre na <span className="logo-text">Hire</span> </h2>
              <Link to="/busca" className="btn btn-introducao">Começar</Link>
            </li>
            
            <li className="introducao-home-segundo" key="2">
              <h1 className="introducao-title">Precisa de uma oportunidade?</h1>
              <h2 className="introducao-sub-title">Encontre na <span className="logo-text">Hire</span> </h2>
              <Link to="/cadastro" className="btn btn-introducao">Começar</Link>
            </li>
            <li className="introducao-home-terceiro" key="3">
              <h1 className="introducao-title">Junte-se a nós</h1>
              <h2 className="introducao-sub-title">E entre para a familia <span className="logo-text">Hire</span> </h2>
              <Link to="/cadastro" className="btn btn-introducao">Cadastrar</Link>
            </li>
          </ul> } 
      </section>
      <section className="container">
        <h1 className="conteudo-title">Quem somos?</h1>
        <ul>
          <li>
            <div className="grid-9 img-conteudo-home"></div>
          </li>
          <li>
            <p className="grid-7 texto-conteudo-home">
              Somos uma plataforma que viabiliza a necessidade do cliente a uma oportunidade ao trabalhador autônomo,
              com segurança, praticidade e economia. Na <span className="logo-text logo-text-smaller">Hire</span> damos acesso a oportunidades para aqueles que mais precisam. Isso tudo sem currículos ou cartas de apresentação, pois simplificamos a conexão entre o cliente e o trabalhador mais rapidamente.
            </p>
          </li>
        </ul>
      </section>
      <FooterAzul isWithButton={true}/>
     </div>
    );
  }
}

export default Home;