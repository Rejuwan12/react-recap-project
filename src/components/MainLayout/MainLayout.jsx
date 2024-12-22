import { Outlet } from "react-router";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;