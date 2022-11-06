import { connect } from "react-redux";
import { addToCart } from "./actions";
import ProductList from "./components/Products";


const mapStateToProps = (state) => {
  const products = Object.values(state.products);

  return {
    products
  };
};

export default connect(mapStateToProps, { onAddToCartClicked: addToCart })(
  Product
);