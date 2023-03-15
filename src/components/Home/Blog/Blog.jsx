import React from 'react';
import Blogdata from './Blogdata';

import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';

export const Blog = () => {
  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>Latest Blog</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>
          <div className="container grid topMargin">
            {Blogdata.map((val) =>{
                return(
                  <div className="box">
                    <div className="img">
                      <img src="{val.cover}" alt="" />
                    </div>
                    <div className="text">
                      <span>{val.date}</span>
                      <h2>{val.title}</h2>
                      <a href='/'>Read more
                      <KeyboardDoubleArrowRight className='icon' />
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}
