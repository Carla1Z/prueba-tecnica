import "./ProductCard.css";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { products } from "../../data/products";
import React, { useState } from "react";
import ModalProduct from "../ModalProduct/ModalProduct";

const ProductCard = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [popupWindow, setPopupWindow] = useState(null);
  const [counter, setCounter] = useState(new Array(products.length).fill(0));
  const [selectedProduct, setSelectedProduct] = useState(null);

  const updateCounter = (index) => {
    setSelectedProduct(products[index]);
    setCounter((prevCounter) => {
      const updatedCounter = [...prevCounter];
      updatedCounter[index] += 1;
      return updatedCounter;
    });

    if (popupWindow) {
      popupWindow.postMessage(products[index], "*");
    }
  };

  window.updateCounter = updateCounter;

  const handleClick = (index) => {
    if (index % 2 === 0) {
      const popup = window.open(
        "./popup.html",
        "_blank",
        "width=800,height=400"
      );
      setPopupWindow(popup);
      if (popup) {
        popup.onload = () => {
          popup.postMessage({ product: products[index], index }, "*");
        };
      }
    } else {
      //Card par
      setModalShow(true);
      updateCounter(index)
    }
  };

  return (
    <>
      <ModalProduct
        show={modalShow}
        onHide={() => setModalShow(false)}
        imagen={selectedProduct?.imagen}
        nombre={selectedProduct?.nombre}
      />
      {products.map((product, index) => (
        <Col
          xl={2}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          key={product.id}
          className="mx-3 mb-3"
        >
          <div className="card" onClick={() => handleClick(index)}>
            <img
              src={product.imagen}
              alt={product.nombre}
              className="product-image"
            />
            <span className="card-info">
              <h4>{product.nombre}</h4>
              <p className="card-description" style={{ maxHeight: "120px" }}>
                {product.descripcion}
              </p>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Contador de Visitas</Tooltip>}
              >
                <p className="contador">{counter[index]}</p>
              </OverlayTrigger>
            </span>
          </div>
        </Col>
      ))}
    </>
  );
};

export default ProductCard;
