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
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{delay:2000}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image alt='Mountains' src='/images/banner_images/1.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/>
      </SwiperSlide>
        
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/2.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/3.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/2.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/3.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/1.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image alt='Mountains' src='/images/banner_images/2.jpg' width='100%' height='50%' layout='responsive' objectFit='cover'/></SwiperSlide>
    </Swiper>
            {/* <Image src='/images/home_banner.jpg' className='img-fluid' width="100%" height="45vh" layout='responsive' sizes='100vw' /> */}
    </section>
  </>
}
