import "./ButtonAjax.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ButtonAjax = () => {
  const [text, setText] = useState("");

  function loadText() {
    fetch("/home.json")
      .then((response) => response.json())
      .then((data) => {
        setText(data.texto);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="buttonajax">
      <Button variant="dark" size="lg" onClick={loadText}>
        Cargar Texto
      </Button>
      <textarea value={text} readOnly className="textarea" />
    </div>
  );
};

export default ButtonAjax;
