import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AuthContextProvider from "./contexts/AuthContextProvider.js";
import ProductContextProvider from "./contexts/ProductContextProvider.js";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
