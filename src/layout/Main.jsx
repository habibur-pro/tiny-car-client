import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-80px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster

            />
        </>
    );
};

export default Main;