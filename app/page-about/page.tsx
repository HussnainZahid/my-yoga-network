"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CountUp from "react-countup";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";

export default function PageAbout() {
  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <>
      <Layout>
        <section className="section-page-header py-10 fix position-relative">
          <div className="container position-relative z-1">
            <div className="text-start">
              <h3>About Us</h3>
              <div className="d-flex">
                <Link href="#">
                  <p className="mb-0 text-900">Home</p>
                </Link>
                <svg
                  className="mx-3 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={8}
                  height={13}
                  viewBox="0 0 8 13"
                  fill="none"
                >
                  <path
                    className="stroke-dark"
                    d="M1 1.5L6.5 6.75L1 12"
                    stroke="#111827"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-primary mb-0">About Us</p>
              </div>
            </div>
          </div>
          <img
            className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
            src="/assets/imgs/page-header/bg-line.png"
            alt="infinia"
          />
          <div className="bouncing-blobs-container">
            <div className="bouncing-blobs-glass" />
            <div className="bouncing-blobs">
              <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
              <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
            </div>
          </div>
        </section>
        {/*Hero 3 */}
        <section className="section-hero-3 position-relative fix section-padding">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-lg-7 position-relative z-1 mb-lg-0 pb-10 mb-">
                <div className="text-start mb-lg-0 mb-5">
                  <div className="border-linear-1 rounded-pill d-inline-block mb-3"></div>
                  <div className="d-flex align-items-center">
                    <h1 className="ds-1 my-3 me-4 lh-1">Wellness</h1>
                  </div>
                  <h1 className="ds-1 lh-1 m-0">
                    Redefined with Authentic Yoga.
                  </h1>
                  <p className="fs-5 text-900 my-6">
                    <span>
                      Discover authentic yoga programs and <br /> holistic
                      wellness benefits for your people.
                    </span>
                  </p>
                  <Link href="#" className="btn btn-gradient">
                    Get Free Quote
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-white"
                        d="M17.25 15.25V6.75H8.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="stroke-white"
                        d="M17 7L6.75 17.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <div className="mt-6 pt-4 max-w-300px">
                    <p className="text-uppercase mb-2">Trusted by the best</p>
                    <div className="carouselTicker carouselTicker-right">
                      <ul className="carouselTicker__list">
                        <Marquee direction="right">
                          <li className="carouselTicker__item mx-2">
                            <img
                              className="filter-invert rounded-4"
                              src="/assets/imgs/hero-3/logo15.png"
                              alt="infinia"
                            />
                          </li>
                          <li className="carouselTicker__item mx-2">
                            <img
                              className="rounded-4"
                              src="/assets/imgs/hero-3/logo7.png"
                              alt="infinia"
                            />
                          </li>
                          <li className="carouselTicker__item mx-2">
                            <img
                              className="rounded-4"
                              src="/assets/imgs/hero-3/logo14.png"
                              alt="infinia"
                            />
                          </li>
                        </Marquee>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 position-xl-absolute mb-lg-10 top-50 end-0 translate-middle-lg-y z-0">
                <div className="row">
                  <div className="col-6 align-self-end">
                    <div className="border-5 border-white border rounded-4  mb-4 d-block d-xl-none">
                      <img
                        className="rounded-4"
                        src="/assets/imgs/hero-3/img-4.png"
                        alt="infinia"
                      />
                    </div>
                    <div className="border-5 border-white border rounded-4">
                      <img
                        className="rounded-4"
                        src="/assets/imgs/hero-3/img-3.png"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <div className="col-6 align-self-end">
                    <div className="border-5 border-white border rounded-4 mb-4">
                      <img
                        className="rounded-4"
                        src="/assets/imgs/hero-3/img-1.png"
                        alt="infinia"
                      />
                    </div>
                    <div className="border-5 border-white border rounded-4">
                      <img
                        className="rounded-4"
                        src="/assets/imgs/hero-3/img-2.png"
                        alt="infinia"
                      />
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle pb-10 pe-10">
                  <img
                    className="rotateme"
                    src="/assets/imgs/hero-3/star-rotate.png"
                    alt="infinia"
                  />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="ellipse-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*cta 11 */}
        <section className="section-cta-11 position-relative section-padding fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="d-flex justify-content-md-between justify-content-center position-relative">
                  <div className="d-flex flex-column align-items-end d-none d-md-flex">
                    <div className="zoom-img rounded-3">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/cta-11/img-1.png"
                        alt=""
                      />
                    </div>
                    <div className="zoom-img rounded-3 mt-2">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/cta-11/img-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mt-5">
                      <div className="alltuchtopdown tag-year backdrop-filter bg-success rounded-4 px-5 py-4 text-center z-1">
                        <h5 className="count fw-bold mb-2 text-900 text-nowrap">
                          <span className="odometer" />
                          <CountUp enableScrollSpy={true} end={25} />
                          M+
                        </h5>
                        <p className="text-600-keep text-nowrap mb-0">
                          Transaction <br />
                          Completed
                        </p>
                      </div>
                      <div className="alltuchtopdown tag-year backdrop-filter bg-primary rounded-4 px-5 py-4 text-center z-1">
                        <h5 className="count fw-bold mb-2 text-white text-nowrap">
                          <span className="odometer" />
                          <CountUp enableScrollSpy={true} end={12} />
                          k+
                        </h5>
                        <p className="text-white text-nowrap mb-0">
                          Transaction <br />
                          Completed
                        </p>
                      </div>
                    </div>
                    <div className="zoom-img rounded-3">
                      <img
                        className="rounded-3 mw-lg-310"
                        src="/assets/imgs/cta-11/img-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="position-absolute bottom-0 start-0 flickering ms-6 mb-4 z-0 d-none d-md-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={86}
                      height={86}
                      viewBox="0 0 86 86"
                      fill="none"
                    >
                      <path
                        d="M0.235352 64.6171C23.6511 58.8609 27.3738 62.5843 21.6183 86C31.9666 62.5843 45.1375 62.5843 55.4859 86C49.7296 62.5843 53.4531 58.8615 76.8688 64.6171C53.4531 54.2688 53.4531 41.0978 76.8688 30.7495C53.4531 36.5057 49.7303 32.7823 55.4859 9.36658C45.1375 32.7823 31.9666 32.7823 21.6183 9.36658C27.3745 32.7823 23.6511 36.5051 0.235352 30.7495C23.6511 41.0978 23.6511 54.2688 0.235352 64.6171Z"
                        fill="#ffb703"
                      />
                      <path
                        d="M85.7917 4.74567C80.5949 6.02293 79.7687 5.19679 81.046 0C78.7493 5.19679 75.8266 5.19679 73.5298 0C74.8071 5.19679 73.981 6.02293 68.7842 4.74567C73.981 7.0424 73.981 9.96508 68.7842 12.2618C73.981 10.9846 74.8071 11.8107 73.5298 17.0075C75.8266 11.8107 78.7493 11.8107 81.046 17.0075C79.7687 11.8107 80.5949 10.9846 85.7917 12.2618C80.5949 9.96508 80.5949 7.0424 85.7917 4.74567Z"
                        fill="#ffb703"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ps-lg-8 mt-lg-0 mt-5">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Our Mission
                  </span>
                </div>
                <h5 className="ds-5 my-3">
                  Bridging Wellness and Community Through Yoga
                </h5>
                <p className="fs-5 text-500 mb-8">
                  We connect skilled yoga instructors with individuals and
                  organizations seeking to integrate yoga into their wellness
                  practices. Our mission is to promote health, balance, and
                  well-being through reliable, customized programs tailored to
                  diverse needs and environments.
                </p>
                <div className="d-flex flex-column flex-md-row">
                  <div className="evaluate-1 me-2">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="/assets/imgs/cta-11/avatar-1.png"
                        alt=""
                      />
                      <div className="d-flex flex-column ps-3">
                        <div className="d-flex">
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                        </div>
                        <h6 className="mt-2 mb-0 fs-6">John Smith</h6>
                      </div>
                    </div>
                    <p className="text-500 mt-3">
                      “I highly recommend Yoga Haven for anyone looking to
                      improve their physical and mental health. The instructors
                      are knowledgeable and supportive, and the classes are
                      engaging and relaxing. It was a great experience overall!”
                    </p>
                  </div>
                  <div className="evaluate-2 ms-2 mt-md-0 mt-5">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="/assets/imgs/cta-11/avatar-2.png"
                        alt=""
                      />
                      <div className="d-flex flex-column ps-3">
                        <div className="d-flex">
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="infinia"
                          />
                        </div>
                        <h6 className="mt-2 mb-0 fs-6">Azumi Rose</h6>
                      </div>
                    </div>
                    <p className="text-500 mt-3">
                      “I was skeptical about trying yoga, but Yoga Haven
                      transformed my life. The classes are challenging but
                      rewarding, and the instructors are supportive and
                      encouraging. It was a transformative experience that has
                      changed my life forever!”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*cta 12 */}
        <section className="section-cta-12 bg-3 position-relative section-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Our Vision
                  </span>
                </div>
                <h5 className="ds-5 my-3">
                  A Journey of <br className="d-none d-md-inline" />
                  Wellness and Growth
                </h5>
                <p className="fs-5 text-500 mb-8">
                  To be the leading network that transforms wellness experiences
                  by integrating professional yoga instruction into hospitality,
                  healthcare, and personal health practices, fostering a
                  healthier and more balanced world.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <Link href="#" className="btn btn-gradient">
                    Get Free Quote
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-white"
                        d="M17.25 15.25V6.75H8.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="stroke-white"
                        d="M17 7L6.75 17.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-8">
                <p className="fs-5 text-900 mb-5">
                  <span className="fw-bold">My Yoga Network</span>was founded
                  with a passion for wellness and a vision to make yoga
                  accessible to organizations and individuals worldwide. From
                  our humble beginnings, we have grown into a trusted network
                  connecting skilled yoga instructors with diverse communities,
                  workplaces, and wellness programs. Over the years,{" "}
                  <span className="fw-bold">
                    we have successfully delivered tailored yoga sessions
                  </span>
                  , each one a testament to our commitment, expertise, and
                  holistic approach. Our journey has been defined by{" "}
                  <span className="fw-bold">
                    continuous growth, meaningful partnerships, and a focus on
                    well-being,
                  </span>{" "}
                  and we are proud of the positive impact we have created along
                  the way.
                </p>
                <p className="fs-5 text-900 mb-5">
                  Thank you for considering{" "}
                  <span className="fw-bold">My Yoga Network</span> as your
                  wellness partner. We look forward to supporting your{" "}
                  <span className="fw-bold">
                    health goals and fostering a balanced lifestyle
                  </span>{" "}
                  for you, your team, or your community.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle border border-4 border-primary-light"
                    src="/assets/imgs/cta-12/ram-bhakt.jpg"
                    alt=""
                  />
                  <div className="ms-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/cta-12/name.svg"
                      alt=""
                    />
                    <h6 className="mt-1 mb-0">
                      Ram Bhakt <span className="text-500 fs-6">, CEO</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Team 2*/}
        <section className="section-team-2 section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-start mb-lg-0 mb-lg-5 mb-10">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                      OUR TEAM MEMBERS
                    </span>
                  </div>
                  <h3 className="ds-3 my-3">Meet Our Team</h3>
                  <p className="fs-5 mb-0">
                    Meet the talented and passionate team members who drive our{" "}
                    <br />
                    company forward every day.
                  </p>
                  <div className="d-flex align-items-center mt-8">
                    <img src="/assets/imgs/team-2/contact.svg" alt="infinia" />
                    <div className="ms-3">
                      <p className="text-uppercase fs-7">Contact Us</p>
                      <h5>+1 (888)-960-9240</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div
                    className="col-md-6 mb-lg-4 mb-7 text-center"
                    data-aos="fade-zoom-in"
                    data-aos-delay={100}
                  >
                    <div className="position-relative d-inline-block z-1">
                      <div className="zoom-img rounded-3">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team-2/ram-bhakt.jpg"
                          alt="infinia"
                        />
                      </div>
                      <Link
                        href="#"
                        className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                      >
                        <h6>Ram Bhakt</h6>
                        <div className="d-flex">
                          <span className="fs-6 text-600 me-auto">
                            Founder & CEO
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={14}
                            viewBox="0 0 24 14"
                            fill="#ebd85eff"
                          >
                            <path
                              className="fill-primary"
                              d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-md-6 mb-lg-4 mb-7 text-center"
                    data-aos="fade-zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="position-relative d-inline-block z-1">
                      <div className="zoom-img rounded-3">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team-2/jaime-lewis.jpg"
                          alt="infinia"
                        />
                      </div>
                      <Link
                        href="#"
                        className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                      >
                        <h6>Jaime K. Lewis, MD, DipABLM</h6>
                        <div className="d-flex">
                          <span className="fs-6 text-600 me-auto">
                            Advisory Board
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={14}
                            viewBox="0 0 24 14"
                            fill="#ebd85eff"
                          >
                            <path
                              className="fill-primary"
                              d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={0}
              >
                <div className="position-relative d-inline-block z-1">
                  <div className="zoom-img rounded-3">
                    <img
                      className="img-fluid w-100"
                      src="/assets/imgs/team-2/anita-schill.jpg"
                      alt="infinia"
                    />
                  </div>
                  <Link
                    href="#"
                    className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                  >
                    <h6>Anita Schill, PhD, MPH</h6>
                    <div className="d-flex">
                      <span className="fs-6 text-600 me-auto">
                        Advisory Board
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={14}
                        viewBox="0 0 24 14"
                        fill="#ebd85eff"
                      >
                        <path
                          className="fill-primary"
                          d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <div className="position-relative d-inline-block z-1">
                  <div className="zoom-img rounded-3">
                    <img
                      className="img-fluid w-100"
                      src="/assets/imgs/team-2/michelle-carty.jpg"
                      alt="infinia"
                    />
                  </div>
                  <Link
                    href="#"
                    className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                  >
                    <h6>Adhana McCarthy, PA-C</h6>
                    <div className="d-flex">
                      <span className="fs-6 text-600 me-auto">
                        Advisory Board
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={14}
                        viewBox="0 0 24 14"
                        fill="#ebd85eff"
                      >
                        <path
                          className="fill-primary"
                          d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
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
                      src="/assets/imgs/team-2/claudia-cardin-kleffner.jpg"
                      alt="infinia"
                    />
                  </div>
                  <Link
                    href="#"
                    className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                  >
                    <h6>Claudia Cardin-Kleffner, OT, CYT</h6>
                    <div className="d-flex">
                      <span className="fs-6 text-600 me-auto">
                        Advisory Board
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={14}
                        viewBox="0 0 24 14"
                        fill="#ebd85eff"
                      >
                        <path
                          className="fill-primary"
                          d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Static 2*/}
        <section className="section-static-1 position-relative fix z-0 py-8">
          <div className="container">
            <div className="inner">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-auto col-md-12 text-center text-lg-start mb-5 mb-lg-0">
                  <h4 className="mb-0">
                    See why we are <br /> trusted the world over
                  </h4>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <span className="h1 count fw-black text-primary my-0">
                        <span className="odometer" />
                        <CountUp enableScrollSpy={true} end={469} />
                        <span>k</span>
                      </span>
                      <p>New accounts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <span className="h1 count fw-black text-primary my-0">
                        +<span className="odometer" />
                        <CountUp enableScrollSpy={true} end={92} />
                      </span>
                      <p>Finished projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <span className="h1 count fw-black text-primary my-0">
                        +<span className="odometer" />
                        <CountUp enableScrollSpy={true} end={756} />
                      </span>
                      <p>Skilled experts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <span className="h1 count fw-black text-primary my-0">
                        +<span className="odometer" />
                        <CountUp enableScrollSpy={true} end={25} />
                        <span>k</span>
                      </span>
                      <p>Media posts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bouncing-blobs-container">
            <div className="bouncing-blobs-glass fix" />
            <div className="bouncing-blobs">
              <div className="bouncing-blob bouncing-blob--green" />
              <div className="bouncing-blob bouncing-blob--primary" />
              <div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
            </div>
          </div>
        </section>

        {/*Testimonial 3*/}
        <section className="section-testimonial-3 position-relative section-padding fix">
          <div className="container position-relative z-1">
            <div className="row pb-9">
              <div className="col-lg-7 mx-lg-auto">
                <div className="text-center mb-lg-0 mb-5">
                  <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                    <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                      Testimonials
                    </span>
                  </div>
                  <h5 className="ds-5 my-3 fw-regular">
                    What <span className="fw-bold">People Say</span> About{" "}
                    <br />
                    <span className="fw-bold"> Our Company</span>
                  </h5>
                  <p className="fs-5 mb-0 text-900">
                    Access top-tier group mentoring plans and exclusive
                    professional <br className="d-none d-md-block" />
                    benefits for your team. 🔥
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <Swiper
                {...swiperOptions}
                className="swiper slider-1 pt-2 pb-3"
                modules={[Keyboard, Autoplay, Pagination, Navigation]}
              >
                <div className="swiper-wrapper">
                  {/* prettier-ignore */}
                  <SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
													<span className="fs-8">CEO of Tech Innovators Inc</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                      <div className="d-flex align-items-center mb-5">
                        <img
                          className="avatar-lg"
                          src="/assets/imgs/testimonial-1/avatar-3.png"
                          alt="infinia"
                        />
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-2.png"
                              alt="infinia"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-900 border-bottom pb-4 mb-4">
                        The team's dedication and expertise have transformed our
                        business.{" "}
                        <span className="fw-bold">
                          Their innovative solutions and outstanding support
                        </span>{" "}
                        have significantly boosted our productivity and client
                        satisfaction. Allowing us to streamline our processes
                        and focus on what matters most.
                      </p>
                      <div className="d-flex">
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <span className="fs-8 text-600 ms-2">
                          (For services and support)
                        </span>
                      </div>
                      <div className="position-absolute top-0 end-0 m-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={52}
                          height={52}
                          viewBox="0 0 52 52"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_551_13914)">
                            <path
                              d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                              fill="#D1D5DB"
                            />
                            <path
                              d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                              fill="#D1D5DB"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                      <div className="d-flex align-items-center mb-5">
                        <img
                          className="avatar-lg"
                          src="/assets/imgs/testimonial-1/avatar-4.png"
                          alt="infinia"
                        />
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-3.png"
                              alt="infinia"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-900 border-bottom pb-4 mb-4">
                        The team's dedication and expertise have transformed our
                        business.{" "}
                        <span className="fw-bold">
                          Their innovative solutions and outstanding support
                        </span>{" "}
                        have significantly boosted our productivity and client
                        satisfaction. Allowing us to streamline our processes
                        and focus on what matters most.
                      </p>
                      <div className="d-flex">
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <span className="fs-8 text-600 ms-2">
                          (For services and support)
                        </span>
                      </div>
                      <div className="position-absolute top-0 end-0 m-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={52}
                          height={52}
                          viewBox="0 0 52 52"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_551_13914)">
                            <path
                              d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                              fill="#D1D5DB"
                            />
                            <path
                              d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                              fill="#D1D5DB"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                      <div className="d-flex align-items-center mb-5">
                        <img
                          className="avatar-lg"
                          src="/assets/imgs/testimonial-1/avatar-2.png"
                          alt="infinia"
                        />
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">Automated reports</h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-4.png"
                              alt="infinia"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-900 border-bottom pb-4 mb-4">
                        The team's dedication and expertise have transformed our
                        business.{" "}
                        <span className="fw-bold">
                          Their innovative solutions and outstanding support
                        </span>{" "}
                        have significantly boosted our productivity and client
                        satisfaction. Allowing us to streamline our processes
                        and focus on what matters most.
                      </p>
                      <div className="d-flex">
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <span className="fs-8 text-600 ms-2">
                          (For services and support)
                        </span>
                      </div>
                      <div className="position-absolute top-0 end-0 m-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={52}
                          height={52}
                          viewBox="0 0 52 52"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_551_13914)">
                            <path
                              d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                              fill="#D1D5DB"
                            />
                            <path
                              d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                              fill="#D1D5DB"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                      <div className="d-flex align-items-center mb-5">
                        <img
                          className="avatar-lg"
                          src="/assets/imgs/testimonial-1/avatar-1.png"
                          alt="infinia"
                        />
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">
                            Funnel optimization
                          </h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-1.png"
                              alt="infinia"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-900 border-bottom pb-4 mb-4">
                        The team's dedication and expertise have transformed our
                        business.{" "}
                        <span className="fw-bold">
                          Their innovative solutions and outstanding support
                        </span>{" "}
                        have significantly boosted our productivity and client
                        satisfaction. Allowing us to streamline our processes
                        and focus on what matters most.
                      </p>
                      <div className="d-flex">
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <span className="fs-8 text-600 ms-2">
                          (For services and support)
                        </span>
                      </div>
                      <div className="position-absolute top-0 end-0 m-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={52}
                          height={52}
                          viewBox="0 0 52 52"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_551_13914)">
                            <path
                              d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                              fill="#D1D5DB"
                            />
                            <path
                              d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                              fill="#D1D5DB"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                      <div className="d-flex align-items-center mb-5">
                        <img
                          className="avatar-lg"
                          src="/assets/imgs/testimonial-1/avatar-3.png"
                          alt="infinia"
                        />
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">Integrations</h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-2.png"
                              alt="infinia"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-900 border-bottom pb-4 mb-4">
                        The team's dedication and expertise have transformed our
                        business.{" "}
                        <span className="fw-bold">
                          Their innovative solutions and outstanding support
                        </span>{" "}
                        have significantly boosted our productivity and client
                        satisfaction. Allowing us to streamline our processes
                        and focus on what matters most.
                      </p>
                      <div className="d-flex">
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <span className="fs-8 text-600 ms-2">
                          (For services and support)
                        </span>
                      </div>
                      <div className="position-absolute top-0 end-0 m-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={52}
                          height={52}
                          viewBox="0 0 52 52"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_551_13914)">
                            <path
                              d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                              fill="#D1D5DB"
                            />
                            <path
                              d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                              fill="#D1D5DB"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination" />
                <div className="text-center mt-8 position-relative z-3" />
              </Swiper>
            </div>
          </div>
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
        </section>
        {/*Team 1*/}
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
                  Our certified yoga instructors deliver expert, tailored
                  wellness sessions with passion and precision.{" "}
                </p>
              </div>
            </div>
            <div className="row mt-6">
              {/* prettier-ignore */}
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
							<div className="position-relative d-inline-block z-1">
								<div className="zoom-img rounded-3">
									<img className="img-fluid w-100" src="/assets/imgs/team-1/teacher-1.jpg" alt="infinia" />
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
                      alt="infinia"
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
                      alt="infinia"
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
                      alt="infinia"
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
            <img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
        </section>
        {/*Logo Cloud 5*/}
        <section className="section-logo-cloud section-logo-cloud-5 position-relative">
          <div className="container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 pb-lg-0 pb-8">
                  <h4 className="text-nowrap">
                    Delivering Exceptional Yoga <br />
                    & Wellness Services since 2012
                  </h4>
                  <p className="pt-2 pb-4">
                    For over a decade, we’ve been committed to enhancing
                    well-being through expert-led yoga and wellness programs
                    tailored to individuals, organizations, and communities.{" "}
                  </p>
                  <Link
                    href="#"
                    className="shadow-1 btn text-start bg-white d-inline-block text-primary hover-up"
                  >
                    View our partners
                    <svg
                      className="ms-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={14}
                      viewBox="0 0 24 14"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="col-lg-9 ps-lg-8">
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/logo-cloud-3/logo1.png"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/logo-cloud-3/logo2.png"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/logo-cloud-3/logo-3.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/logo-cloud-3/logo-4.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-4 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    {/* <img src="/assets/imgs/logo-cloud-3/logo-5.svg" alt="infinia"> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={95}
                      height={16}
                      viewBox="0 0 95 16"
                      fill="none"
                    >
                      <path
                        d="M50.3764 0.182129C45.952 0.182129 42.3623 3.63852 42.3623 7.90437C42.3623 12.4397 45.796 15.83 50.3764 15.83C54.8424 15.83 58.3686 12.3949 58.3686 7.99341C58.3686 3.61815 54.866 0.182129 50.3764 0.182129Z"
                        fill="url(#paint0_linear_815_29731)"
                      />
                      <path
                        className="fill-dark"
                        d="M4.87963 0.463976H0.571289V15.4912H4.85722C7.13112 15.4912 8.77566 14.9523 10.2183 13.7573C11.93 12.3377 12.9452 10.1971 12.9452 7.98487C12.9452 3.54822 9.63081 0.463976 4.87963 0.463976ZM8.30604 11.7503C7.37961 12.5862 6.18694 12.9473 4.29158 12.9473H3.50423V3.00848H4.29158C6.18694 3.00848 7.33392 3.34687 8.30604 4.22471C9.31977 5.12613 9.9244 6.52189 9.9244 7.96334C9.9244 9.40769 9.31977 10.8523 8.30604 11.7503ZM14.2982 15.4912H17.2262V0.463976H14.2982V15.4912ZM24.3947 6.22831C22.635 5.57625 22.117 5.1462 22.117 4.3379C22.117 3.3908 23.0391 2.67037 24.3031 2.67037C25.1818 2.67037 25.9028 3.03059 26.6712 3.88428L28.2014 1.88214C26.9398 0.7756 25.4303 0.213163 23.7837 0.213163C21.1275 0.213163 19.098 2.06167 19.098 4.51539C19.098 6.59027 20.0436 7.64822 22.7935 8.64216C23.9434 9.04573 24.528 9.31488 24.8216 9.49877C25.4073 9.88197 25.7015 10.4208 25.7015 11.0514C25.7015 12.2699 24.7317 13.1699 23.4229 13.1699C22.0257 13.1699 20.9002 12.4722 20.2237 11.1654L18.3333 12.9927C19.6825 14.9727 21.3052 15.8543 23.5384 15.8543C26.5802 15.8543 28.7196 13.8237 28.7196 10.9178C28.7196 8.52898 27.7307 7.44658 24.3947 6.22831ZM29.6432 7.98487C29.6432 12.4061 33.1144 15.8302 37.5772 15.8302C38.8389 15.8302 39.9204 15.5808 41.2513 14.9523V11.5029C40.0778 12.6758 39.0411 13.1478 37.7111 13.1478C34.7598 13.1478 32.6628 11.0066 32.6628 7.96334C32.6628 5.08045 34.8253 2.80422 37.5772 2.80422C38.9721 2.80422 40.033 3.29973 41.2513 4.49386V1.04474C39.9669 0.393271 38.9061 0.125 37.6442 0.125C33.204 0.125 29.6432 3.61834 29.6432 7.98487ZM65.0005 10.5582L60.9893 0.463976H57.7892L64.1686 15.875H65.7448L72.2357 0.463976H69.0592L65.0005 10.5582ZM73.568 15.4912H81.8821V12.9473H76.4972V8.88832H81.6761V6.34382H76.4972V3.00848H81.8821V0.463976H73.568V15.4912ZM93.4844 4.89888C93.4844 2.08378 91.5491 0.463976 88.1669 0.463976H83.8173V15.4912H86.7496V9.45163H87.1334L91.1875 15.4912H94.7931L90.0579 9.16125C92.2696 8.70908 93.4844 7.19868 93.4844 4.89888ZM87.6025 7.38053H86.7496V2.82691H87.6493C89.4786 2.82691 90.4697 3.59535 90.4697 5.05775C90.4697 6.56641 89.4786 7.38053 87.6025 7.38053Z"
                        fill="black"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_815_29731"
                          x1="45.4698"
                          y1="1.60032"
                          x2="56.2854"
                          y2="13.0234"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={1} stopColor="#F34F26" />
                          <stop offset={1} stopColor="#F69E35" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/logo-cloud-3/logo-6.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/logo-cloud-3/logo-8.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/logo-cloud-3/logo-9.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/logo-cloud-3/logo-3.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/logo-cloud-3/logo-13.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/logo-cloud-3/logo-11.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/logo-cloud-3/logo-12.svg"
                      alt="infinia"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/logo-cloud-3/logo-7.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bouncing-blobs-container rounded-4 fix">
              <div className="bouncing-blobs-glass rounded-4" />
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green" />
                <div className="bouncing-blob bouncing-blob--primary" />
                <div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
