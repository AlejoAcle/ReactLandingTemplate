import React from 'react'

export const Wrapper = () => {
    const DataTransfer = [
        {
            title:"Looking for Exclusive Services?",
            heading:"Get the Best for Your Business",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        
        },
    ]

  return (
    <>
    <section className="branding wrapper">
        <div className="container">
            {DataTransfer.map((val) =>{
                return(
                <div className="box">
                    <h3>{val.title}</h3>
                    <h2>{val.heading}</h2>
                    <p>{val.desc}</p>
                    <button className="primary-btn">Contact Us</button>
                </div>
                )
            })}
        
        </div>
    </section>
    </>
  )
}
