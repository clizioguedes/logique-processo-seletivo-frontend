import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import api from "../../services/api";

export default function CadastraAssociado() {
  const history = useHistory();

  const [tipo, setTipo] = useState("");
  const [patrocinador, setPatrocinador] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [rg, setRG] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [celular, setCelular] = useState("");
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      tipo,
      patrocinador,
      nome,
      cpf,
      rg,
      endereco,
      bairro,
      cidade,
      celular,
      banco,
      agencia,
      conta,
    };

    try {
      const response = await api.post("/associados", data); // eslint-disable-next-line
      alert(`Seu ID: ${response.data.id}`);
      history.push("/home");
    } catch (err) {
      alert("Erro de cadastro");
    }
  }

  return (
    <div className="cadastro-container">
      <div className="content">
        <section>
          <h1>Cadastro de Associado</h1>
          <p>Cadastre os associados e dependentes nesse formulário</p>
        </section>
        <form onSubmit={handleRegister}>
          <Link className="back-link" to="/home">
            <FiArrowLeft size="16" color="#e02041" />
            Voltar
          </Link>
          <select
            name="tipo"
            id="tipo"
            className="input-button"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Tipo de Assoc.</option>
            <option value="Principal">Principal</option>
            <option value="Dependente">Dependente</option>
          </select>
          <input
            className="input-button"
            placeholder="Patrocinador"
            hidden={tipo !== "Dependente"}
            value={patrocinador}
            onChange={(e) => setPatrocinador(e.target.value)}
          />
          <input
            className="input-button"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="input-button"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
          <input
            className="input-button"
            placeholder="RG"
            value={rg}
            onChange={(e) => setRG(e.target.value)}
          />
          <div className="input-group">
            <input
              className="input-button"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <input
              className="input-button"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <select
              name="cidade"
              id="cidade"
              className="input-button"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            >
              <option value="">Cidade</option>
              <option value="Goiânia">Goiânia</option>
              <option value="Aruanã">Aruanã</option>
            </select>

            <input
              className="input-button"
              placeholder="DDD + Celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              className="input-button"
              placeholder="Banco"
              hidden={tipo === "Dependente"}
              value={banco}
              onChange={(e) => setBanco(e.target.value)}
            />
            <input
              className="input-button"
              placeholder="Agencia"
              hidden={tipo === "Dependente"}
              value={agencia}
              onChange={(e) => setAgencia(e.target.value)}
            />
            <input
              className="input-button"
              placeholder="Conta"
              hidden={tipo === "Dependente"}
              value={conta}
              onChange={(e) => setConta(e.target.value)}
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
