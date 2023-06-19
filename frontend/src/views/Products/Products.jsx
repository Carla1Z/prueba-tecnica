import "./Products.css";
import Cards from "../../components/Cards/Cards";
import ButtonAjax from "../../components/ButtonAjax/ButtonAjax";

const Products = () => {
  return (
    <div className="products mt-4" id="link">
      <h2>Te puede interesar</h2>
      <Cards />
      <ButtonAjax />
    </div>
  );
};

export default Products;
