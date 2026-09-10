import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
 const AppRouter = () => {
    return (
   
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<AboutUs />} />
        </Routes>
     
    );
}
export default AppRouter;
