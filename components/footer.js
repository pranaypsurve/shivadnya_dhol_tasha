const Footer = () => {
    return (
        <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}} >
            <div className="container pt-4">
                <section className="mb-4">
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank" href="https://www.facebook.com/shivadnyadholtashapathak152016/" role="button" data-mdb-ripple-color="dark" >
                        <i className="fa fa-facebook-f"></i></a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank" href="https://www.youtube.com/channel/UCynLbV4yVHTtLOhUbxxJ1uQ" role="button" data-mdb-ripple-color="dark">
                        <i className="fa fa-youtube"></i></a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fa fa-google"></i></a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank" href="https://www.instagram.com/shivadnya_dhol_tasha_pathak/?igshid=YmMyMTA2M2Y=" role="button" data-mdb-ripple-color="dark">
                        <i className="fa fa-instagram"></i></a>
                </section>
            </div>

            <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
                © 2022 Copyright:
                <a className="text-dark" href="#">Pranay</a>
            </div>
        </footer>
    )
}
export default Footer;