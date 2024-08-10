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
                                        <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="assets/img/icons/growth.svg" height="60" alt="" />
                                            <div className="card-body">
                                                <h6 className="fw-bold fs-1 heading-color">Expand Your Business</h6>
                                                <p className="mt-3 mb-md-0 mb-lg-2">Harness the potential of agriculture by investing in innovative projects that promote growth and sustainability in the farming sector.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                        <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="assets/img/icons/planting.svg" height="60" alt="" />
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
            <section className="py-5" id="invest">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 mb-3">
                            <div className="row">
                                <div className="col-lg-9 mb-3">
                                    <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Invest at Your Pace</h5>
                                    <p className="mb-5">With GrocKo, you can choose from a range of investment options that align with your goals, from short-term yields to long-term growth.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="card text-white">
                                        <img className="card-img" src="assets/img/gallery/short-terms.png" alt="..." />
                                        <div className="card-img-overlay d-flex flex-column justify-content-center px-5 px-md-3 px-lg-5 bg-dark-gradient">
                                            <h6 className="text-success pt-2">HARVEST SOON</h6>
                                            <hr className="text-white" style={{ height: "0.12rem", width: "2.813rem" }} />
                                            <div className="pt-lg-3">
                                                <h6 className="fw-bold text-white fs-1 fs-md-2 fs-lg-3 w-xxl-50">Short-Term Investments</h6>
                                                <p className="w-xxl-75">Invest in farms that will be ready for harvest in 3-18 months, providing quick returns on your investment.</p>
                                                <button className="btn btn-lg btn-light text-success" type="button">Browse Farms</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="card text-white">
                                        <img className="card-img" src="assets/img/gallery/fully-funded.png" alt="..." />
                                        <div className="card-img-overlay d-flex flex-column justify-content-center px-5 px-md-3 px-lg-5 bg-light-gradient">
                                            <h6 className="text-success pt-2">FUTURE GROWTH</h6>
                                            <hr className="text-white" style={{ height: "0.12rem", width: "2.813rem" }} />
                                            <div className="pt-lg-3">
                                                <h6 className="fw-bold text-white fs-1 fs-md-2 fs-lg-3 w-xxl-50">Long-Term Investments</h6>
                                                <p className="w-xxl-75">Consider farms that offer long-term investment opportunities for sustained growth and impact.</p>
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
                <div className="bg-holder" style={{ backgroundImage: "url(assets/img/illustrations/how-it-works.png)", backgroundPosition: "center bottom", backgroundSize: "cover" }}></div>
                <div className="container-lg">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-9 col-xl-5 text-center pt-8">
                            <h5 className="fw-bold fs-3 fs-xxl-5 lh-sm mb-3 text-white">How GrocKo Works</h5>
                            <p className="mb-5 text-white">Choose from a variety of agricultural projects to invest in, and be part of a community that values sustainability, innovation, and growth.</p>
                        </div>
                        <div className="col-sm-9 col-md-12 col-xxl-9">
                            <div className="theme-tab">
                                <ul className="nav justify-content-between">
                                    <li className="nav-item" role="presentation"><a className="nav-link active fw-semi-bold" href="#tab1" data-bs-toggle="tab" data-bs-target="#tab1" id="tab-1"><span className="nav-item-circle-parent"><span className="nav-item-circle">1</span></span><span className="d-none d-md-block mt-3">Choose Project</span></a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link fw-semi-bold" href="#tab2" data-bs-toggle="tab" data-bs-target="#tab2" id="tab-2"><span className="nav-item-circle-parent"><span className="nav-item-circle">2</span></span><span className="d-none d-md-block mt-3">Invest</span></a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link fw-semi-bold" href="#tab3" data-bs-toggle="tab" data-bs-target="#tab3" id="tab-3"><span className="nav-item-circle-parent"><span className="nav-item-circle">3</span></span><span className="d-none d-md-block mt-3">Monitor</span></a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link fw-semi-bold" href="#tab4" data-bs-toggle="tab" data-bs-target="#tab4" id="tab-4"><span className="nav-item-circle-parent"><span className="nav-item-circle">4</span></span><span className="d-none d-md-block mt-3">Harvest</span></a></li>
                                </ul>
                                <div className="tab-content mt-5">
                                    <div className="tab-pane active" role="tabpanel" id="tab1">
                                        <div className="row">
                                            <div className="col-lg-6 text-center text-lg-start"><img className="img-fluid mb-4 mb-lg-0" src="assets/img/gallery/choose-project.png" alt="" /></div>
                                            <div className="col-lg-6">
                                                <h5 className="fw-bold fs-1 heading-color">Step 1: Choose a Project</h5>
                                                <p className="my-3 pe-xl-5">Browse a diverse range of agricultural projects listed on GrocKo, and select the ones that align with your investment goals. Each project is thoroughly vetted for quality and potential.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" role="tabpanel" id="tab2">
                                        <div className="row">
                                            <div className="col-lg-6 text-center text-lg-start"><img className="img-fluid mb-4 mb-lg-0" src="assets/img/gallery/invest.png" alt="" /></div>
                                            <div className="col-lg-6">
                                                <h5 className="fw-bold fs-1 heading-color">Step 2: Make Your Investment</h5>
                                                <p className="my-3 pe-xl-5">Once you've chosen a project, decide how much you want to invest. You can fund a portion of a project or fully back a farmer’s initiative, and track your contributions through our platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" role="tabpanel" id="tab3">
                                        <div className="row">
                                            <div className="col-lg-6 text-center text-lg-start"><img className="img-fluid mb-4 mb-lg-0" src="assets/img/gallery/monitor.png" alt="" /></div>
                                            <div className="col-lg-6">
                                                <h5 className="fw-bold fs-1 heading-color">Step 3: Monitor Progress</h5>
                                                <p className="my-3 pe-xl-5">Stay updated with real-time insights and reports on the progress of your investments. GrocKo ensures transparency by providing regular updates from farmers and agronomists.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" role="tabpanel" id="tab4">
                                        <div className="row">
                                            <div className="col-lg-6 text-center text-lg-start"><img className="img-fluid mb-4 mb-lg-0" src="assets/img/gallery/harvest.png" alt="" /></div>
                                            <div className="col-lg-6">
                                                <h5 className="fw-bold fs-1 heading-color">Step 4: Harvest & Reap Rewards</h5>
                                                <p className="my-3 pe-xl-5">When the project reaches its harvest stage, your investment begins to yield returns. Depending on the project, you may receive produce, profit, or both. It's your reward for supporting sustainable agriculture.</p>
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
            <section className="py-8" id="testimonials">
                <div className="container-lg">
                    <div className="row flex-center">
                        <div className="col-xl-7 col-lg-9 text-center">
                            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">What Our Investors Say</h5>
                        </div>
                    </div>
                    <div className="row flex-center">
                        <div className="col-xxl-9">
                            <div className="carousel slide pt-6" id="carouselExampleDark" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-lg-7 col-xl-8">
                                                <div className="row flex-center">
                                                    <div className="col-4 col-sm-auto"><img className="img-fluid rounded-circle" src="assets/img/gallery/testimonial1.png" width="100" alt="" /></div>
                                                    <div className="col">
                                                        <h6 className="text-primary mb-0 mt-3 mt-sm-0">Rajesh Patel</h6>
                                                        <p className="fs-0 fw-normal text-600 mb-0">Investor & Agripreneur</p>
                                                        <p className="mt-2">"GrocKo has revolutionized the way I approach agriculture investments. The platform's transparency and the ease of connecting with projects across the country have made me a loyal investor."</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-lg-7 col-xl-8">
                                                <div className="row flex-center">
                                                    <div className="col-4 col-sm-auto"><img className="img-fluid rounded-circle" src="assets/img/gallery/testimonial2.png" width="100" alt="" /></div>
                                                    <div className="col">
                                                        <h6 className="text-primary mb-0 mt-3 mt-sm-0">Sita Desai</h6>
                                                        <p className="fs-0 fw-normal text-600 mb-0">Environmental Advocate</p>
                                                        <p className="mt-2">"Investing in GrocKo's projects has allowed me to support sustainable farming practices while earning a return. It's a win-win situation for both my portfolio and the planet."</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-lg-7 col-xl-8">
                                                <div className="row flex-center">
                                                    <div className="col-4 col-sm-auto"><img className="img-fluid rounded-circle" src="assets/img/gallery/testimonial3.png" width="100" alt="" /></div>
                                                    <div className="col">
                                                        <h6 className="text-primary mb-0 mt-3 mt-sm-0">Vikram Chauhan</h6>
                                                        <p className="fs-0 fw-normal text-600 mb-0">Tech Entrepreneur</p>
                                                        <p className="mt-2">"GrocKo has made agricultural investment accessible and profitable. The projects are well-vetted, and the returns have exceeded my expectations. I highly recommend it to anyone interested in this sector."</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></a>
                                <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default mainContent;
