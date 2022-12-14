import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider.js";
import ProductContextProvider from "./contexts/ProductContextProvider.js";
import MainRoutes from "./MainRoutes";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
