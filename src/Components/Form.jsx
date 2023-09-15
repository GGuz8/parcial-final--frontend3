import React from "react";
import { useState } from "react";
import { useGlobalContext } from '../context'


const Form = () => {
  const { navBarTheme, handleChangeTheme } = useGlobalContext()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [submited, setSubmited] = useState(false)

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const regExEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const regExUser = /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;

  const emailValidado = regExEmail.test(email);
  const userValidado = regExUser.test(username);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    setFormValid(emailValidado && userValidado);
  };

  const renderFormStatus = () => {
    if (formValid) {
      return (
        <div className="formOk">
          <p>Formulario enviado</p>
        </div>
      );
    } else if (submited) {
      return (
        <div className="formError">
          <p>Email incorrecto</p>
        </div>
      );
    }
    return null
  };

  return (
    <div className="container-form" >
      <form style={{ background: navBarTheme.background, color: navBarTheme.font}} onSubmit={onSubmit}>
        <p>Send us your questions and we will contact you</p>

        <div className="input-label">
          <label htmlFor="usernameInput">Username</label>
          <input
            id="usernameInput"
            type="text"
            value={username}
            onChange={onChangeUsername}
          />
        </div>

        <div className="input-label">

          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            type="text"
            value={email}
            onChange={onChangeEmail}
          />
        </div>

        <button type="submit">Enviar</button>
      <div className="form-status">
        {renderFormStatus()}
      </div>
      </form>

    </div>
  );
};

export default Form;