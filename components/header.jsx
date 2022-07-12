import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
//  alert(currentRoute);
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"rgba(249, 250, 253, 0)"}}>
      <div className="container-fluid ps-lg-5 pe-lg-5">
        <Link className="navbar-brand" href="/">
          <a><Image src="/images/common/brand_logo.png" alt="Picture of the author" width="250px" height="100px"/></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${currentRoute === "/" ? "active_menu_hover" : "non-active"}`}>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="gallery" >
                <a className="nav-link">Gallery</a>
              </Link>
            </li> */}
            <li className={`nav-item ${currentRoute === "/addmission" ? "active_menu_hover" : "non-active"}`}>
              <Link className="nav-link" href="addmission">
                <a className="nav-link"  >Addmission</a>
              </Link>
            </li>
            <li className={`nav-item ${currentRoute === "/about" ? "active_menu_hover" : "non-active"}`}>
              <Link className="nav-link" href="about">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
            <li className={`nav-item ${currentRoute === "/contact" ? "active_menu_hover" : "non-active"}`}>
              <Link className="nav-link" href="contact">
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        ul.navbar-nav li.nav-item {
          padding: 12px 30px;
      } `}</style>
    </nav>
  )
}
export default Header;