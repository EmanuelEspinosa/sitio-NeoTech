import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { SliderContainer } from "../Slider/SliderContainer/SliderContainer";
import "./MainLayout.css";

export const MainLayout = () => {

    const location = useLocation();

    


    return (
        <div className="main-container">
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />

        </div>
    )
}