import React from "react";
import "../Styles/Trending.css";
import product1 from "../assets/pngwingOrange.png";
import product2 from "../assets/pngwingOnions.png";
import product3 from "../assets/pngwingBroccolli.png";
import product4 from "../assets/pngwingPotato.png";
import product5 from "../assets/pngwingCabbage.png";
import product6 from "../assets/pngwingTomato.png";
import product7 from "../assets/pngwingBanana.png";
import product8 from "../assets/pngwingStrawberry.png";

const Trending = () => {
  return (
    <div>
      <div className="container-fluid mx-o chooseSection">
        <div className="container">
          <div className="px-4 py-5 text-center">
            <h5 className="display-5 fw-bold fs-1 text-body-emphasis trendHead">
              Trending <span className="span-txt">Products</span>
            </h5>
            <p className="leadText text-center mb-4">
              From Buzz to Brilliance: Trending Products that are stealing the
              spotlight. Elevate your Everyday with the Best in Demand.
            </p>
            <div className="row row-cols-1 row-cols-md-4 g-4 my-3">
              <div className="col">
                <div className="card h-100 py-4 px-2">
                  <img
                    src={product1}
                    alt={"Product"}
                    className="mx-auto d-block Card_image"
                  />
                  <div className="card-body">
                    <h5 className="CardTitle">Juicy Orange Pack</h5>
                    <p className="social">
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star"></i>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="CardText fw-bold mb-2">N5000</p>
                      </div>
                      <div>
                        <p className="CardText fw-bold mb-2">
                          Add to cart &gt;{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 py-4 px-2">
                  <img
                    src={product2}
                    alt={"Product"}
                    className="mx-auto d-block Card_image"
                  />
                  <div className="card-body">
                    <h5 className="CardTitle">Fresh Onions Pack</h5>
                    <p className="social">
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star"></i>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="CardText fw-bold mb-2">N5000</p>
                      </div>
                      <div>
                        <p className="CardText fw-bold mb-2">
                          Add to cart &gt;{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 py-4 px-2">
                  <img
                    src={product3}
                    alt={"Product"}
                    className="mx-auto d-block Card_image"
                  />
                  <div className="card-body">
                    <h5 className="CardTitle">Fresh Broccoli Pack</h5>
                    <p className="social">
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star"></i>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="CardText fw-bold mb-2">N5000</p>
                      </div>
                      <div>
                        <p className="CardText fw-bold mb-2">
                          Add to cart &gt;{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 py-4 px-2">
                  <img
                    src={product4}
                    alt={"Product"}
                    className="mx-auto d-block Card_image"
                  />
                  <div className="card-body">
                    <h5 className="CardTitle">Potato 2Kg</h5>
                    <p className="social">
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star"></i>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="CardText fw-bold mb-2">N5000</p>
                      </div>
                      <div>
                        <p className="CardText fw-bold mb-2">
                          Add to cart &gt;{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 my-3">
              <div className="col">
                <div className="card h-100 py-4 px-2">
                  <img
                    src={product5}
                    alt={"Product"}
                    className="mx-auto d-block Card_image"
                  />
                  <div className="card-body">
                    <h5 className="CardTitle">Cabbage 1 Piece</h5>
                    <p className="social">
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star"></i>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="CardText fw-bold mb-2">N5000</p>
                      </div>
                      <div>
                        <p className="CardText fw-bold mb-2">
                          Add to cart &gt;{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 py-4 px-2">
                  <img
                    src={product6}
                    alt={"Product"}
                    className="mx-auto d-block Card_image"
                  />
                  <div className="card-body">
                    <h5 className="CardTitle">Fresh Tomato Pack</h5>
                    <p className="social">
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star"></i>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="CardText fw-bold mb-2">N5000</p>
                      </div>
                      <div>
                        <p className="CardText fw-bold mb-2">
                          Add to cart &gt;{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 py-4 px-2">
                  <img
                    src={product7}
                    alt={"Product"}
                    className="mx-auto d-block Card_image"
                  />
                  <div className="card-body">
                    <h5 className="CardTitle">Fresh Plantain Bunch</h5>
                    <p className="social">
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star"></i>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="CardText fw-bold mb-2">N5000</p>
                      </div>
                      <div>
                        <p className="CardText fw-bold mb-2">
                          Add to cart &gt;{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 py-4 px-2">
                  <img
                    src={product8}
                    alt={"Product"}
                    className="mx-auto d-block Card_image"
                  />
                  <div className="card-body">
                    <h5 className="CardTitle">Fresh Strawberry Pack</h5>
                    <p className="social">
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star-fill pe-1"></i>
                      <i class="bi bi-star"></i>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="CardText fw-bold mb-2">N5000</p>
                      </div>
                      <div>
                        <p className="CardText fw-bold mb-2">
                          Add to cart &gt;{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
