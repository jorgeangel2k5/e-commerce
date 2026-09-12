import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import NavbarApp from "./components/NavbarApp";
import FooterApp from "./components/FooterApp";
import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <NavbarApp />

                <AppRouter />

                <FooterApp />
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;