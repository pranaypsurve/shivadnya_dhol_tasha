import { useState, useEffect } from "react";
import Head from 'next/head'
import Header from '../components/header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import BeatLoader from "react-spinners/BeatLoader";
import NextNProgress from 'nextjs-progressbar';
const Layout = ({ children }) => {
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
        // import("bootstrap/dist/js/bootstrap.bundle.min.js");
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);
    return (
        <>
            {
                loading ? <> <Head> <title>Loding Page</title> </Head> <BeatLoader color='#D76E36' className="loader" loading={loading} size={30} /> </>
                    : <>
                    <NextNProgress color="#C71585" startPosition={0.4} stopDelayMs={100} height={3} showOnShallow={true} />
                        <Head>
                            {/* <link href="/bootstrap4/bootstrap.min.css" rel="stylesheet" /> */}
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        </Head>
                        <Header />
                        {children}
                        <Footer />
                    </>
            }
        </>

    )
}
export default Layout;