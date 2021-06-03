import React from "react";
import "../cozastore/css/main.css";

function AboutUs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center aboutUsTitle mt-5">
          <h1
            style={{
              fontFamily: "Poppins-Regular",
            }}
          >
            ABOUT US
          </h1>
        </div>
        <div className="row mt-5 mb-5 ">
          <div className="col-6">
            <p
              className="mt-5 mb-5"
              style={{
                fontFamily: "Poppins-Regular",
                fontWeight: "80px",
              }}
            >
              <p>
                <strong>HackCommerce</strong> is the final project of Hack
                Academy’s Coding Bootcamp. During a period of 3 weeks the team
                applied, for the backend and the frontend, an extensive array of
                technologies. The objective of the project was to create an
                e-commerce website with the expected functionalities, such as
                displaying the products, categories, filters, shopping cart,
                user interface, admin interface and much more.
              </p>
              <p className="mt-2">
                <strong>The Coding Bootcamp</strong> was a 3-month intensive
                course taught by Hack Academy. Through Monday to Friday (and
                even weekends) we developed and expanded our knowledge in a
                variety of programming languages and frameworks. During the
                course the students faced daily and weekly projects to apply the
                concepts we learned simultaneously in class. This proved to be
                quite a challenge for us but in the end the experience and the
                knowledge we learned made it worth it.
              </p>
            </p>
            
          </div>
          <div className="col-6 aboutUsImage"></div>
        </div>
      </div>
      <div className="text-center mt-5 mb-5 d-flex justify-content-between">
        <h3
          style={{
            fontFamily: "Poppins-Regular",
          }}
        >
          Meet the team:
        </h3>
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQFoXJumG85l2Q/profile-displayphoto-shrink_200_200/0/1622126042686?e=1628121600&v=beta&t=KXIEk6faYY0Dpo6X6iplZr_z_j6BReefo2JLdNTFPXU"
            alt="imagen joaco"
            className="rounded-circle  w-75"
          />

          <h5
            style={{
              fontFamily: "Poppins-Regular",
            }}
            className="mt-3"
          >
            Joaquin Etchegaray
          </h5>

          <a
            href="https://www.linkedin.com/in/joaquinetchegaray/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin-square linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHeYyDqh20IqA/profile-displayphoto-shrink_200_200/0/1622134340122?e=1628121600&v=beta&t=gvgqq1Yg0MUbB_XRKkq2Crb8L4lIuRjPLYmykc5NORU"
            alt="imagen santi"
            className="rounded-circle w-75"
          />

          <h5
            style={{
              fontFamily: "Poppins-Regular",
            }}
            className="mt-3"
          >
            Santiago Cabezudo
          </h5>

          <a
            href="https://www.linkedin.com/in/santiago-cabezudo/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin-square linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQH8CDObx87HQg/profile-displayphoto-shrink_200_200/0/1608460263512?e=1628121600&v=beta&t=909gRtW63nzakdYA196x2CcqLi52r6uobWg4mQfp-9s"
            alt="imagen fede"
            className="rounded-circle w-75"
          />

          <h5
            style={{
              fontFamily: "Poppins-Regular",
            }}
            className="mt-3"
          >
            Federico Trotta
          </h5>

          <a
            href="https://www.linkedin.com/in/trottafede/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin-square linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQG4aSm58KO8sg/profile-displayphoto-shrink_200_200/0/1622162854946?e=1628121600&v=beta&t=M9aG3NpYAtswZNOYOU6C_kdz15ifmOvu2TrTtekCB8k"
            alt="imagen ale"
            className="rounded-circle w-75"
          />
          <h5
            style={{
              fontFamily: "Poppins-Regular",
            }}
            className="mt-3"
          >
            Alejandro Schimdt
          </h5>

          <a
            href="https://www.linkedin.com/in/alejandro-schmidt/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin-square linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
