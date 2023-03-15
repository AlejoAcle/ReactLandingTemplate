import React from 'react'

export const Home = () => {
  return (
    <>
        <section className='home'>
            <div className='container flex'>
                <div className='img'>
                    {/* <img src='./assets/home.png'  alt='' /> */}
                </div>
            </div>
            <div className='right topMargin'>
                <h1>
                    I AM A <br />
                    WEB DESIGNER
                </h1>
                <div className='socialIcon'>
                    <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-instagram'></i>
                    <i className='fab fa-twitter'></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className='primary-btn'>Contact Us</button>
            </div>
        </section>
    </>
  )
}
