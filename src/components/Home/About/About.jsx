import React from "react";

export const About = () => {
  const data = [
    {
      title: "Who I Am and Whay I Do",
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      desc3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cover: "",
    },
  ];

  return (
    <>
      <section className="about topMargin">
        <div className="container flex">
          {data.map((val) => {
            return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>About Me</h3>
                    <h1>{val.title}</h1>
                  </div>
                  <p>{val.desc1}</p>
                  <p>{val.desc2}</p>
                  <p>{val.desc3}</p>
                  <button className="primary-btn">Download CV</button>
                </div>
                <div className="right"></div>
                    <div className="img">
                        <img src="" alt=""/>
                    </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
