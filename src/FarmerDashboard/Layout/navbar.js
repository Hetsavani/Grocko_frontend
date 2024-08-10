function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid d-flex justify-content-spacebetween">
          <div>
            <a class="ms-3 h2" href="#" style={{textDecoration:"none",color:"black"}}>
              Grocko
            </a>
          </div>
          <div className="bg-success w-50 justify-content-spacebetween">
            <div className="ms-5">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Vendor
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Transport
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">AI assistant</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}
export default Navbar;  