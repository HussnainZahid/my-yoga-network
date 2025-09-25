"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero5() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout>
        {/*Hero 5*/}
        <div className="section-hero-5 position-relative">
          <div
            className="position-relative py-188 img-pull"
            style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png)` }}
          >
            <div className="container position-relative z-2">
              <div className="row">
                <div className="col-lg-6">
                  <div className="backdrop-filter p-8 position-relative rounded-3">
                    <div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
                      <span className="tag-spacing fs-6 text-primary">
                        🚀 My Yoga Network
                      </span>
                    </div>
                    <h3 className="ds-3 my-3">
                      Elevating Student Wellness with Yoga
                      <span className="fw-regular">
                        <br />
                        with
                        <img
                          className="alltuchtopdown img-fluid filter-invert"
                          src="/assets/imgs/hero-5/icon-1.svg"
                          alt="Yoga icon"
                        />
                        Tailored Wellness Programs
                      </span>
                    </h3>
                    <p className="fs-5 text-900">
                      Your trusted partner for enhancing LBUSD after-school
                      programs with evidence-based, engaging wellness
                      activities.
                    </p>
                    <div className="d-flex flex-column flex-md-row align-items-center">
                      <Link href="#" className="btn btn-gradient rounded-4">
                        Book a Consultation
                        <svg
                          className="ms-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17.25 15.25V6.75H8.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 7L6.75 17.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        onClick={() => setOpen(true)}
                        scroll={false}
                        className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0"
                      >
                        <span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              className="stroke-dark"
                              d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z"
                              stroke="#111827"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="fw-bold fs-7 text-900">
                          Video Guide
                        </span>
                      </Link>
                    </div>
                    <div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
                      <div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
                        <p className="text-900 mb-0 fs-18px fw-bold">
                          20+ Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 start-0 z-0">
              <img
                src="/assets/imgs/hero-5/img-bg-line.png"
                alt="Decorative line"
              />
            </div>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="3tD6Q8s4oH8"
          onClose={() => setOpen(false)}
        />
        {/*Service-1*/}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  What we offer
                </span>
              </div>
              <h3
                className="ds-3 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                Our Services
              </h3>
              <p data-aos="fade-zoom-in" data-aos-delay={100}>
                Supporting Every Stage of Your Child’s Journey with Care
              </p>
            </div>
            <div className="row mt-6 position-relative">
              <div className="col-lg-4">
                <div
                  className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  <div className="card-service bg-white p-6 border rounded-4">
                    <img
                      src="/assets/imgs/service-1/icon-1.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">After-School Yoga</h6>
                    <p className="mb-6">
                      A fun and enriching after-school program where kids build
                      strength, flexibility, focus, and confidence through
                      playful yoga and mindfulness activities.
                    </p>

                    <Link
                      href="page-after-school"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                ></div>
              </div>
              <div className="col-lg-4">
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-3.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Kids Yoga at Studio</h6>
                    <p className="mb-6">
                      Engaging studio classes designed to help children improve
                      their balance, coordination, and emotional well-being in a
                      supportive and creative environment.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                ></div>
              </div>
              <div className="col-lg-4">
                <div
                  className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  <div
                    className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                    data-aos="fade-zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="card-service bg-white p-6 border rounded-3">
                      <img
                        src="/assets/imgs/service-1/icon-6.svg"
                        alt="infinia"
                      />
                      <h6 className="my-3">Infant Massage</h6>
                      <p className="mb-6">
                        Learn the techniques and benefits that gentle,
                        intentional touch can have on your baby’s health and
                        well-being.
                      </p>
                      <Link
                        href="#"
                        className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                      >
                        <svg
                          className="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_226_5470)">
                            <path
                              className="fill-dark"
                              d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                              fill="#111827"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={16} height={16} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          className="arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={10}
                          viewBox="0 0 18 10"
                          fill="none"
                        >
                          <path
                            className="fill-dark"
                            d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                            fill="#111827"
                          />
                        </svg>
                        <span className="fw-bold fs-7 text-900">
                          Learm More
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-50 start-50 translate-middle z-0">
                <img src="/assets/imgs/service-1/img-bg.png" alt="infinia" />
              </div>
            </div>
          </div>
        </section>
        {/* Team 1 */}
        <section className="section-team-1 section-padding position-relative overflow-hidden">
          <div className="container">
            <div className="row position-relative z-1">
              <div className="text-center">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                ></div>
                <h3
                  className="ds-3 my-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Meet Our Teachers
                </h3>
                <p
                  className="fs-5"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Our certified instructors deliver tailored, expert-led yoga
                  sessions with dedication and precision.{" "}
                </p>
              </div>
            </div>
            <div className="row mt-6">
              {/* prettier-ignore */}
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img className="img-fluid w-100" src="/assets/imgs/team-1/teacher-1.jpg" alt="my-yoga-network" />
                </div>
              </div>
            </div>
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                <div className="position-relative d-inline-block z-1">
                  <div className="zoom-img rounded-3">
                    <img
                      className="img-fluid w-100"
                      src="/assets/imgs/team-1/teacher-2.jpg"
                      alt="my-yoga-network"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                <div className="position-relative d-inline-block z-1">
                  <div className="zoom-img rounded-3">
                    <img
                      className="img-fluid w-100"
                      src="/assets/imgs/team-1/teacher-3.jpg"
                      alt="my-yoga-network"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={400}
              >
                <div className="position-relative d-inline-block z-1">
                  <div className="zoom-img rounded-3">
                    <img
                      className="img-fluid w-100"
                      src="/assets/imgs/team-1/teacher-4.jpg"
                      alt="my-yoga-network"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              ></div>
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              ></div>
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              ></div>
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={400}
              ></div>
            </div>
          </div>
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img src="/assets/imgs/team-1/bg-line.png" alt="my-yoga-network" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
        </section>
      </Layout>
    </>
  );
}
