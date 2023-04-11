import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
// import Message from "./Message";

const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;
  useEffect(() => {
    console.log("useEffect changed");
  }, []);

  useEffect(() => {
    console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Custom Hook</h1>
      <hr />
      <input
        type="username"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="RubenRada@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
      {username === "strider" && <Message />}
    </>
  );
};

export default FormWithCustomHook;
