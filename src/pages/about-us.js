import React from "react";

const AboutUs = () => {
    return (
        <div>
          <h1 className="text-center pt-3">We are located just behind the Summit Pub up Todmorden road in Littleborough</h1>
            <iframe
              className="pt-2"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3413.028319197143!2d-2.079570998676414!3d53.66999315307772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1636660741612!5m2!1sen!2suk"
              height="600"
              style={ { width: '100%'} }
              allowFullScreen=""
              loading="lazy">
            </iframe>
        </div>
    )
}

export default AboutUs;