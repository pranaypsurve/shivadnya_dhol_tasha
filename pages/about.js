import Image from "next/image";
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])
import 'swiper/css';
import 'swiper/css/autoplay';
const About = () => {
    return (
        <>
        <Head>
            <title>About us | Mira Bhayander</title>
        </Head>
            <section className="pt-lg-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-lg-5">
                            <Swiper slidesPerView={1} loop={true} autoplay={{delay:3200}} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >   
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/1.jpeg' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/2.jpeg' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/3.jpeg' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/4.jpeg' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/5.jpg' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/6.jpg' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/7.jpg' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/8.webp' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                                <SwiperSlide><Image alt='Shivadnya' className="img-fluid rounded" src='/images/aboutus/9.webp' width='100%' height='100%' layout='responsive' objectFit='cover'/></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="py-2">About Us</h1>
                            <p lang="ma">एकाच ठिकाणी राहणाऱ्या काही मित्रांनी एक प्रकल्प सुरू करण्याचे ठरवले आणि अगदी कसलाही विचार न करता सर्वांनी धावपळ करायला सर्वात केली.
                                छत्रपती शिवाजी महाराज आणि आपल्या हिंदू संस्कृतीला आदर्श मानत उपक्रमाचं नाव ठरलं शिवाज्ञा आणि घोषवाक्य ठरलं, आवाज ढोल ताशांचा, गजर हिंदू संस्कृतीचा
                                पैशांची जमवाजमव करून ०७ ढोल व ०२ ताशे खरेदी करून सरावाला सुरवात झाली.
                                सकाळ पासून रात्री पर्यंत प्रत्येक जण आपलं सहकार्य अगदी मनापासून देत होता.
                                <br/><br/>
                                १९ एप्रिल, २०१६ ला सफेद कुर्ता घालून ०६ जणांनी मिळून पहिले अनौपचारिक वादन केले, वादनाचा मोबदला मिळाला अगदी ०० रुपये.
                                पण त्या विणामोबदला वादनात सुद्धा आपण सुरू केलेला उपक्रम यशस्वी झाल्याचा आनंद सगळ्यांच्याच मनात होता आणि याच यशस्वी भावनेने ०१ मे २०१६ रोजी श्री गणेशाचा आशिर्वाद घेऊन पथकाची औपचारिक रित्या स्थापना झाली.
                                शिवाज्ञा ढोल ताशा पथक परिसरातील, शाळा-कॉलेजचे मित्र मैत्रिणी, बहीण-भाऊ अशा सर्वाँना घेऊन प्रत्येक जण पथकात प्रवेश घेऊ लागला.
                                <br/><br/>
                                पदार्पणाच्या पहिल्याच वर्षात शहरातल्या एकमेव ढोल ताशा स्पर्धेत, जुन्या आणि नावाजलेल्या पथकांसमोर वादन करून द्वितीय क्रमांक मिळवला होता.
                                घरच्यांची नाराजी, समाजातील काही कंटक नागरिकांचा विरोध, पोलिसांचा ऐकावा लागणारा ओरडा आणि त्या मुळे सरावाची जागा सतत बदलताना होणारा त्रास हे सर्व सहन करावं लागत असताना सुद्धा पथक आणि पथकातला कोणताही वादक कधी हताश झाला नाही.
                                घरगुती, सार्वजनिक तसेच मानाचे आणि प्रसिद्ध गणपती व शोभायात्रांचे वादन करत शिवाज्ञा ने सहा वर्षांचा पल्ला गाठला आहे.
                                <br/><br/>
                                कित्येक वादक आले कित्येक गेले, बरीचशी इतर पथक आपल्या मधून तयार झाली पण शिवाज्ञा डगमगली नाही.
                                महाराष्ट्र राज्याचे तत्कालीन शिक्षण मंत्र्यांनी स्वतः कॉल करून स्वराज्याची राजधानी रायगडावर वादनाचे वयक्तिक रित्या आमंत्रण दिले होते, जणू हा प्रसंग याच गोष्टीची जाणीव करून देतो की, शिवाज्ञाची किर्ती त्याच्या नावातच झळकून येते.
                                शिवाज्ञाच्या या प्रवासात आर्थिक आणि वयक्तिक सहकार्य केलेल्या प्रत्येक व्यक्तीचे, प्रत्येक वादकाचे आभार
                                आणि शिवाज्ञाच्या या दिव्य स्वरूप प्रगतीचे श्रेय जर कोणाला द्यायचे असेल तर तो आहे, पथकाचा प्रत्येक वादक.
                                पुढेही आपण असेच निरंतर प्रगती करत राहू याची खात्री आहे, पुन्हा एकदा संपूर्ण शिवाज्ञा परिवाराचे अभिनंदन आणि आभार.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;