import React from "react";
import useForm from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  // render () {
  //   console.log(this.props);

  // };

  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    if (description.length <= 1) return;

    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        ></input>

        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
