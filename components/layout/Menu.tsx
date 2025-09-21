import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="d-none d-lg-flex">
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
          <li className="nav-item ">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="page-about"
            >
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="nav-item dropdown position-relative">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </Link>
            <div className="dropdown-menu position-absolute start-0 mt-2">
              <ul className="list-unstyled m-0">
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/page-about"
                  >
                    Hotels and Resorts
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/page-about-2"
                  >
                    Workplace Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/page-about-3"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/page-about-3"
                  >
                    Kid's Program
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item ">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
            >
              Yoga AI
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/page-contact-1"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
