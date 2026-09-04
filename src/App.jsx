import './App.css';
import { UserProvider } from './context/UserContext';
import { Login } from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router'
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/login" element={<Login />} />

          
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;