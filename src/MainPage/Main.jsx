import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <>
            <Header></Header>
              <div className="min-h-[calc(100vh-120px)]">
                <Outlet />
              </div>
            <Footer></Footer>
        </>
    );
};

export default Main;