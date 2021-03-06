import axios from "axios";
import AuthService from "./AuthService";

class CrudService { 

  cadastrarUsuario(usuario, onSuccess, onError) {
    axios.post(`http://localhost:8080/usuario`, usuario)
      .then(() => onSuccess())
      .catch(e => onError(e));
  }

  atualizarUsuario(usuario, onSuccess, onError) {
    axios.put(`http://localhost:8080/usuario/${usuario.id}`, usuario, this.buildHeaderAuthorization())
         .then(() => onSuccess())
         .catch(e => onError(e));
  }

  cadastrarProfissional(profissional, onSuccess, onError) {
    axios.post(`http://localhost:8080/profissional`, profissional)
         .then(() => onSuccess())
         .catch(e => onError(e));
  }

  atualizarProfissional(profissional, onSuccess, onError) {
    axios.put(`http://localhost:8080/profissional/${profissional.id}`, profissional, this.buildHeaderAuthorization())
         .then(() => onSuccess())
         .catch(e => onError(e));
  }

  getUsuarioProfissional(id, onFetch, onError) {
    axios.get(`http://localhost:8080/usuario-profissional/${id}`, this.buildHeaderAuthorization())
         .then(response => onFetch(response.data))
         .catch(error => onError(error));
  }

  getPerfilProfissional(id, onFecth, onError) {
    axios.get(`http://localhost:8080/profissional/perfil/${id}`, this.buildHeaderAuthorization())
         .then(response => onFecth(response.data))
         .catch(error => onError(error));
  }

  fazerAvaliacao(avaliacao, onSuccess, onError) {
    axios.post(`http://localhost:8080/avaliacao/publicar`, avaliacao, this.buildHeaderAuthorization())
         .then((response) => onSuccess(response.data))
         .catch(e => onError(e));
  }

  buildHeaderAuthorization() {
    return {
      headers : {
        "Authorization" : `Bearer ${AuthService.getJWTToken()}`
      }
    }
  }
}

export default new CrudService();