import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

import "./styles.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <span>Associados Cadastrados</span>
        <Link className="button" to="/cadastro">
          Cadastrar Associado
        </Link>

        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <table>
        <tr>
          <th>Nome Completo</th>
          <th>CPF</th>
          <th>Tipo</th>
          <th>Ações</th>
        </tr>
        <tr>
          <td>Clizio</td>
          <td>902.199.029-22</td>
          <td>Principal</td>
          <td>
            <button type="button">
              <FiEye size={20} color="#e02041" />
            </button>
            <button type="button">
              <FiEdit2 size={20} color="#e02041" />
            </button>
            <button type="button">
              <FiTrash2 size={20} color="#e02041" />
            </button>
          </td>
        </tr>
        <tr>
          <td>Clizio</td>
          <td>902.199.029-22</td>
          <td>Principal</td>
          <td>
            <button type="button">
              <FiEye size={20} color="#e02041" />
            </button>
            <button type="button">
              <FiEdit2 size={20} color="#e02041" />
            </button>
            <button type="button">
              <FiTrash2 size={20} color="#e02041" />
            </button>
          </td>
        </tr>
        <tr>
          <td>Clizio</td>
          <td>902.199.029-22</td>
          <td>Principal</td>
          <td>
            <button type="button">
              <FiEye size={20} color="#e02041" />
            </button>
            <button type="button">
              <FiEdit2 size={20} color="#e02041" />
            </button>
            <button type="button">
              <FiTrash2 size={20} color="#e02041" />
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
