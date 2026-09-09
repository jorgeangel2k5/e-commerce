import './App.css';
import { UserProvider } from './context/UserContext';
import { Login } from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ProtectedRoute } from './routes/ProtectedRoute';


function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* Ruta protegida */}
        <Route element={<ProtectedRoute adminOnly={true} />}>
          <Route path="/admin" element={<h1>Panel de Administración (Vista previa)</h1>} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;