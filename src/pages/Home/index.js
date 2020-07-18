import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

export default function Home() {
  const history = useHistory();

  const [associados, setAssociados] = useState([]);

  const user = localStorage.getItem("user");

  useEffect(() => {
    api.get("associados").then((response) => {
      setAssociados(response.data);
    });
  }, []);

  async function handleDeleteAssociado(id) {
    try {
      await api.delete(`associados/${id}`);
      setAssociados(associados.filter((associado) => associado.id !== id));
    } catch {
      alert("Erro ao deletar Associado");
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="home-container">
      <header>
        <span>Bem vindo, {user}</span>
        <Link className="button" to="/cadastro">
          Cadastrar Associado
        </Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Associados cadastrados</h1>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>CPF</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {associados.map((associado) => (
            <tr key={associado.id}>
              <td>{associado.nome}</td>
              <td>{associado.cpf}</td>
              <td>{associado.tipo}</td>
              <td>
                <button type="button">
                  <FiEye size={20} color="#e02041" />
                </button>
                <button type="button">
                  <FiEdit2 size={20} color="#e02041" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteAssociado(associado.id)}
                >
                  <FiTrash2 size={20} color="#e02041" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
