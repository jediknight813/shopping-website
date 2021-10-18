import '../Styles/Styles.css'


function AboutPage(){
    return(
        <div>
            <h1 className="about_page_header" > contact us </h1>

            <div className="about_page_background">
                <h1 className="about_page_location"> location: Rue de Rivoli, 75001 Paris, France </h1>
                <h1 className="about_page_phone_number"> phone: 1-123-456-7890  </h1>
                <h1 className="about_page_email"> email: fancyart@bellum.com </h1>
                <h1 className="about_page_hours">   
                    Mon - Fri 10am - 4:30pm
                    Sat 10am - 3pm
                    Sun CLOSED
                </h1>
                <iframe className="about_page_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8741023651455!2d2.3354553160284115!3d48.86061107928758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sus!4v1634324251766!5m2!1sen!2sus" width="600" height="450" title="location" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}


export default AboutPage
