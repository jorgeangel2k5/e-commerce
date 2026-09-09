import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

 const AppRouter = () => {
    return (
   
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute adminOnly={true} />}>
                    <Route path="/admin" element={<Admin />} />
            </Route>


         
            <Route path="*" element={<NotFound />} />
     
        </Routes>
     
    );
}
export default AppRouter;
