import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import "./styles.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <span>Página Inicial</span>
        <Link className="button" to="/cadastro">
          Cadastrar Associado
        </Link>

        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Associados Cadastrados</h1>
    </div>
  );
}
