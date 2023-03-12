import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}