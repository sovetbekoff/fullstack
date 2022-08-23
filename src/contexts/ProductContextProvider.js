import axios from "axios";
import { createContext, useContext, useReducer } from "react";

export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
  }
};
const API = "https://almakg.herokuapp.com";
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    await axios.post("http://localhost:8000/posts", newProduct);
    getProducts();
  };

  const getProducts = async () => {
    const { data } = await axios(
      `${"http://localhost:8000/posts"}/${window.location.search}`
    );

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  return (
    <productContext.Provider
      value={{
        getProducts,
        addProduct,
        products: state.products,
        pages: state.pages,
        categories: state.categories,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
