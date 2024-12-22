import { Outlet } from "react-router";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <NavBar/>
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;