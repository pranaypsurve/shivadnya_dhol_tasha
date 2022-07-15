import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Home() {
  return <>
    <Head>
      <title>Shivadnya Dhol Tasha Pathak | Home</title>
    </Head>
    <section>
    <Swiper slidesPerView={1} loop={true} autoplay={{delay:2000}} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image alt='Mountains' src='/images/aboutus/8.webp' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/2.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/3.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/2.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/3.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/1.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/2.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
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
  </>
}
