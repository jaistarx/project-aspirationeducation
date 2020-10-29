import React, { useState } from "react";
import "./courses.css";
import Carousel from "react-bootstrap/Carousel";

import { FaUserGraduate } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function Course() {
  const [st, setst] = useState(1);
  const clicking = (e) => {
    setst(e);
  };
  return (
    <div>
      <div className="norm-flex ch">
        <IconContext.Provider className="rico" value={{ color: "#FF4747", size: "2.2%" }}>
          <FaUserGraduate></FaUserGraduate>
        </IconContext.Provider>

        <div className="chead">
          <h2> Our Courses</h2>
        </div>
      </div>
      <div className="rb">
        <div className="flexes">
          <div className="cres">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/sstt 1 (1).png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\sstt2 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\st 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cdesc">
            <h3>Intensive Residential Coaching</h3>
            <p>
              Crash course ideally supports 11th and 12th standard student of
              various board to guide them, coach and train them for the
              competitive exam in particular for NEET/JEE-UG at the aspiration
              residential campus.
            </p>

            <p>Free Android Tablet with preinstalled E-learning Material</p>
          </div>
        </div>
        <div className="ulli">
          <ul>
            <li>Affordable fees structure</li>
            <li>Course name: Intensive Residential course for NEET & AIIMS</li>
            <li>Start Date: 2 days after board exam</li>
            <li>Course Duration: 45 days (2017 NEET)</li>
            <li>Subjects: Physics, Chemistry, Botany and Zoology</li>
            <li>Frequency: Daily</li>
            <li>Test Frequency – Daily and weekly</li>
            <li>Total Hours: 412 hours</li>
          </ul>
        </div>
        <div className="flexes fh">
          <div
            onClick={(e) => clicking(1)}
            style={{ color: st === 1 ? "#ff4747" : "black" }}
          >
            <h5>Package</h5>
          </div>
          <div
            onClick={(e) => clicking(2)}
            style={{ color: st === 2 ? "#ff4747" : "black" }}
          >
            <h5>Eligibility</h5>
          </div>
          <div
            onClick={(e) => clicking(3)}
            style={{ color: st === 3 ? "#ff4747" : "black" }}
          >
            <h5>Admission Procedure</h5>
          </div>
        </div>
        {st === 1 && (
          <div className="resp">
            <p>Android APP</p>
            <p>Syllabus</p>
            <p>Test paper</p>
            <p>
              Study Material (physics- 2 books, Chemistry-2 books and
              Biology/Mathematics - 2 books)
            </p>
          </div>
        )}
        {st === 2 && (
          <div  className="resp">
            <p>Class 12 Studying students</p>
          </div>
        )}
        {st === 3 && (
          <div  className="resp">
            <p>
              Direct admission ( On basis of marks/grades obtained in the
              school/board exams)
            </p>
          </div>
        )}
        <div className="flexes">
          <div className="reds twins">
            <h4>Aspiration Edge</h4>
            <div>
              <p>Affordable fees structure</p>
              <p>Residential Coaching</p>
              <p>Well-equipped class rooms</p>
              <p>Well experienced qualified professors and tutors</p>
              <p>Easy problem solving technique</p>
              <p>Doubt clearing sessions</p>
              <p>Methods to remember equation formulas in pneumonic format</p>
              <p>24 hours libraries with Wi-Fi facilities</p>
              <p>Separate Hostel for boys and girls</p>
              <p>Spacious dining hall served with hygienic food</p>
            </div>
          </div>

          <div className="reds twins">
            <h4>Package Benefits</h4>
            <div>
              <p>Total Residential course duration of 412 hours</p>
              <p>
                Analysis of previous year Plus 2 question paper book issued at
                the time of registration
              </p>
              <p>
                Mechanism and named reaction booklet issued at the time of
                registration
              </p>
              <p>
                Aspiration Competitive Test series App (ACTS) issued at the time
                of registration
              </p>
              <p>
                Study Material (Physics 2 books, Chemistry 2 books, Biology 2
                books) for NEET will be provided in due course
              </p>
              <p>
                Free tablet with ACTS software will be provided at the time of
                admission
              </p>
              <p>Methods to remember equation formulas in pneumonic format</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rb">
        <div className="flexes">
          <div className="cres">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/sstt 1 (1).png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\sstt2 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\st 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cdesc">
            <h3>E-learning Course(App)</h3>
            <p>
              Aspiration has developed an offline software app, ACTS for NEET
              and JEE, which can be downloaded from the website which supports
              the 11th and 12th standard students in sharpening their academic
              knowledge and the entrance exam skills. The 11th and 12th standard
              students who lack answering skills in objective type examinations
              are provided the necessary test techniques. Students can subscribe
              to E-learning course and get the preparation material in any
              android device. The software covers various test series, mock
              tests.
            </p>
          </div>
        </div>
      </div>
      <div className="rb">
        <div className="flexes">
          <div className="cres">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/sstt 1 (1).png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\sstt2 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\st 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cdesc">
            <h3>E-learning Course(Tablet)</h3>
            <p>
              Aspiration study material app known as ACTS is pre-installed in
              the android tablet with company (brand) provided one year
              warranty. The 11th and 12th standard students who lack answering
              skills in objective type examinations are provided the necessary
              test techniques. Students can subscribe to E-learning course and
              get the preparation material pre-installed in the tablet. The
              software covers various test series, mock test and previous year
              question bank with regular updates in an academic year.
            </p>
          </div>
        </div>
      </div>
      <div className="rb">
        <div className="flexes">
          <div className="cres">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/sstt 1 (1).png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\sstt2 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\st 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cdesc">
            <h3>Printed Book Materials</h3>
            <p>
              This product comprises of ACTS App and study material which is
              formulated by expert team of well experienced qualified professors
              and tutors. This study material includes 2 books for physics, 2
              books for chemistry and 2 books for biology/mathematics.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="rb">
        <div className="flexes">
          <div className="cres">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/sstt 1 (1).png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\sstt2 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images\st 1 (1).png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cdesc">
            <h3>Weekend Classroom Course</h3>
            <p>
              Crash course ideally supports 11th and 12th standard student of
              various board to guide them, coach and train them for the
              competitive exam in particular for NEET/JEE-UG at the premises.
              Instead of Learn more put course details:
            </p>
            <p>Course name: Weekend classroom course for NEET & AIIMS</p>
            <p>Course Duration: 1 Year (2017-2018)</p>
            <p>Frequency: 2 days a week for weekend batches</p>
            <p>Teaching hours: 6 hrs for weekends </p>
          </div>
        </div>
      </div>
    </div>
  );
}
