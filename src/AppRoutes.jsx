import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Framework/Layout";
import Accueil from "./pages/About/About";
import Apropos from "./pages/Home/Home";
import Logement from "./pages/Housing/Housing";
import Error from "./components/Error/Erreur";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Accueil />}/>
                    <Route path="/About" element={<Apropos />}/>
                    <Route path="/Housing/:id" element={<Logement />}/>
                    <Route path="*" element={<Error />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;