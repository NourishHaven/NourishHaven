import React from "react";
import "../Styles/Testimonial.css";
import avatar1 from "../assets/Avatar1.png";  
import avatar2 from "../assets/Avatar2.png";  
import avatar3 from "../assets/Avatar3.png";  

const Testimonials = () => {
  return (
    <div className="container-fluid mx-0 py-5 TestimonialSection">
      <div className="container">
        <div className="px-4 py-5 text-center">
          <h5 className="display-5 fw-bold fs-1 text-body-emphasis mb-3 trendHead">
            Customer Testimonials
          </h5>
          <div className="">
            <p className="leadText mb-4">
              Explore the unspoken tales of approval and satisfaction from our
              valued clients, encapsulating the essence of trust and
              satisfaction.
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
              <div className="col">
                <div className="card h-100  p-5">
                  <div className="card-body">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={avatar1}
                          alt={"Avatar"}
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="CardTitle">Ana Rhodes</h5>
                          <p className="CardText2 mb-2">Nutritionist</p>
                          <p className="social">
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="CardText">
                      Lorem ipsum dolor sit amet consectetur. Gravida in nulla
                      non auctor neque quis vestibulum egestas. Et non enim
                      lobortis purus mattis blandit mattis quisque netus. Nunc
                      nunc facilisi hendrerit montes accumsan sed. Tincidunt
                      tincidunt viverra mi quam donec pulvinar orci.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100  p-5">
                  <div className="card-body">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={avatar2}
                          alt={"Avatar"}
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="CardTitle">Sarah Reece</h5>
                          <p className="CardText2 mb-2">Chef</p>
                          <p className="social">
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="CardText">
                      Lorem ipsum dolor sit amet consectetur. Gravida in nulla
                      non auctor neque quis vestibulum egestas. Et non enim
                      lobortis purus mattis blandit mattis quisque netus. Nunc
                      nunc facilisi hendrerit montes accumsan sed. Tincidunt
                      tincidunt viverra mi quam donec pulvinar orci.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100  p-5">
                  <div className="card-body">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={avatar3}
                          alt={"avatar"}
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="CardTitle">David Gates</h5>
                          <p className="CardText2 mb-2">Medical Doctor</p>
                          <p className="social">
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star-fill pe-1"></i>
                            <i class="bi bi-star"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="CardText">
                      Lorem ipsum dolor sit amet consectetur. Gravida in nulla
                      non auctor neque quis vestibulum egestas. Et non enim
                      lobortis purus mattis blandit mattis quisque netus. Nunc
                      nunc facilisi hendrerit montes accumsan sed. Tincidunt
                      tincidunt viverra mi quam donec pulvinar orci.
                    </p>
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

export default Testimonials;
