import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"#fcdc71)"}}>
      <div className="container-fluid ps-lg-5 pe-lg-5">
        <Link className="navbar-brand" href="/">
          <a><Image src="/images/common/brand_logo.png" alt="Picture of the author" width="200px" height="60px"/></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="gallery" >
                <a className="nav-link">Gallery</a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" href="addmission">
                <a className="nav-link">Addmission</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="about">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="contact">
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header;