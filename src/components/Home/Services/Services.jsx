import React from "react";

export const Services = () => {

    const ServicesData = [
        {
            title:"Web Desgin",
            desc:"Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean",
            cover:""

        },
        {
            title:"Web Develpment",
            desc:"Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean",
            cover:""
        },
        {
            title:"Photography",
            desc:"Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean",
            cover:""
        },
        {
            title:"Live Support",
            desc:"Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean",
            cover:""
        },
        {
            title:"Content Writing",
            desc:"Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean",
            cover:""
        },
        {
            title:"Timely Deliverables",
            desc:"Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean",
            cover:""
        },
        
    ]


  return (
    <>
      <section className="services topMargin">
        <div className="container">
          <div className="heading">
            <h3>My Services</h3>
            <h1>Interactive Services Offered Me</h1>
          </div>
        </div>

        <div className="container grid topMargin">
          {ServicesData.map((val) => {
            return (
              <>
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
