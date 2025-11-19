
import React, { useState } from "react";

function FormularioMultiCampos() {
  const [formData, setFormData] = useState({
    nome: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Extrai o nome e valor do campo
    setFormData({ ...formData, [name]: value }); // Atualiza o campo correspondente no estado
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${formData.nome}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioMultiCampos;
