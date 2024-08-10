function Footer() {
  return (
    <section class="py-0" id="contact">
        <div class="bg-holder" style={{backgroundImage:"url('/public/assets/img/illustrations/footer-bg.png')",backgroundPosition:"center",backgroundSize:"cover"}}></div>
        <div class="container">
          <div class="row justify-content-lg-between min-vh-75" style={{paddingTop:"21rem"}}>
            <div class="col-6 col-sm-4 col-lg-auto mb-3">
              <h6 class="mb-3 text-1000 fw-semi-bold">COMPANY </h6>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">About Us</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Team</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Careers</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Contact</a></li>
              </ul>
            </div>
            <div class="col-6 col-sm-4 col-lg-auto mb-3">
              <h6 class="mb-3 text-1000 fw-semi-bold">INVEST </h6>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Features</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">How it works</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Pricing</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Login</a></li>
              </ul>
            </div>
            <div class="col-6 col-sm-4 col-lg-auto mb-3">
              <h6 class="mb-3 text-1000 fw-semi-bold">LEGAL </h6>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Privacy</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Terms</a></li>
                <li class="mb-3"><a class="text-700 text-decoration-none" href="#!">Security</a></li>
              </ul>
            </div>
            <div class="col-12 col-lg-auto mb-3">
              <div class="card bg-success">
                <div class="card-body p-sm-4">
                  <h5 class="text-white">Blog Grocko</h5>
                  <p class="mb-0 text-white">write email to us<span class="text-white fs--1 fs-sm-1">info@grockofarm.com</span></p><button class="btn btn-light text-success" type="button"> <svg class="bi bi-person me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#76C279" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                    </svg>Sing In</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="text-300 mb-0" />
          <div class="row flex-center py-5">
            <div class="col-12 col-sm-8 col-md-6 text-center text-md-start"> <a class="text-decoration-none" href="#"><img class="d-inline-block align-top img-fluid" src="assets/img/gallery/logo-icon.png" alt="" width="40" /><span class="text-theme font-monospace fs-3 ps-2">Grocko</span></a>
            </div>
          </div>
        </div>
</section>
  );
}
export default Footer