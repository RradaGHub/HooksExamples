import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider2",
    email: "Rubenrada@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // console.log(event.target.value);
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   console.log("useEffect changed");
  // }, []);

  // useEffect(() => {
  //   console.log("formState changed");
  // }, [formState]);

  // useEffect(() => {
  //   console.log("email changed");
  // }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
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
      {username === "strider" && <Message />}
    </>
  );
};

export default SimpleForm;
