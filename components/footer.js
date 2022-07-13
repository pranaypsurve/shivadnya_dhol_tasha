import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="text-center" style={{backgroundColor: "#ffa758"}} >
            <div className="text-center text-white p-3 d-lg-flex justify-content-between align-items-center" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
               <p className="text-uppercase m-0"> © <Link className="nav-link" href="/"><a className="text-white">Shivadnya</a></Link> 2022 | all rights reserved | +91 9322152016 | developed by <a href="https://pranay-surve-portfolio.herokuapp.com/" className=" text-white">pranay surve</a></p>
               <p className="m-0 text-white">
                    <a className="btn btn-link btn-floating text-white" target="_blank" rel="noreferrer" href="https://www.facebook.com/shivadnyadholtashapathak152016/" role="button" data-mdb-ripple-color="dark" >
                        <i className="fa fa-facebook-f"></i></a>

                    <a className="btn btn-link btn-floating text-white" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCynLbV4yVHTtLOhUbxxJ1uQ" role="button" data-mdb-ripple-color="dark">
                        <i className="fa fa-youtube"></i></a>

                    <a className="btn btn-link btn-floating text-white" target="_blank" rel="noreferrer" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fa fa-google"></i></a>

                    <a className="btn btn-link btn-floating text-white" target="_blank" rel="noreferrer" href="https://www.instagram.com/shivadnya_dhol_tasha_pathak/?igshid=YmMyMTA2M2Y=" role="button" data-mdb-ripple-color="dark">
                        <i className="fa fa-instagram"></i></a>
               </p>
            </div>
        </footer>
    )
}
export default Footer;