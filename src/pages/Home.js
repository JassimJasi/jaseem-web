import React from "react";
import Layout from "../components/Layout";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJsSquare,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import AOS from "aos";
const homePageImg =
  "https://assets3.lottiefiles.com/packages/lf20_kkflmtur.json";

AOS.init({
  duration: 1000,
});
function Home({ setLoading }) {
  return (
    <Layout>
      {!homePageImg ? (
        setLoading(true)
      ) : (
        <div>
          {/* Home-Intro-section */}
          <div className="h-full bg-theme md:h-screen">
            <div
              className="grid md:grid-cols-1 grid-cols-2 h-full items-center 
          border-4 border-white md:border-0 mx-10 bg-theme 
          transform rotate-12 md:rotate-0"
            >
              <div className="h-1/2 md:h-max md:pt-10" data-aos="fade-right">
                {/* <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_qhrndegx.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> */}
                <lottie-player
                  src={homePageImg}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <div
                className="font-bold px-5 text-white md:px-5 md:-mt-20 md:border-0 border-l-4 border-white md:text-center"
                data-aos="fade-left"
              >
                <h1 className="text-6xl md:text-4xl" data-aos="slide-right">
                  Hi , I am <br />
                  <b className="text-7xl md:text-4xl text-yellow-500">Jaseem</b>
                </h1>
                <hr className="w-72" />
                <h1
                  className="text-3xl md:text-xl md:mb-16"
                  data-aos="slide-left"
                >
                  FullStack <b className="text-red-500">Developer</b>
                </h1>
              </div>
            </div>
          </div>

          {/* Technologies-section */}
          <div className="mt-20">
            <h1
              className="text-4xl text-blue-800 font-bold text-center my-6"
              data-aos="slide-right"
            >
              Technologies i Use
            </h1>
            <div className="grid md:grid-cols-1 grid-cols-3">
              <FaReact
                size={170}
                color="cyan"
                className="w-full text-center mt-14"
              />
              <FaNodeJs
                size={170}
                color="green"
                className="w-full text-center mt-14 animate-bounce"
              />
              <FaBootstrap
                size={170}
                color="blue"
                className="w-full text-center mt-14"
              />
              <FaJsSquare
                size={170}
                color="green"
                className="w-full text-center mt-14 animate-bounce"
              />
              <FaHtml5
                size={170}
                color="orange"
                className="w-full text-center mt-14"
              />
              <FaCss3
                size={170}
                color="blue"
                className="w-full text-center mt-14 animate-bounce"
              />
            </div>
          </div>

          {/* React buff-section */}
          <div className="my-20">
            <div className="text-center h-52 bg-primary">
              <h1
                className="text-white font-bold text-4xl md:text-2xl py-10"
                data-aos="slide-down"
              >
                Yes You Are Right...I am React Buff{" "}
              </h1>
            </div>
            <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 ">
              <div className="h-80" data-aos="zoom-in" data-aos-duration="2500">
                <lottie-player
                  src="https://assets1.lottiefiles.com/packages/lf20_kyu7xb1v.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <p
                className="text-xl my-5 font-semibold md:px-5 px-14 py-10 text-primary hover:text-white"
                data-aos="zoom-in"
                data-aos-duration="2500"
              >
                React. js is an efficient, declarative, and flexible open-source
                JavaScript library that is useful for developing user interfaces
                specially for single page apps.
              </p>
            </div>
          </div>

          {/* My Dev Stack-section */}

          <div className="my-20">
            <div className="h-52 bg-green-400 text-center">
              <h1
                className="text-4xl md:text-2xl font-bold  text-white py-10 "
                data-aos="slide-up"
              >
                My Dev Stack
              </h1>
            </div>
            <div
              className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 "
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <div className="h-80">
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_dlw10cqe.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div
                className="grid md:grid-cols-1 grid-cols-3 text-green-500 hover:text-white p-10"
                data-aos="zoom-in"
                data-aos-duration="2500"
              >
                <div className="text-left ">
                  <h1 className="text-xl font-bold ">Front End</h1>
                  <hr />
                  <p className="font-semibold my-5">HTML/CSS</p>
                  <p className="font-semibold my-2">React</p>
                  <p className="font-semibold my-2">JavaScript</p>
                  <p className="font-semibold my-2">Redux</p>
                </div>
                <div className="text-center">
                  <h1 className="text-xl font-bold">UI / UX</h1>
                  <hr />
                  <p className="font-semibold my-5">Bootstrap</p>
                  <p className="font-semibold my-5">Tailwind</p>
                  <p className="font-semibold my-5">Material UI</p>
                </div>
                <div className="text-right">
                  <h1 className="text-xl font-bold">
                    Back End, DB and Verion tools
                  </h1>
                  <hr />
                  <p className="font-semibold my-5">Node JS</p>
                  <p className="font-semibold my-5">Express JS</p>
                  <p className="font-semibold my-5">Mongo DB</p>
                  <p className="font-semibold my-5">GIT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dev-info -section */}
          <div>
            <div>
              <h1
                className="text-center text-4xl font-bold text-gray-600"
                data-aos="slide-up"
              >
                Who is Jaseem
              </h1>
            </div>

            <div className="h-screen relative md:h-full">
              <div className="h-full md:h-max">
                <lottie-player
                  src="https://assets3.lottiefiles.com/packages/lf20_gsp8bvo7.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-gray-700"
                data-aos="zoom-in"
                data-aos-duration="2500"
              >
                <h1 className="text-2xl font-bold text-left w">
                  Hai,Hello....
                  <hr />
                  <pre className="text-xl md:text-l my-5 font-mont">
                    {JSON.stringify(
                      {
                        name: "Abdulla Jaseem",
                        place: "Palakkad",
                        country: "India",
                        phone: "8848088581",
                      },
                      null,
                      2
                    )}
                  </pre>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
