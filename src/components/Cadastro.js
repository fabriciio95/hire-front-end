import React, { Component } from 'react';
import FooterAzul from './FooterAzul';

class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.dadosPerfilHandler = this.dadosPerfilHandler.bind(this);
  }

  componentDidMount(){
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;
  }
  

  dadosPerfilHandler(event) {
    const value = event.target.value;
    if(value === "Ser Contratado" || value === "Ambos") {
      document.getElementById("dados-perfil").style.display = "block";
      document.getElementById("form-cadastro").style.height = "1060px";
    } else {
      document.getElementById("form-cadastro").style.height = "610px";
      document.getElementById("dados-perfil").style.display = "none";
    }
  }

  render() {
    return (
      <div>
        <section className="introducao-cadastro">
          <div className="container">
              <h1 className="introducao-title introducao-title-cadastro">Junte-se a nós</h1>
              <h2 className="introducao-sub-title-cadastro">Crie um perfil gratuito para desbloquear oportunidades para você ou para aqueles que mais precisam.</h2>
          </div>
        </section>
        <section className="container">
          <form className="form form-cadastro grid-9" id="form-cadastro">
            <h1 className="title-form">Cadastro</h1>
            <label htmlFor="nome" className="label-form" >Nome</label>
            <input type="text" id="nome" className="txt-form" required />
            <label htmlFor="usuario" className="label-form" >Usuário</label>
            <input type="text" id="usuario" className="txt-form" required />
            <label htmlFor="senha" className="label-form">Senha</label>
            <input type="password" id="senha" className="txt-form" required />
            <label htmlFor="foto" className="label-form label-inline">Foto: </label>
            <input type="file" id="foto" className="input-file-form"/>
            <label htmlFor="select" className="label-form label-inline">Eu vou: </label>
            <select id="select" name="select-form" className="select-form" onChange={e => this.dadosPerfilHandler(e)}>
              <option>Contratar</option>
              <option>Ser Contratado</option>
              <option>Ambos</option>
            </select>
            <div className="form-dados-perfil" id="dados-perfil">
              <label htmlFor="endereco" className="label-form" >Endereço</label>
              <input type="text" id="endereco" className="txt-form" required />
              <label htmlFor="telefone" className="label-form" >Telefone</label>
              <input type="text" id="telefone" className="txt-form" required />
              <label htmlFor="email" className="label-form" >E-mail</label>
              <input type="email" id="email" className="txt-form" required />
              <label htmlFor="valor" className="label-form" >Valor/Hora</label>
              <input type="text" id="valor" className="txt-form" required />
              <label htmlFor="descricao" className="label-form" >Descrição</label>
              <textarea id="descricao" className="txt-area-form" placeholder="Ex: faxina, manicure, fotografia, etc..."></textarea>
            </div>
            <input type="submit" value="Salvar" className="btn-form btn-form-cadastro " />
          </form>
        </section>
        <FooterAzul isWithButton={false}/>
      </div>
    );
  }
}

export default Cadastro;