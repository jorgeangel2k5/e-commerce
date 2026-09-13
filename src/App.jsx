import AppRouter from "./routes/AppRouter";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </UserProvider>
  );
}

export default App;