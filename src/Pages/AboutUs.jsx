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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              fugit quibusdam unde maiores est corporis, similique optio
              deleniti officia eveniet numquam nihil incidunt neque, doloremque
              mollitia. In dolorem nam eveniet doloribus. Dolorum provident
              quae, doloribus sunt harum amet, odit obcaecati quos sequi labore
              neque quas iure corporis debitis. Non a placeat dolor quae quos
              quod, iusto exercitationem quia cum, fugiat, ut vel officia. Et
              eveniet praesentium architecto molestias sint voluptate neque, ut
              unde molestiae illum id eum laboriosam libero aliquid,
              reprehenderit ducimus officiis rem? Nemo error natus distinctio
              eos velit cumque ullam nam libero, officia veniam voluptatibus
              perferendis ut asperiores.
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
          Nuestro equipo:
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
