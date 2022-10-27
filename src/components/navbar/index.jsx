import { Header } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "./burger-menu";
import MobileNavbar from "./mobile-navbar";
import classes from "./navbar.module.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const location = useLocation();
  const { pathname } = location;
  const pageInView = pathname.split("/")[1];

  return (
    <Header className="text-blue sticky-top bg-white">
      <nav className="navbar navbar-expand-md text-blue py-3 px-2">
        <div className="container overflow-hidden">
          <Link
            className="navbar-brand d-flex align-items-center text-blue"
            to="/"
          >
            <img
              src="/images/logo.svg"
              className="me-1"
              alt="logo"
              height="35"
            />
            <h3 className="m-0">Medica</h3>
          </Link>
          <BurgerMenu
            className="ms-auto navbar-toggler w-auto p-0 border-0 ms-auto "
            isOpen={isOpen}
            changeMenu={changeMenu}
          />
          <MobileNavbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pageInView={pageInView}
          />
          <div
            className="collapse navbar-collapse flex-grow-0  ms-auto  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item ">
                <Link
                  className={`nav-link fw-bold ${
                    pageInView === "" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    pageInView === "portfolio" ? "active" : ""
                  }`}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    pageInView === "appointments" ? "active" : ""
                  }`}
                  to="/appointments"
                >
                  Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    pageInView === "doctors" ? "active" : ""
                  }`}
                  to="/doctors"
                >
                  Doctors
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <button className="nav-link border-0 bg-transparent" to="#">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default Navbar;
