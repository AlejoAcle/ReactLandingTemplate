import React from 'react'

export const WrapperOne = () => {

    const data = [
        {
            num:"520%",
            text:"Awards winning",
        },
        {
            num:"99%",
            text:"Satisfied Clients",
        },
        {
            num:"3325",
            text:"Creative Projects"
        },
        {
            num:"54380",
            text:"Lines of Code"
        },

    ]



  return (
    <>
        <section className="Branding wrapperOne">
            <div className="container grid1">
                {data.map((val)=>{
                    return(
                        <>
                            <div className="box">
                                <h1>{val.num}</h1>
                                <p>{val.text}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    </>
  )
}
