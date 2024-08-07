import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default MainLayout;