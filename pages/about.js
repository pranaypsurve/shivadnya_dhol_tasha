import Image from "next/image";
const About = () => {
    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Image src="/images/common/aboutus_side_image.jpeg" className="img-fluid" width="450" height="300" />
                    </div>
                    <div className="col-lg-6">
                        <h1>About Us</h1>
                        <p>
                        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;