import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return <>
    <Head>
      <title>Shivadnya Dhol Tasha Pathak | Home</title>
    </Head>
    <section>
            {/* <Image src='/images/home_banner.jpg' className='img-fluid' width="100%" height="45vh" layout='responsive' sizes='100vw' /> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/images/home_banner.jpg" className="d-block w-100" alt="images/home_banner.jpg" />
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="images/home_banner.jpg" />
                </div>
                <div className="carousel-item">
                  <img src="/images/home_banner.jpg" className="d-block w-100" alt="images/home_banner.jpg" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
    </section>
  </>
}
