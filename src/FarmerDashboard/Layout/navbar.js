import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./profile.module.css";

function Navbar() {
  const nav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useState(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
    console.log(isLoggedIn);
    console.log("isLoggedIn");
  }, []);
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light py-3 bg-light opacity-85 mb-5"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img
            class="d-inline-block align-top img-fluid"
            src="assets/img/gallery/logo-icon.png"
            alt=""
            width="50"
          />
          <span class="text-theme font-monospace fs-4 ps-2">Grocko</span>
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item px-2">

              <Link to={""}>

                <a
                  class="nav-link fw-medium active"
                  aria-current="page"
                  href="#header"
                >
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item px-2">
              <Link to={isLoggedIn ? "seeds" : "/login"}>

                <a class="nav-link fw-medium" href="#Opportuanities">
                  Seeds
                </a>
              </Link>
            </li>
            <li class="nav-item px-2">
              <Link to={isLoggedIn ? "transport" : "/login"}>
                <a class="nav-link fw-medium" href="#testimonial">
                  Transport
                </a>
              </Link>
            </li>
            <li class="nav-item px-2">
              <Link to={isLoggedIn ? "" : "/login"}>
                <a class="nav-link fw-medium" href="#invest">
                  Govt. subsidies
                </a>
              </Link>
            </li>
            <li class="nav-item px-2">
              <Link to={isLoggedIn ? "" : "/login"}>
                <a class="nav-link fw-medium" href="#contact" className={styles.blinkingText}>
                  AI ASSISTANT
                </a>
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            {!isLoggedIn && (
              <button
                class="btn btn-lg btn-dark bg-gradient order-0"
                type="submit"
                onClick={() => {
                  nav("/login");
                }}
              >
                Login/ Signup
              </button>
            )}
            {isLoggedIn && (
              <div className={styles.profile}>
                <button
                  class={`btn ${styles.myBtnProfile}`}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <div class="dropdown"></div> */}
                </button>
                <div
                  class="dropdown-menu"
                  style={{
                    width: "250px",
                    backgroundColor: "#CCCCCC",
                    padding: "5px 5px",
                  }}
                  aria-labelledby="dropdownMenuButton1"
                >
                  {/* <div style={{height:"80px"}}> */}
                  <div
                    style={{
                      padding: "5px 10px 5px 10px",
                      display: "flex",
                      borderBottom: "1px solid gray",
                      height: "70px",
                      marginBottom: "10px",
                    }}
                  >
                    <div className={styles.detailImg}></div>
                    <div style={{ textAlign: "center" }}>
                      {sessionStorage.getItem("UserName")}
                    </div>
                  </div>
                  {/* </div> */}
                  <div style={{ height: "40px" }}>
                    <a class="dropdown-item" href="#" onClick={() => {}}>
                      Edit Profile
                    </a>
                  </div>
                  <div style={{ height: "40px" }} onClick={() => {}}>
                    <a class="dropdown-item" href="#">
                      recent meetings
                    </a>
                  </div>
                  <div style={{ height: "40px" }}>
                    <a class="dropdown-item" href="#">
                      <div
                        style={{ color: "red" }}
                        onClick={() => {
                          // sessionStorage.clear();
                          sessionStorage.setItem("isLoggedIn", false);
                          nav("/login");
                        }}
                      >
                        Logout
                      </div>
                    </a>
                  </div>
                </div>
                {/* <img class="profile-logo" src="../../assets/profile_img.jpg" alt="Profile Image"></img> */}
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>

    //   <nav class="navbar navbar-expand-lg bg-light">
    //   <div class="container-fluid d-flex justify-content-spacebetween">
    //     <div>
    //       <a class="ms-3 h2" href="#" style={{textDecoration:"none",color:"black"}}>
    //         Grocko
    //       </a>
    //     </div>
    //     <div className="bg-success w-50 justify-content-spacebetween">
    //       <div className="ms-5">
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       </div>
    //       <div class="collapse navbar-collapse" id="navbarNav">
    //         <ul class="navbar-nav">
    //           <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               Vendor
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               Transport
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link">AI assistant</a>
    //           </li>
    //         </ul>
    //       </div>

    // </div>
    // </div>
    // </nav>
  );
}
export default Navbar;
