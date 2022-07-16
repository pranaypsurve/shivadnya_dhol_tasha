import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link'

function Home(props) {
  return <>
    <Head>
      <title>Shivadnya Dhol Tasha Pathak | Home</title>
    </Head>
    <section>
    <Swiper slidesPerView={1} loop={true} autoplay={{delay:2000}} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image alt='Mountains' src='/images/aboutus/6.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/aboutus/8.webp' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/aboutus/5.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/b1.webp' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/b2.webp' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
    </Swiper>
    </section>
    <section className='pt-5 pb-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center p-3 mb-2'>Our Services</h1>
          </div>
          <div className='col-md-4'>
            <div className='p-2 mb-4 border shadow'>
              <h2 className='text-center'>Ganesh Festival</h2>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='p-2 mb-4 border shadow'>
              <h2 className='text-center'>Traditional Program</h2>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='p-2 mb-4 border shadow'>
              <h2 className='text-center'>Wedding Band</h2>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='p-2 mb-4 border shadow'>
              <h2 className='text-center'>Opening Ceremony</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='py-5'>
      <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='text-center pb-5'>Want to Join Us</h1>
            </div>
            <div className='col-md-6 text-center'>
              <Image alt='Mountains' src='/images/addmission_banner.webp' width='550px' height='490px' layout='intrinsic' />
            </div>
            <div className='col-md-6'>
              <div className='text-center pt-4' style={{fontSize:'40px'}}>
                ढोल म्हणजे काय <br/>
                ते ठोका पडल्याशिवाय समजत नाही!!<br/>
                ताशा म्हणजे काय<br/>
                ते कतरी पडल्याशिवाय समजत नाही!!<br/>
              </div>
              <div className='text-center pt-5'>
                <Link href='addmission'> 
                  <a className='btn btn-primary btn-lg'>Join Us</a>
                </Link>
                <Link href='contact'> 
                  <a className='btn btn-primary btn-lg mx-3'>Enquiry</a>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section className='py-5'>
      <div className='container-fluid'>
            <div className='row'>

            </div>
      </div>
    </section>
  </>
}
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home;