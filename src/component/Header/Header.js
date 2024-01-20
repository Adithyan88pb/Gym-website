import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/image/Black_White_and_Yellow_Bold_Fitness_Logo-removebg-preview.png";
import "./Header.css";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/GYM Winner's ",
    display: "  Championship",
  },
];
const Header = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header  " ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* logo start*/}
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" style={{ width: "30%" }} />
              </Link>
            </div>
            {/* logo end*/}

            {/* menu start */}
            <div
              className="-aseeee-navigation111"
              ref={menuRef}
              onClick={toggleMenu}
            >
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item) => (
                  <li className="nav__item">
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <Link
                        to={item.path}
                        onClick={handleClick}
                        style={{ textDecoration: "none", color: "#fff" }}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </Link>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu end */}

            <div className="nav__right d-flex align=items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn primary__btn">
                  <Link to="/Contact">Contact</Link>
                </Button>
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
