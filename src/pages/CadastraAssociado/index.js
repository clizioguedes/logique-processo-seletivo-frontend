import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

export default function CadastraAssociado() {
  // State Tipo Associado
  const [tipoAssociado, setTipoAssociado] = React.useState("principal");
  const funcTipoAssociado = (event) => {
    setTipoAssociado(event.target.value);
  };

  // State Tipo Associado
  const [cidade, setCidade] = React.useState("");
  const funcCidade = (event) => {
    setCidade(event.target.value);
  };

  return (
    <div className="cadastro-container">
      <div className="content">
        <section>
          <h1>Cadastro de Associado</h1>
          <p>Cadastre os associados e dependentes nesse formulário</p>
        </section>
        <form>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size="16" color="#e02041" />
            Voltar
          </Link>
          <label htmlFor="dependente">Tipo de Associado: </label>
          <div className="input-radio-group">
            <label for="principal">
              <input
                className="input-radio"
                type="radio"
                name="tipoAssociado"
                value="principal"
                onChange={funcTipoAssociado}
                checked={tipoAssociado === "principal"}
              />
              Principal
            </label>
            <br />
            <label for="dependente">
              <input
                className="input-radio"
                type="radio"
                name="tipoAssociado"
                value="dependente"
                onChange={funcTipoAssociado}
              />
              Dependente
            </label>
          </div>
          <input
            className="input-button"
            placeholder="Associado Patrocinador"
            hidden={tipoAssociado === "principal"}
          />
          <input className="input-button" placeholder="Nome Completo" />
          <input className="input-button" placeholder="CPF" />
          <input className="input-button" placeholder="RG" />
          <div className="input-group">
            <input className="input-button" placeholder="Endereço" />
            <input className="input-button" placeholder="Bairro" />
            <select
              name="cidade"
              id="cidade"
              className="input-button"
              placeholder="Cidade"
              onChange={funcCidade}
            >
              <option value="">Cidade</option>
              <option value="Goiânia">Goiânia</option>
              <option value="Aruanã">Aruanã</option>
            </select>

            <input className="input-button" placeholder="DDD + Celular" />
          </div>
          <div className="input-group">
            <input
              className="input-button"
              placeholder="Banco"
              hidden={tipoAssociado === "dependente"}
            />
            <input
              className="input-button"
              placeholder="Agencia"
              hidden={tipoAssociado === "dependente"}
            />
            <input
              className="input-button"
              placeholder="Conta"
              hidden={tipoAssociado === "dependente"}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar Associado
          </button>
        </form>
      </div>
    </div>
  );
}
