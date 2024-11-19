import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

// OUTLET is a temporary component which can change into any component as per the URL

function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Main;
