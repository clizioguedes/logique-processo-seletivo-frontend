import React from "react";

import "./styles.css";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <form action="">
          <h1>Faça seu Login</h1>
          <input type="text" className="input-button" placeholder="Usuário" />
          <input type="password" className="input-button" placeholder="Senha" />
          <button type="submit" className="button">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
