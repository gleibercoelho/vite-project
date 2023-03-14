import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Vendas } from "./pages/vendas";

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/vendas" element={<Vendas/>} />
        </Routes>
        </BrowserRouter>
    )
}