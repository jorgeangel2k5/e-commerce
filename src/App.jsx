import { BrowserRouter } from "react-router";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;