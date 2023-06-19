import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalProduct = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.nombre}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={props.imagen}
          alt={props.nombre}
          className="img-fluid"
          style={{ maxHeight: "60vh", width: "100%", margin: "0 auto", objectFit: "contain" }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProduct;
