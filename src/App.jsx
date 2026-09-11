import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { UserProvider } from './context/UserContext';
import Login  from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

          <Route path="/producto/:id" element={<ProductDetail />} />

          {/* Ruta protegida */}
          <Route element={<ProtectedRoute adminOnly={true} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;