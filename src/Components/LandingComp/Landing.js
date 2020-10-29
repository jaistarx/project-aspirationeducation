import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Landing.css";
import { IoIosPeople } from "react-icons/io";

// import { BsFillQuestionSquareFill } from "react-icons/bs";
import { GiMedicines, GiBookCover } from "react-icons/gi";
import { MdHighlight, MdPhoneAndroid } from "react-icons/md";
// import Testimonial from './testi';
import { IconContext } from "react-icons";
export default function Land() {
  return (
    <div>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/sstt 1 (1).png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Experienced and dedicated faculty</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images\sstt2 1 (1).png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Individual Attention</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images\st 1 (1).png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Carefully curated Questions</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="flexes">
        <div className="reds">
          <img
            className="rimg"
            src="images\undraw_exams_g4ow (1).svg"
            alt="services"
          ></img>
          <p className="stext">Free Sample Tests</p>
        </div>
        <div className="reds">
          <img
            className="rimg"
            src="images\undraw_predictive_analytics_kf9n 1 (1).png"
            alt="services"
          ></img>
          <p className="stext">Get NEET Updates</p>
        </div>
        <div className="reds">
          <img
            className="rimg"
            src="images\undraw_certification_aif8 (1).svg"
            alt="services"
          ></img>
          <p className="stext2">Free Councilling</p>
        </div>
      </div>
      <div className="rb">
        <div className="norm-flex">
          <IconContext.Provider value={{ color: "#FF4747", size: "3.5%" }}>
            <IoIosPeople></IoIosPeople>
          </IconContext.Provider>

          <div>
            <h3>About Us</h3>
          </div>
        </div>

        <div className="flexes">
          <img src="images\undraw_certificate_343v (1).png" alt="abt"></img>
          <p className="rt">
            ASPIRATION is an ideal platform for NEET exam for UG medical
            entrance. It is promoted by a team of dedicated, experienced and
            qualified teachers and professors. The pattern of coaching and
            course study material and ACTS app are designed to help the medical
            aspirants every day to mould them in the learning goals necessary to
            succeed in NEET. Innovations and development in science and
            technology endure enhanced learning opportunity and facility in
            learning. Online learning and training is an effective tool in this
            competitive learning atmosphere for students to improve their
            efficiency.
          </p>{" "}
        </div>
      </div>
      <div className="rb">
        <div className="flexes">
          <div>
            <iframe
              title="vdo"
              width="400"
              height="315"
              src="https://www.youtube.com/embed/EdUZ8U2fyn0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="if"
            ></iframe>{" "}
          </div>

          <div>
            <iframe
            className="if"
              title="vdo1"
              width="400"
              height="315"
              src="https://www.youtube.com/embed/PMyuWBjBDYk"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="reds1 flexes">
        <div>
          <img
            src="images\bald-head-side-view-with-three-question-marks 1 (1).png"
            alt="results"
          ></img>
          <h4 className="hd">1000</h4>
          <p>Previous Questions</p>
        </div>
        <div>
          <img src="images\mobile-app 1 (1).png" alt="results"></img>
          <h4 className="hd">3000</h4>
          <p>App Downloads</p>
        </div>
        <div>
          <img src="images\verified-text-paper 1 (1).png" alt="results"></img>
          <h4 className="hd">10000</h4>
          <p>Mock Tests</p>
        </div>
        <div>
          <img src="images\question 1 (1).png" alt="results"></img>
          <h4 className="hd">10000</h4>
          <p>Questions Solved</p>
        </div>
        <div>
          <img src="images\date 1 (1).png" alt="results"></img>
          <h4 className="hd">10</h4>
          <p>Upcoming Events</p>
        </div>
      </div>
      <div className="rb">
        <div className="norm-flex">
          <IconContext.Provider value={{ color: "#FF4747", size: "3.5%" }}>
            <MdHighlight></MdHighlight>
          </IconContext.Provider>

          <div>
            <h3>Our Specialities</h3>
          </div>
        </div>

        <div className="flexes">
          <div>
            <img
              src="images\undraw_Bookshelves_re_lxoy 1 (1).png"
              alt="spl"
            ></img>
          </div>

          <div className="spl">
            <b>
              <p>Experienced and dedicated mentors</p>
            </b>
            <p>
              We have a group of sincere and hardworking mentors who will guide
              your child towards success
            </p>
            <b>
              <p>Individual attention</p>
            </b>
            <p>
              Each and every student will be cared and supported in the best
              possible manner to make their dreams real
            </p>
          </div>
          <div className="spl">
            <b>
              <p>Carefully curated materials</p>
            </b>
            <p>
              We have a set of questions and study materials that was prepared
              by the careful syllabus analysis
            </p>
            <b>
              <p>Best teaching methodologies</p>
            </b>
            <p>
              Faculties mentor the children in the most effective way making
              them understand concepts in depth
            </p>
          </div>
        </div>
      </div>
      <div className="flexes">
        <div className="reds downloads">
          <IconContext.Provider value={{ color: "white", size: "30%" }}>
            <MdPhoneAndroid></MdPhoneAndroid>
          </IconContext.Provider>
          <p>Download Engineering Entrance App now!</p>
        </div>
        <div className="reds downloads">
          <IconContext.Provider value={{ color: "white", size: "30%" }}>
            <GiMedicines></GiMedicines>
          </IconContext.Provider>
          <p>Download Medical Entrance App now!</p>
        </div>
        <div className="reds downloads">
          <IconContext.Provider value={{ color: "white", size: "30%" }}>
            <GiBookCover></GiBookCover>{" "}
          </IconContext.Provider>
          <p> Download our e-brochure now!</p>
        </div>
      </div>
      {/* <Testimonial></Testimonial> */}
      {/* <div className="rb">
        <div className="norm-flex">
          <IconContext.Provider value={{ color: "#FF4747", size: "3.5%" }}>
            <BsFillQuestionSquareFill></BsFillQuestionSquareFill>
          </IconContext.Provider>

          <div>
            <h3>FAQ</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
}
