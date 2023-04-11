import React from "react";
import useFetch from "../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://rickandmortyapi.com/api/episode/1"
  );
  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>BreakinsBad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">Hola Mundo</p>
          <footer className="blockquote-footer">Ruben Rada</footer>
        </blockquote>
      )}
    </>
  );
};

export default MultipleCustomHooks;
