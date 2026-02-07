import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-light shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src="/images/logo.png" alt="맹글멍 Logo" style={{ height: '30px', marginRight: '8px' }} />
            HOME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  홈
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manuals">
                  매뉴얼
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/makerspaces">
                  메이커스페이스
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
