import {Outlet} from 'react-router-dom';
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer"
import "./index.css";
import "./Layout.css"


const Layout = () => {
    return (
        <div id="content">
            <Navigation />
            <Outlet />
            <Footer />
        </div>


    )
};

export default Layout;