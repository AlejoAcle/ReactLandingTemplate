import React from 'react'

export const Branding = () => {

    const data = [
        {
            id:"01",
            heading:"Digital Branding",
            descrip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id:"02",
            heading:"Team Managment",
            descrip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id:"03",
            heading:"Creative Mind",
            descrip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]


  return (
    <>
        <section className='branding'>
            <div className='container grid'>
                {data.map((value)=>{
                   return <div className='box flex'>
                    <div className='text'>
                        <h1>{value.id}</h1>
                    </div>
                    <div className='para'>
                        <h2>{(value.heading)}</h2>
                        <p>{(value.descrip)}</p>
                    </div>
                   </div>
                })}
            </div>
        </section>
    </>
  )
}
