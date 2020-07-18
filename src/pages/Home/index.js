import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import { Modal, Button } from "react-bootstrap";
import { Divider } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

import api from "../../services/api";

import "./styles.css";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => setShow(true);

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
      <h2>Associados cadastrados</h2>
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
          {associados.map(function (associado) {
            return (
              <tr key={associado.id}>
                <td>{associado.nome}</td>
                <td>{associado.cpf}</td>
                <td>{associado.tipo}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleShow(associado.id)}
                  >
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
            );
          })}
        </tbody>
      </table>
      <div className="dialog-container">
        {associados.map((associado, index) => (
          <Modal show={show} onHide={handleClose} key={index}>
            <Modal.Body>
              <h3>Informações Pessoais</h3>
              <Divider />
              <strong>Tipo: </strong> {associado.tipo} <br />
              <strong>Nome: </strong> {associado.nome} <br />
              <strong>CPF: </strong> {associado.cpf} <br />
              <strong>RG: </strong> {associado.rg} <br />
              <Divider />
              <h3>Endereço e Contato</h3>
              <Divider />
              <strong>Endereço: </strong> {associado.endereco} <br />
              <strong>Bairro: </strong> {associado.bairro} <br />
              <strong>Cidade: </strong> {associado.cidade} <br />
              <strong>Celular: </strong> {associado.celular} <br />
              <Divider />
              <div hidden={associado.tipo === "Principal"}>
                <h3>Informações do Patrocinador</h3>
                <Divider />
                <strong>Patrocinador: </strong> {associado.patrocinador} <br />
              </div>
              <div hidden={associado.tipo === "Dependente"}>
                <h3>Informações Bancárias</h3>
                <Divider />
                <strong>Banco: </strong> {associado.banco} <br />
                <strong>Agência: </strong> {associado.agencia} <br />
                <strong>Conta: </strong> {associado.conta} <br />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
      </div>
    </div>
  );
}
