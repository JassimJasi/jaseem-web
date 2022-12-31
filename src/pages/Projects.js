import React from "react";
import Layout from "../components/Layout";
import projectsData from "../resources/projects";

function Project() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_qhrndegx.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div
          className="text-center bg-projectPage mx-28 p-10 -mt-16 md:-mt-24 rounded-tl-full rounded-br-full
        md:mx-5 border-2 border-blue-500 border-dotted"
        >
          <h1 className="text-6xl md:text-3xl md:font-bold font-bold text-white">
            My Projects.
          </h1>
        </div>
      </div>

      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
        {projectsData.map((project) => {
          return (
            <div>
              <div className="relative p-10 border-2 border-projectPage rounded-tl-3xl rounded-br-3xl text-center">
                <img src={project.image} className="w-full h-52" alt="" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black text-white hover:opacity-80">
                  <h1 className="text-3xl font-semibold">{project.title}</h1>
                  <div className="pr-0.5">
                    <a href={project.link}>
                      <button className="border-2 border-white py-2 px-5 mr-0.5 hover:bg-green-400 rounded-xl mt-5">
                        Demo
                      </button>
                    </a>
                    <a href={project.link}>
                      <button className="border-2 border-white py-2 px-5 hover:bg-green-400 rounded-xl mt-5">
                        GitHub
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Project;
