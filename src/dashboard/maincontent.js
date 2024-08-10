import "../assets/css/theme.min.css";

function mainContent() {
    return (
        <>
            <section className="py-0" id="header">
                <div className="bg-holder d-none d-md-block"
                    style={{ backgroundImage: "url('../assets/img/illustrations/hero-header.png')", backgroundPosition: "right top", backgroundSize: "contain" }}></div>
                <div className="bg-holder d-md-none"
                    style={{ backgroundImage: "url('../assets/img/illustrations/hero-bg.png')", backgroundPosition: "right top", backgroundSize: "contain" }}></div>
                <div className="container">
                    <div className="row align-items-center min-vh-75 min-vh-lg-100">
                        <div className="col-md-7 col-lg-6 col-xxl-5 py-6 text-sm-start text-center">
                            <h1 className="mt-6 mb-sm-4 fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">
                                Empower Your Agriculture <br className="d-block d-lg-block" />Invest Smart, Grow Strong
                            </h1>
                            <p className="mb-4 fs-1">GrocKo enables agricultural entrepreneurs, small-scale farmers, and investors to connect, collaborate, and succeed with innovative solutions and sustainable practices.</p>
                            <a className="btn btn-lg btn-success" href="#" role="button">Start Investing</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" id="Opportunities">
                <div
                    className="bg-holder d-none d-sm-block"
                    style={{
                        backgroundImage: "url('assets/img/illustrations/bg.png')",
                        backgroundPosition: "top left",
                        backgroundSize: "225px 755px",
                        marginTop: "-17.5rem"
                    }}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto text-center mb-3">
                            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Explore New Horizons</h5>
                            <p className="mb-5">Join GrocKo, the pioneering platform dedicated to crowdfunding sustainable agriculture projects and empowering farmers worldwide.</p>
                        </div>
                    </div>
                    <div className="row flex-center h-100">
                        <div className="col-xl-9">
                            <div className="row">
                                <div className="col-md-4 mb-5">
                                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                        <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="../assets/img/icons/farmer.svg" height="60" alt="" />
                                            <div className="card-body">
                                                <h6 className="fw-bold fs-1 heading-color">Engage with Farmers</h6>
                                                <p className="mt-3 mb-md-0 mb-lg-2">Build meaningful connections with local farmers and support their efforts in sustainable agriculture through direct investment and collaboration.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                        <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="../assets/img/icons/growth.svg" height="60" alt="" />
                                            <div className="card-body">
                                                <h6 className="fw-bold fs-1 heading-color">Expand Your Business</h6>
                                                <p className="mt-3 mb-md-0 mb-lg-2">Harness the potential of agriculture by investing in innovative projects that promote growth and sustainability in the farming sector.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                        <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="../assets/img/icons/planting.svg" height="60" alt="" />
                                            <div className="card-body">
                                                <h6 className="fw-bold fs-1 heading-color">Impact Investment</h6>
                                                <p className="mt-3 mb-md-0 mb-lg-2">Contribute to social impact by funding projects that not only yield financial returns but also benefit communities and the environment.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Invest Section */}
            <section className="py-5" id="subsidies">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 mb-3">
                            <div className="row">
                                <div className="col-lg-9 mb-3">
                                    <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Government Subsidy Plans</h5>
                                    <p className="mb-5">With GrocKo, easily access and apply for various government subsidy plans tailored to support your farming needs, from initial setup to ongoing operations.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="card text-white">
                                        <img className="card-img" src="../assets/img/gallery/short-terms.png" alt="..." />
                                        <div className="card-img-overlay d-flex flex-column justify-content-center px-5 px-md-3 px-lg-5 bg-dark-gradient">
                                            <h6 className="text-success pt-2">IMMEDIATE SUPPORT</h6>
                                            <hr className="text-white" style={{ height: "0.12rem", width: "2.813rem" }} />
                                            <div className="pt-lg-3">
                                                <h6 className="fw-bold text-white fs-1 fs-md-2 fs-lg-3 w-xxl-50">Short-Term Subsidies</h6>
                                                <p className="w-xxl-75">Apply for subsidies that provide immediate financial assistance for urgent needs, helping you cover costs quickly and efficiently.</p>
                                                <button className="btn btn-lg btn-light text-success" type="button">Explore Subsidies</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="card text-white">
                                        <img className="card-img" src="../assets/img/gallery/fully-funded.png" alt="..." />
                                        <div className="card-img-overlay d-flex flex-column justify-content-center px-5 px-md-3 px-lg-5 bg-light-gradient">
                                            <h6 className="text-success pt-2">LONG-TERM ASSISTANCE</h6>
                                            <hr className="text-white" style={{ height: "0.12rem", width: "2.813rem" }} />
                                            <div className="pt-lg-3">
                                                <h6 className="fw-bold text-white fs-1 fs-md-2 fs-lg-3 w-xxl-50">Long-Term Subsidies</h6>
                                                <p className="w-xxl-75">Explore long-term subsidy plans designed to support your farm’s growth and development over extended periods, ensuring sustained success and productivity.</p>
                                                <button className="btn btn-lg btn-light text-success" type="button">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* How It Works Section */}
            <section className="py-0">
                <div
                    className="bg-holder"
                    style={{
                        backgroundImage: "url(../assets/img/illustrations/how-it-works.png)",
                        backgroundPosition: "center bottom",
                        backgroundSize: "cover",
                    }}
                ></div>
                <div className="container-lg">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-9 col-xl-5 text-center pt-8">
                            <h5 className="fw-bold fs-3 fs-xxl-5 lh-sm mb-3 text-white">How it works</h5>
                            <p className="mb-5 text-white">
                                With GrocKo, you can manage every aspect of farming seamlessly. From purchasing seeds from trusted vendors and acquiring essential equipment to coordinating crop transportation and securing the best prices for your produce, GrocKo covers all your farming needs.
                            </p>
                        </div>
                        <div className="col-sm-9 col-md-12 col-xxl-9">
                            <div className="theme-tab">
                                <ul className="nav justify-content-between">
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link active fw-semi-bold"
                                            href="#bootstrap-tab1"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab1"
                                            id="tab-1"
                                        >
                                            <span className="nav-item-circle-parent">
                                                <span className="nav-item-circle">01</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link fw-semi-bold"
                                            href="#bootstrap-tab2"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab2"
                                            id="tab-2"
                                        >
                                            <span className="nav-item-circle-parent">
                                                <span className="nav-item-circle">02</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link fw-semi-bold"
                                            href="#bootstrap-tab3"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab3"
                                            id="tab-3"
                                        >
                                            <span className="nav-item-circle-parent">
                                                <span className="nav-item-circle">03</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link fw-semi-bold"
                                            href="#bootstrap-tab4"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab4"
                                            id="tab-4"
                                        >
                                            <span className="nav-item-circle-parent">
                                                <span className="nav-item-circle">04</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab-1">
                                        <div className="row align-items-center my-6 mx-auto">
                                            <div className="col-md-6 col-lg-5 offset-md-1">
                                                <h3 className="fw-bold lh-base text-white">Select the ideal seeds from trusted vendors tailored to your farming needs.</h3>
                                            </div>
                                            <div className="col-md-5 text-white offset-lg-1">
                                                <p className="mb-0">
                                                    Explore a variety of seeds from reliable vendors to find the best match for your farm. GrocKo allows you to choose based on quality and price, ensuring you get the most suitable seeds for optimal growth and productivity.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab-2">
                                        <div className="row align-items-center my-6 mx-auto">
                                            <div className="col-md-6 col-lg-5 offset-md-1">
                                                <h3 className="fw-bold lh-base text-white">Easily coordinate the transportation of your crops once they’re ready.</h3>
                                            </div>
                                            <div className="col-md-5 text-white offset-lg-1">
                                                <p className="mb-0">
                                                    Once your crops are ready for harvest, GrocKo facilitates seamless transportation arrangements. Request transportation services to efficiently move your produce, ensuring it reaches the market or processing center in perfect condition.                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab-3">
                                        <div className="row align-items-center my-6 mx-auto">
                                            <div className="col-md-6 col-lg-5 offset-md-1">
                                                <h3 className="fw-bold lh-base text-white">Find the best prices for your crops to maximize your profits.</h3>
                                            </div>
                                            <div className="col-md-5 text-white offset-lg-1">
                                                <p className="mb-0">
                                                    GrocKo helps you connect with buyers to secure the best possible price for your crops. Analyze market trends and negotiate deals that maximize your revenue, ensuring you get the best value for your harvest.                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab-4">
                                        <div className="row align-items-center my-6 mx-auto">
                                            <div className="col-md-6 col-lg-5 offset-md-1">
                                                <h3 className="fw-bold lh-base text-white">Discover and apply for government subsidies to support your farming activities.</h3>
                                            </div>
                                            <div className="col-md-5 text-white offset-lg-1">
                                                <p className="mb-0">
                                                    GrocKo provides easy access to various government subsidy plans designed to support and enhance your farming operations. Stay informed about available subsidies, apply for financial assistance, and take advantage of support programs to boost your farm’s productivity and sustainability.                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section class="py-8" id="testimonial">
                <div class="container-lg">
                    <div class="row flex-center">
                        <div class="col-12 col-lg-10 col-xl-12">
                            <div
                                class="bg-holder"
                                style={{ backgroundImage: 'url(assets/img/illustrations/testimonial-bg.png)', backgroundPosition: 'top left', backgroundSize: '120px 83px' }}
                            ></div>
                            <h6 class="fs-3 fs-lg-4 fw-bold lh-sm">What our users <br />are saying about GrocKo</h6>
                        </div>
                        <div class="carousel slide pt-3" id="carouselExampleDark" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <div class="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                                        <div class="col-md-4 mb-5 mb-md-0">
                                            <div class="card h-100 shadow">
                                                <div class="card-body my-3">
                                                    <div class="align-items-xl-center d-block d-xl-flex px-3">
                                                        <img class="img-fluid me-3 me-md-2 me-lg-3" src="../assets/img/gallery/user-1.png" width="50" alt="" />
                                                        <div class="flex-1 align-items-center pt-2">
                                                            <h5 class="mb-0 fw-bold text-success">Rajesh Patel</h5>
                                                            <p class="fw-normal text-black">Farmer</p>
                                                        </div>
                                                    </div>
                                                    <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;GrocKo has been a game-changer for my farming business. The tools for seed selection and crop management have greatly enhanced my efficiency and yield."</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-5 mb-md-0">
                                            <div class="card h-100 shadow">
                                                <div class="card-body my-3">
                                                    <div class="align-items-xl-center d-block d-xl-flex px-3">
                                                        <img class="img-fluid me-3 me-md-2 me-lg-3" src="../assets/img/gallery/user-2.png" width="50" alt="" />
                                                        <div class="flex-1 align-items-center pt-2">
                                                            <h5 class="mb-0 fw-bold text-success">Sita Desai</h5>
                                                            <p class="fw-normal text-black">Agriculture Enthusiast</p>
                                                        </div>
                                                    </div>
                                                    <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;The features GrocKo offers for monitoring crop health and market prices have been invaluable. It has simplified many aspects of farming and made it easier to make informed decisions."</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-5 mb-md-0">
                                            <div class="card h-100 shadow">
                                                <div class="card-body my-3">
                                                    <div class="align-items-xl-center d-block d-xl-flex px-3">
                                                        <img class="img-fluid me-3 me-md-2 me-lg-3" src="../assets/img/gallery/user-3.png" width="50" alt="" />
                                                        <div class="flex-1 align-items-center pt-2">
                                                            <h5 class="mb-0 fw-bold text-success">Vikram Chauhan</h5>
                                                            <p class="fw-normal text-black">Sustainable Farming Advocate</p>
                                                        </div>
                                                    </div>
                                                    <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;The integration of real-time data and advanced analytics in GrocKo has significantly improved my farm's sustainability and profitability. It's an essential tool for any modern farmer."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <div class="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                                        <div class="col-md-4 mb-5 mb-md-0">
                                            <div class="card h-100 shadow">
                                                <div class="card-body my-3">
                                                    <div class="align-items-xl-center d-block d-xl-flex px-3">
                                                        <img class="img-fluid me-3 me-md-2 me-lg-3" src="../assets/img/gallery/user-1.png" width="50" alt="" />
                                                        <div class="flex-1 align-items-center pt-2">
                                                            <h5 class="mb-0 fw-bold text-success">Rajesh Patel</h5>
                                                            <p class="fw-normal text-black">Farmer</p>
                                                        </div>
                                                    </div>
                                                    <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;GrocKo has been a great tool for managing my farm. The insights and tools available have helped me increase my productivity and connect with better vendors. Highly recommended!"</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-5 mb-md-0">
                                            <div class="card h-100 shadow">
                                                <div class="card-body my-3">
                                                    <div class="align-items-xl-center d-block d-xl-flex px-3">
                                                        <img class="img-fluid me-3 me-md-2 me-lg-3" src="../assets/img/gallery/user-2.png" width="50" alt="" />
                                                        <div class="flex-1 align-items-center pt-2">
                                                            <h5 class="mb-0 fw-bold text-success">Sita Desai</h5>
                                                            <p class="fw-normal text-black">Agriculture Enthusiast</p>
                                                        </div>
                                                    </div>
                                                    <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;With GrocKo, I’ve been able to better track market trends and get timely advice on crop management. It’s a fantastic platform for anyone serious about modern farming practices."</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-5 mb-md-0">
                                            <div class="card h-100 shadow">
                                                <div class="card-body my-3">
                                                    <div class="align-items-xl-center d-block d-xl-flex px-3">
                                                        <img class="img-fluid me-3 me-md-2 me-lg-3" src="../assets/img/gallery/user-3.png" width="50" alt="" />
                                                        <div class="flex-1 align-items-center pt-2">
                                                            <h5 class="mb-0 fw-bold text-success">Vikram Chauhan</h5>
                                                            <p class="fw-normal text-black">Sustainable Farming Advocate</p>
                                                        </div>
                                                    </div>
                                                    <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;GrocKo's approach to integrating technology with farming has been a breakthrough. The platform’s user-friendly design and detailed analytics have helped me optimize my operations effectively."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row px-3 px-sm-6 px-md-0 px-lg-5 px-xl-4">
                                <div class="col-12 position-relative">
                                    <a class="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </a>
                                    <a class="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default mainContent;
