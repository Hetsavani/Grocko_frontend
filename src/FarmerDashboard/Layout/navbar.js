import { Link } from "react-router-dom";

function Navbar() {
  // return(
  //     <>
  //     <nav class="navbar navbar-expand-lg bg-light">
  //     <div class="container-fluid d-flex justify-content-spacebetween">
  //       <div>
  //         <a class="ms-3 h2" href="#" style={{textDecoration:"none",color:"black"}}>
  //           Grocko
  //         </a>
  //       </div>
  //       <div className="bg-success w-50 justify-content-spacebetween">
  //         <div className="ms-5">
  //         <button
  //           class="navbar-toggler"
  //           type="button"
  //           data-bs-toggle="collapse"
  //           data-bs-target="#navbarNav"
  //           aria-controls="navbarNav"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span class="navbar-toggler-icon"></span>
  //         </button>
  //         </div>
  //         <div class="collapse navbar-collapse" id="navbarNav">
  //           <ul class="navbar-nav">
  //             <li class="nav-item">
  //               <a class="nav-link active" aria-current="page" href="#">
  //                 Home
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 Vendor
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 Transport
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link">AI assistant</a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  //     </>
  // )
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
              <Link to="">
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
              <Link to="seeds">
              <a class="nav-link fw-medium" href="#Opportuanities">
                Seeds
              </a>
              </Link>
            </li>
            <li class="nav-item px-2">
              <Link to="transport">
              <a class="nav-link fw-medium" href="#testimonial">
                Transport
              </a>
              </Link>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link fw-medium" href="#invest">
                Govt. subsidies
              </a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link fw-medium" href="#contact">
                AI assistant
              </a>
            </li>
          </ul>
          {/* <form class="d-flex">
            <button
              class="btn btn-lg btn-dark bg-gradient order-0"
              type="submit"
            >
              Sign Up
            </button>
          </form> */}
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
