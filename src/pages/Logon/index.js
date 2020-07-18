import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

export default function Logon() {
  const history = useHistory();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { user, password });

      localStorage.setItem("user", user);

      history.push("/home");
    } catch (err) {
      alert("falha no login");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <input
            type="text"
            className="input-button"
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            className="input-button"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
