import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Framework/Layout";
import Accueil from "./pages/Home/Home";
import Apropos from "./pages/About/About";
import Logement from "./pages/Housing/Housing";
import Error from "./components/Error/Erreur";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Accueil />}/>
                    <Route path="/About" element={<Apropos />}/>
                    <Route path="/Housing/:id" element={<Logement />}/>
                    <Route path="*" element={<Error />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;